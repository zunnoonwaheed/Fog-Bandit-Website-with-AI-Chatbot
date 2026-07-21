import { useEffect, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const AccountProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({ full_name: "", company: "", phone: "", location: "", marketing_consent: false });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) return;
    supabase!.from("profiles").select("full_name, company, phone, location, marketing_consent").eq("id", user.id).single().then(({ data, error }) => {
      if (data) setProfile(data);
      if (error) toast.error("Unable to load your profile. The portal database may still need setup.");
      setLoading(false);
    });
  }, [user]);

  const save = async (event: FormEvent) => {
    event.preventDefault();
    if (!user) return;
    setSaving(true);
    const { error } = await supabase!.from("profiles").update(profile).eq("id", user.id);
    if (!error) await supabase!.auth.updateUser({ data: { full_name: profile.full_name } });
    setSaving(false);
    if (error) toast.error(error.message);
    else toast.success("Profile updated.");
  };

  return (
    <div className="premium-card rounded-2xl p-6 md:p-8">
      <h1 className="text-2xl font-semibold md:text-3xl">Profile &amp; preferences</h1>
      <p className="mt-2 text-sm text-muted-foreground">Keep your business and communication details up to date.</p>
      {loading ? <p className="py-12 text-sm text-muted-foreground">Loading profile…</p> : (
        <form onSubmit={save} className="mt-8 max-w-2xl space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div><label className="mb-2 block text-sm font-semibold text-foreground">Full name</label><Input required value={profile.full_name} onChange={(e) => setProfile({ ...profile, full_name: e.target.value })} className="h-12 rounded-xl" /></div>
            <div><label className="mb-2 block text-sm font-semibold text-foreground">Email</label><Input disabled value={user?.email || ""} className="h-12 rounded-xl bg-muted" /></div>
            <div><label className="mb-2 block text-sm font-semibold text-foreground">Company</label><Input value={profile.company} onChange={(e) => setProfile({ ...profile, company: e.target.value })} className="h-12 rounded-xl" /></div>
            <div><label className="mb-2 block text-sm font-semibold text-foreground">Phone</label><Input type="tel" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} className="h-12 rounded-xl" /></div>
          </div>
          <div><label className="mb-2 block text-sm font-semibold text-foreground">Location</label><Input value={profile.location} onChange={(e) => setProfile({ ...profile, location: e.target.value })} className="h-12 rounded-xl" /></div>
          <label className="flex items-start gap-3 rounded-xl border border-border bg-muted/40 p-4 text-sm leading-6 text-muted-foreground">
            <input type="checkbox" checked={profile.marketing_consent} onChange={(e) => setProfile({ ...profile, marketing_consent: e.target.checked })} className="mt-1 h-4 w-4 accent-[#021373]" />
            Send me occasional product updates, security insights and relevant Fog Bandit news.
          </label>
          <Button disabled={saving} className="h-11 rounded-xl bg-[#021373] px-6 text-white hover:bg-[#021373]/90">{saving ? "Saving…" : "Save changes"}</Button>
        </form>
      )}
    </div>
  );
};

export default AccountProfile;
