import { createSign } from "node:crypto";
import type { VercelRequest, VercelResponse } from "@vercel/node";

type LeadPayload = {
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  location?: string;
  areaToSecure?: string;
  message?: string;
  sourcePage?: string;
  marketingConsent?: boolean;
  website?: string;
};

const MAX_FIELD_LENGTH = 5_000;
const ALLOWED_TYPES = new Set(["Quote Request", "Contact Enquiry", "Finance Application", "Newsletter Signup"]);

const base64Url = (value: string | Buffer) => Buffer.from(value).toString("base64url");

const cleanCell = (value: unknown, maxLength = MAX_FIELD_LENGTH) => {
  const text = typeof value === "string" ? value.trim().slice(0, maxLength) : "";
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
};

const parseBody = (req: VercelRequest): LeadPayload => {
  if (req.body && typeof req.body === "object" && !Array.isArray(req.body)) {
    return req.body as LeadPayload;
  }

  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body) as LeadPayload;
    } catch {
      return {};
    }
  }

  return {};
};

const getAccessToken = async (clientEmail: string, privateKey: string) => {
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64Url(JSON.stringify({
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));
  const unsignedToken = `${header}.${claims}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const assertion = `${unsignedToken}.${signer.sign(privateKey, "base64url")}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  const result = await response.json() as { access_token?: string; error_description?: string };

  if (!response.ok || !result.access_token) {
    throw new Error(result.error_description || "Google authentication failed");
  }

  return result.access_token;
};

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = parseBody(req);

  // Honeypot: bots commonly fill hidden fields. Return success without storing it.
  if (body.website) {
    res.status(200).json({ ok: true });
    return;
  }

  const type = cleanCell(body.type, 100);
  const email = cleanCell(body.email, 320).toLowerCase();
  const name = cleanCell(body.name, 200);
  if (!ALLOWED_TYPES.has(type) || !email || !/^\S+@\S+\.\S+$/.test(email)) {
    res.status(400).json({ error: "A valid lead type and email are required" });
    return;
  }

  if (type !== "Newsletter Signup" && !name) {
    res.status(400).json({ error: "Name is required" });
    return;
  }

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const tabName = process.env.GOOGLE_SHEET_TAB || "Website Leads";

  if (!clientEmail || !privateKey || !sheetId) {
    res.status(500).json({ error: "Lead storage is not configured" });
    return;
  }

  try {
    const accessToken = await getAccessToken(clientEmail, privateKey);
    const safeTabName = tabName.replace(/'/g, "''");
    const range = encodeURIComponent(`'${safeTabName}'!A:N`);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(sheetId)}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const row = [
      new Date().toISOString(),
      type,
      "New",
      name,
      email,
      cleanCell(body.phone, 100),
      cleanCell(body.company, 300),
      cleanCell(body.location, 300),
      cleanCell(body.areaToSecure, 300),
      cleanCell(body.message),
      cleanCell(body.sourcePage, 500),
      body.marketingConsent === true ? "Yes" : "No",
      "",
      "",
    ];

    const sheetsResponse = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
    });

    if (!sheetsResponse.ok) {
      const details = await sheetsResponse.text();
      console.error("Google Sheets append failed", sheetsResponse.status, details.slice(0, 500));
      throw new Error("Unable to save lead");
    }

    res.status(201).json({ ok: true });
  } catch (error) {
    console.error("Lead submission failed", error instanceof Error ? error.message : error);
    res.status(500).json({ error: "Unable to submit your enquiry right now" });
  }
}
