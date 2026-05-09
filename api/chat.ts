import type { VercelRequest, VercelResponse } from "@vercel/node";

const SHORT_SYSTEM = `You are the Fog Bandit Quote Assistant. Help customers get security quotes.

Keep responses SHORT and to-the-point - 1-2 sentences max. Ask ONE question at a time. Be friendly but concise.`;

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "ANTHROPIC_API_KEY is not configured" });
    return;
  }

  try {
    let body: { messages?: Array<{ role: string; content: string }> };
    if (req.body != null && typeof req.body === "object" && !Array.isArray(req.body)) {
      body = req.body as typeof body;
    } else if (typeof req.body === "string") {
      try {
        body = JSON.parse(req.body || "{}") as typeof body;
      } catch {
        body = {};
      }
    } else {
      body = {};
    }

    const messages = Array.isArray(body?.messages) ? body.messages : [];
    if (messages.length === 0) {
      res.status(400).json({ error: "messages array is required" });
      return;
    }

    const cleanMessages = messages
      .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));

    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: SHORT_SYSTEM,
        messages: cleanMessages,
      }),
    });

    const text = await anthropicRes.text();
    if (!anthropicRes.ok) {
      res
        .status(anthropicRes.status)
        .json({ error: `AI error (${anthropicRes.status}): ${text.slice(0, 200)}` });
      return;
    }

    const data = JSON.parse(text) as { content?: Array<{ type?: string; text?: string }> };
    const reply =
      Array.isArray(data?.content)
        ? data.content
            .filter((b) => b?.type === "text")
            .map((b) => b.text)
            .join("\n")
            .trim() || "Sorry, I couldn't generate a response."
        : "Sorry, I couldn't generate a response.";

    res.status(200).json({ reply });
  } catch (e) {
    res.status(500).json({ error: e instanceof Error ? e.message : "Unknown error" });
  }
}
