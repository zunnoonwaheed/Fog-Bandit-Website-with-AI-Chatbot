import { useEffect, useState, type FormEvent } from "react";
import { MonitorCog, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type RegisteredSystem = Tables<"registered_systems">;

const AccountSystems = () => {
  const { user } = useAuth();
  const [items, setItems] = useState<RegisteredSystem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const { data, error } = await supabase!.from("registered_systems").select("*").order("created_at", { ascending: false });
    if (error) toast.error("Unable to load registered systems. The portal database may still need setup.");
    setItems(data || []);
    setLoading(false);
  };
  useEffect(() => { void load(); }, []);

  const addSystem = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setSaving(true);
    const { error } = await supabase!.from("registered_systems").insert({
      user_id: user.id,
      product_name: String(data.get("productName") || ""),
      serial_number: String(data.get("serialNumber") || ""),
      installation_date: String(data.get("installationDate") || "") || null,
      warranty_expiry: String(data.get("warrantyExpiry") || "") || null,
      installer_name: String(data.get("installerName") || ""),
    });
    setSaving(false);
    if (error) return toast.error(error.code === "23505" ? "That serial number is already registered." : error.message);
    form.reset();
    toast.success("System registered.");
    await load();
  };

  const remove = async (id: string) => {
    const { error } = await supabase!.from("registered_systems").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setItems((current) => current.filter((item) => item.id !== id));
    toast.success("System removed.");
  };

  return (
    <div className="space-y-6">
      <div className="premium-card rounded-2xl p-6 md:p-8">
        <h1 className="text-2xl font-semibold md:text-3xl">Register a Fog Bandit system</h1>
        <p className="mt-2 text-sm text-muted-foreground">Keep product, installation and warranty information with your account.</p>
        <form onSubmit={addSystem} className="mt-7 grid gap-5 sm:grid-cols-2">
          <div><label className="mb-2 block text-sm font-semibold text-foreground">Product name</label><Input name="productName" required placeholder="e.g. Bandit 320" className="h-12 rounded-xl" /></div>
          <div><label className="mb-2 block text-sm font-semibold text-foreground">Serial number</label><Input name="serialNumber" required className="h-12 rounded-xl" /></div>
          <div><label className="mb-2 block text-sm font-semibold text-foreground">Installation date</label><Input name="installationDate" type="date" className="h-12 rounded-xl" /></div>
          <div><label className="mb-2 block text-sm font-semibold text-foreground">Warranty expiry</label><Input name="warrantyExpiry" type="date" className="h-12 rounded-xl" /></div>
          <div className="sm:col-span-2"><label className="mb-2 block text-sm font-semibold text-foreground">Installer or security partner</label><Input name="installerName" className="h-12 rounded-xl" /></div>
          <Button disabled={saving} className="h-11 rounded-xl bg-[#021373] px-6 text-white hover:bg-[#021373]/90 sm:col-span-2 sm:w-fit">{saving ? "Registering…" : "Register system"}</Button>
        </form>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Registered systems</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {loading ? <p className="text-sm text-muted-foreground">Loading systems…</p> : items.length === 0 ? <div className="premium-card rounded-2xl p-8 text-center md:col-span-2"><MonitorCog className="mx-auto h-8 w-8 text-[#021373]" /><p className="mt-3 text-sm text-muted-foreground">No systems registered yet.</p></div> : items.map((item) => (
            <article key={item.id} className="premium-card rounded-2xl p-5">
              <div className="flex items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wide text-primary">{item.serial_number}</p><h3 className="mt-2 text-lg font-semibold">{item.product_name}</h3></div><button type="button" onClick={() => remove(item.id)} className="rounded-lg p-2 text-muted-foreground hover:bg-red-50 hover:text-red-600" aria-label={`Remove ${item.product_name}`}><Trash2 className="h-4 w-4" /></button></div>
              <dl className="mt-4 space-y-2 text-sm text-muted-foreground"><div className="flex justify-between gap-4"><dt>Installed</dt><dd>{item.installation_date ? new Date(`${item.installation_date}T00:00:00`).toLocaleDateString("en-AU") : "Not provided"}</dd></div><div className="flex justify-between gap-4"><dt>Warranty expiry</dt><dd>{item.warranty_expiry ? new Date(`${item.warranty_expiry}T00:00:00`).toLocaleDateString("en-AU") : "Not provided"}</dd></div>{item.installer_name && <div className="flex justify-between gap-4"><dt>Installer</dt><dd className="text-right">{item.installer_name}</dd></div>}</dl>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountSystems;
