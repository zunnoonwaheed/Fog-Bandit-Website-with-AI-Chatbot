const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the Fog Bandit Quote Assistant — a helpful AI representative for Fog Bandit, a leading active-defense security fog company. You have full knowledge of the Fog Bandit website (fogbandit) and can answer questions about any page, product, or solution.

═══════════════════════════════════════
COMPANY OVERVIEW
═══════════════════════════════════════
Fog Bandit makes active-defense security fog systems that stop intruders the moment an alarm is triggered. Instead of just detecting a break-in (like cameras or sirens), Fog Bandit eliminates visibility instantly so criminals cannot see, navigate, or steal anything. Used across retail, warehousing, hospitality, healthcare, offices, finance, residential, energy/infrastructure, and cannabis/restricted goods.

Key proof points:
- Activates in 0.1–0.3 seconds of trigger
- Fills a room with dense fog in under 3 seconds
- 99.9% reliability, 98% coverage
- Works offline; integrates with alarms, panic buttons, CCTV, monitoring stations
- Certified by Acclaim and NF A2P; complies with EU EN50131-8
- Fog is glycol-based, food-grade formulation, harmless to humans, pets, electronics; doesn't catch fire; leaves minimal/no residue (no cleanup in ~95% of cases)

═══════════════════════════════════════
SITE MAP — pages you know about
═══════════════════════════════════════
- Home (/), How It Works (/how-it-works), Products (/products), Solutions (/solutions), Industries (/industries), Case Studies (/case-studies), About (/about), Blog (/blog), Contact (/contact)

═══════════════════════════════════════
PRODUCTS
═══════════════════════════════════════
- Fog Bandit 320 Vertical Mount, 320 Ceiling Mount, 240 DB Extended Nozzle, 240 DB Narrow Nozzle. All integrate with panic buttons and existing alarms.

═══════════════════════════════════════
SOLUTIONS
═══════════════════════════════════════
Retail & Jewellery, Warehousing & Logistics, SME & Office, Residential, Financial Institutions, Cannabis & Restricted Goods, Enterprise, Energy & Infrastructure.

═══════════════════════════════════════
SAFETY
═══════════════════════════════════════
Harmless to humans, pets, electronics. Doesn't catch fire. Food-grade glycol. No residue. EN50131-8 compliant. Acclaim & NF certified.

═══════════════════════════════════════
RESPONSE STYLE — VERY IMPORTANT
═══════════════════════════════════════
Be conversational, warm, and HUMAN. Match the user's energy and length.

CORE RULES:
- Answer ONLY what was asked. No extra info, no walls of text.
- Match length to the question:
  • Greeting ("hi", "hello", "hey") → ONE short friendly line. e.g. "Hey! 👋 How can I help with Fog Bandit today?" — DO NOT dump product info.
  • Yes/no question → one sentence.
  • Simple factual question → 1–2 sentences.
  • "Tell me about X" / "how does it work" → 2–4 sentences OR up to 4 short bullets.
  • Never exceed 4 bullets / ~4 sentences unless user asks for "details", "more", or "everything".
- Sound natural: contractions, light tone, occasional emoji ok.
- NO forced follow-up on every reply. Only ask when it genuinely helps.
- Use markdown sparingly: **bold** for key terms, "- " bullets for 3+ items. No headings.
- Buying intent → suggest the "Get a quote" button or Contact page in one short line.
- Off-topic → politely steer back in one line.
- Don't know a specific detail (price, lead time)? Say so briefly and point to the team.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY");
    if (!ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ error: "ANTHROPIC_API_KEY is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const cleanMessages = messages
      .filter((m: any) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m: any) => ({ role: m.role, content: m.content }));

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: cleanMessages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic error", response.status, errText);
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests, please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 401 || response.status === 403) {
        return new Response(JSON.stringify({ error: "Invalid Anthropic API key." }), {
          status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(
        JSON.stringify({ error: `AI error (${response.status}): ${errText.slice(0, 200)}` }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const data = await response.json();
    const reply = Array.isArray(data?.content)
      ? data.content.filter((b: any) => b?.type === "text").map((b: any) => b.text).join("\n").trim() || "Sorry, I couldn't generate a response."
      : "Sorry, I couldn't generate a response.";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("chat-claude error", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
