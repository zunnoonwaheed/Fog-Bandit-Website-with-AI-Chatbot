import { useEffect, useState, type FormEvent } from "react";
import { Headphones } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type SupportRequest = Tables<"support_requests">;

const AccountSupport = () => {
  const { user } = useAuth();
  const [items, setItems] = useState<SupportRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const { data, error } = await supabase!.from("support_requests").select("*").order("created_at", { ascending: false });
    if (error) toast.error("Unable to load support requests. The portal database may still need setup.");
    setItems(data || []);
    setLoading(false);
  };
  useEffect(() => { void load(); }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setSaving(true);
    const { error } = await supabase!.from("support_requests").insert({ user_id: user.id, subject: String(data.get("subject") || ""), message: String(data.get("message") || "") });
    setSaving(false);
    if (error) return toast.error(error.message);
    form.reset();
    toast.success("Support request submitted.");
    await load();
  };

  return (
    <div className="space-y-6">
      <div className="premium-card rounded-2xl p-6 md:p-8">
        <h1 className="text-2xl font-semibold md:text-3xl">Request support</h1>
        <p className="mt-2 text-sm text-muted-foreground">Tell us what you need help with and the Fog Bandit team will follow up.</p>
        <form onSubmit={submit} className="mt-7 max-w-2xl space-y-5">
          <div><label className="mb-2 block text-sm font-semibold text-foreground">Subject</label><Input name="subject" required placeholder="How can we help?" className="h-12 rounded-xl" /></div>
          <div><label className="mb-2 block text-sm font-semibold text-foreground">Details</label><Textarea name="message" required rows={5} placeholder="Include any useful product, serial number or service details" className="min-h-[140px] rounded-xl" /></div>
          <Button disabled={saving} className="h-11 rounded-xl bg-[#021373] px-6 text-white hover:bg-[#021373]/90">{saving ? "Submitting…" : "Submit support request"}</Button>
        </form>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Support history</h2>
        <div className="mt-4 space-y-4">
          {loading ? <p className="text-sm text-muted-foreground">Loading requests…</p> : items.length === 0 ? <div className="premium-card rounded-2xl p-8 text-center"><Headphones className="mx-auto h-8 w-8 text-[#021373]" /><p className="mt-3 text-sm text-muted-foreground">No support requests yet.</p></div> : items.map((item) => (
            <article key={item.id} className="premium-card rounded-2xl p-5 md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="text-lg font-semibold">{item.subject}</h3><span className="rounded-full bg-[#021373]/[0.07] px-3 py-1 text-xs font-semibold text-[#021373]">{item.status}</span></div>
              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-muted-foreground">{item.message}</p>
              <p className="mt-4 text-xs text-muted-foreground">Submitted {new Date(item.created_at).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountSupport;
