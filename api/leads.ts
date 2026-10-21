import { createHash, createSign } from "node:crypto";
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
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  utmId?: string;
  fbclid?: string;
  gclid?: string;
  msclkid?: string;
  ttclid?: string;
  liFatId?: string;
  twclid?: string;
  dclid?: string;
  wbraid?: string;
  gbraid?: string;
};

const MAX_FIELD_LENGTH = 5_000;
const ALLOWED_TYPES = new Set(["Quote Request", "Contact Enquiry", "Finance Application", "Newsletter Signup"]);
const ATTRIBUTION_HEADERS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id", "fbclid", "gclid", "msclkid", "ttclid", "li_fat_id", "twclid", "dclid", "wbraid", "gbraid"];

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

const sheetRange = (tabName: string, range: string) => encodeURIComponent(`'${tabName.replace(/'/g, "''")}'!${range}`).replace(/[!'()*]/g, (character) =>
  `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
);

const ensureAttributionHeaders = async (accessToken: string, sheetId: string, tabName: string) => {
  const contactUrl = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(sheetId)}/values/${sheetRange(tabName, "AD1")}`;
  const contactHeader = await fetch(contactUrl, { headers: { Authorization: `Bearer ${accessToken}` } });
  if (!contactHeader.ok) throw new Error("Unable to check contact key column");
  const contactValues = await contactHeader.json() as { values?: string[][] };
  const contactLabel = contactValues.values?.[0]?.[0];
  if (contactLabel && contactLabel !== "Contact Key") throw new Error("Column AD must be reserved for Contact Key before saving enquiries");
  if (!contactLabel) {
    const update = await fetch(`${contactUrl}?valueInputOption=RAW`, { method: "PUT", headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" }, body: JSON.stringify({ values: [["Contact Key"]] }) });
    if (!update.ok) throw new Error("Unable to label contact key column");
  }
  const range = sheetRange(tabName, "O1:AC1");
  const baseUrl = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(sheetId)}/values/${range}`;
  const existing = await fetch(baseUrl, { headers: { Authorization: `Bearer ${accessToken}` } });
  const existingValues = existing.ok ? await existing.json() as { values?: string[][] } : {};
  if (existingValues.values?.[0]?.some((value) => value)) return;
  const update = await fetch(`${baseUrl}?valueInputOption=RAW`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
    body: JSON.stringify({ values: [ATTRIBUTION_HEADERS] }),
  });
  if (!update.ok) console.error("Unable to add attribution headers", update.status);
};

const sendEmail = async (to: string[], subject: string, text: string) => {
  if (!process.env.RESEND_API_KEY || !to.length) return false;
  const response = await fetch("https://api.resend.com/emails", {
    signal: AbortSignal.timeout(8000),
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.RESEND_FROM_EMAIL || "Fog Bandit ANZ <security@banditanz.com.au>", to, subject, text }),
  });
  if (!response.ok) throw new Error(`Email provider rejected message: ${response.status}`);
  return true;
};

const notifyLead = async (type: string, email: string, name: string, company: string, contactKey: string) => {
  const finance = type === "Finance Application";
  const recipients = (finance ? process.env.FINANCE_NOTIFICATION_EMAILS : process.env.LEAD_NOTIFICATION_EMAILS) || process.env.LEAD_NOTIFICATION_EMAILS || "";
  // Both notifications are independent; one failure must not suppress the other.
  const results = await Promise.allSettled([
    sendEmail([email], finance ? "We've received your Fog Bandit financing enquiry" : "We've received your Fog Bandit enquiry",
      `Hi ${name || "there"},\n\n${finance ? "Thanks for your financing enquiry. Our team will contact you to discuss available options. This acknowledgement is not finance approval." : type === "Quote Request" ? "Thanks for requesting a free Fog Bandit store security assessment. Our team will get back to you within 1–2 business days to discuss your store's security needs." : "Thanks for contacting Fog Bandit. Our team has received your enquiry."}\n\nRegards,\nFog Bandit ANZ`),
    sendEmail(recipients.split(",").map(value => value.trim()).filter(Boolean), `New Fog Bandit ${type}`,
      `A new ${type} has been saved in the website leads sheet.\nName: ${name}\nBusiness: ${company}\nEmail: ${email}\nContact key: ${contactKey}\n\nReview the sheet for enquiry details. Financing enquiries are not approved finance.`),
  ]);
  results.forEach((result, index) => {
    if (result.status === "rejected") console.error(index ? "Team notification failed" : "Acknowledgement failed", result.reason instanceof Error ? result.reason.message : "Email error");
    else if (!result.value) console.error(index ? "Team notification not configured" : "Acknowledgement not configured");
  });
};

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = parseBody(req);

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

  if (type === "Quote Request" && /^\/landingpage(?:\/|\?|$)/.test(body.sourcePage || "") && [body.phone, body.company, body.location, body.areaToSecure].some(value => typeof value !== "string" || !value.trim())) {
    res.status(400).json({ error: "Phone, business name, location and business type or area to secure are required" });
    return;
  }
  if (type === "Finance Application" && (typeof body.company !== "string" || !body.company.trim())) {
    res.status(400).json({ error: "Business name is required" });
    return;
  }
  const contactKey = createHash("sha256").update(email).digest("hex");

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const tabName = process.env.GOOGLE_SHEET_TAB || "Contact Form - Website";

  if (!clientEmail || !privateKey || !sheetId) {
    res.status(500).json({ error: "Lead storage is not configured" });
    return;
  }

  try {
    const accessToken = await getAccessToken(clientEmail, privateKey);
    await ensureAttributionHeaders(accessToken, sheetId, tabName);
    const range = sheetRange(tabName, "A:AD");
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
      cleanCell(body.utmSource, 500),
      cleanCell(body.utmMedium, 500),
      cleanCell(body.utmCampaign, 500),
      cleanCell(body.utmContent, 500),
      cleanCell(body.utmTerm, 500),
      cleanCell(body.utmId, 500),
      cleanCell(body.fbclid, 2_000),
      cleanCell(body.gclid, 2_000),
      cleanCell(body.msclkid, 2_000),
      cleanCell(body.ttclid, 2_000),
      cleanCell(body.liFatId, 2_000),
      cleanCell(body.twclid, 2_000),
      cleanCell(body.dclid, 2_000),
      cleanCell(body.wbraid, 2_000),
      cleanCell(body.gbraid, 2_000),
      contactKey,
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

    // Confirmation email is best-effort: a successfully stored enquiry must
    // never fail just because the email provider is unavailable.
    try {
      await notifyLead(type, email, name, cleanCell(body.company, 300), contactKey);
    } catch (emailError) {
      console.error(emailError instanceof Error ? emailError.message : "Confirmation email failed");
    }

    res.status(201).json({ ok: true });
  } catch (error) {
    console.error("Lead submission failed", error instanceof Error ? error.message : error);
    res.status(500).json({ error: "Unable to submit your enquiry right now" });
  }
}
