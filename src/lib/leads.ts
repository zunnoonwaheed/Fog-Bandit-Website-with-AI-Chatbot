import { supabase } from "@/integrations/supabase/client";

const attributionFields: Record<string, string> = { utm_source: 'utmSource', utm_medium: 'utmMedium', utm_campaign: 'utmCampaign', utm_content: 'utmContent', utm_term: 'utmTerm', utm_id: 'utmId', fbclid: 'fbclid', gclid: 'gclid', msclkid: 'msclkid', ttclid: 'ttclid', li_fat_id: 'liFatId', twclid: 'twclid', dclid: 'dclid', wbraid: 'wbraid', gbraid: 'gbraid' };

export type LeadSubmission = {
  type: "Quote Request" | "Contact Enquiry" | "Finance Application" | "Newsletter Signup";
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  location?: string;
  areaToSecure?: string;
  message?: string;
  sourcePage?: string;
  marketingConsent?: boolean;
  website?: string;
};

export async function submitLead(lead: LeadSubmission): Promise<void> {
  const saved = (window as Window & { fogAttribution?: Record<string, string> }).fogAttribution || {};
  const params = new URLSearchParams(window.location.search);
  const attribution = Object.fromEntries(Object.entries(attributionFields).map(([key, field]) => [field, params.get(key) || saved[key] || '']));
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...lead,
      ...attribution,
      sourcePage: lead.sourcePage || `${window.location.pathname}${window.location.search}`,
    }),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => null) as { error?: string } | null;
    throw new Error(result?.error || "Unable to submit the form. Please try again.");
  }

  const result = await response.json();
  if (result.ok !== true) throw new Error("Unable to confirm your enquiry. Please try again.");
  if (lead.type === "Finance Application") {
    const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq;
    fbq?.("trackCustom", "FinanceEnquiry", { content_name: "Financing enquiry" });
  }

  // Keep the Google Sheet as the operational source of truth, then add a
  // private portal copy for authenticated customers. Portal storage is
  // best-effort so it never prevents a successful website enquiry.
  if (supabase) {
    const { data } = await supabase.auth.getSession();
    if (data.session?.user) {
      const subject = lead.type === "Newsletter Signup"
        ? "Newsletter subscription"
        : lead.areaToSecure || lead.company || `${lead.type} submitted`;
      const message = [
        lead.name && `Name: ${lead.name}`,
        `Email: ${lead.email}`,
        lead.phone && `Phone: ${lead.phone}`,
        lead.company && `Company: ${lead.company}`,
        lead.location && `Location: ${lead.location}`,
        lead.areaToSecure && `Area to secure: ${lead.areaToSecure}`,
        lead.message && `Message: ${lead.message}`,
        `Marketing consent: ${lead.marketingConsent ? "Yes" : "No"}`,
      ].filter(Boolean).join("\n");
      const { error } = await supabase.from("enquiries").insert({
        user_id: data.session.user.id,
        type: lead.type,
        subject,
        message,
      });
      if (error) console.error("Unable to add enquiry to customer portal", error.message);
    }
  }
}
