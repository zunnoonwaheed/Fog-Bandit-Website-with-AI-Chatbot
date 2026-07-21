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
}
