import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Enquiry = Tables<"enquiries">;

const AccountEnquiries = () => {
  const [items, setItems] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase!.from("enquiries").select("*").order("submitted_at", { ascending: false }).then(({ data, error }) => {
      if (error) toast.error("Unable to load your previous enquiries.");
      setItems(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold md:text-3xl">Previous enquiries</h1>
      <p className="mt-2 text-sm text-muted-foreground">Forms you submitted while signed in, including quote, contact, finance and newsletter requests.</p>
      <div className="mt-7 space-y-4">
        {loading ? <p className="py-12 text-sm text-muted-foreground">Loading enquiries…</p> : items.length === 0 ? (
          <div className="premium-card rounded-2xl p-10 text-center">
            <FileText className="mx-auto h-8 w-8 text-[#021373]" />
            <h2 className="mt-4 text-lg font-semibold">No previous enquiries</h2>
            <p className="mt-2 text-sm text-muted-foreground">Forms submitted while you are signed in will appear here.</p>
          </div>
        ) : items.map((item) => (
          <article key={item.id} className="premium-card rounded-2xl p-5 md:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-primary">{item.type}</p>
                <h2 className="mt-2 text-lg font-semibold">{item.subject || "Fog Bandit enquiry"}</h2>
              </div>
              <span className="rounded-full bg-[#021373]/[0.07] px-3 py-1 text-xs font-semibold text-[#021373]">{item.status}</span>
            </div>
            {item.message && <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-muted-foreground">{item.message}</p>}
            <p className="mt-4 text-xs text-muted-foreground">Submitted {new Date(item.submitted_at).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AccountEnquiries;
