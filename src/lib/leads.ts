import { supabase } from "@/integrations/supabase/client";

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
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...lead,
      sourcePage: lead.sourcePage || window.location.pathname,
    }),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => null) as { error?: string } | null;
    throw new Error(result?.error || "Unable to submit the form. Please try again.");
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
      const { error } = await supabase.from("enquiries").insert({
        user_id: data.session.user.id,
        type: lead.type,
        subject,
        message: lead.message || "",
      });
      if (error) console.error("Unable to add enquiry to customer portal", error.message);
    }
  }
}
