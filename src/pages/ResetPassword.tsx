import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import { toast } from "sonner";
import AuthShell from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;
    const data = new FormData(event.currentTarget);
    const password = String(data.get("password") || "");
    if (password !== String(data.get("confirmPassword") || "")) {
      toast.error("Passwords do not match.");
      return;
    }
    setIsSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password });
    setIsSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Your password has been updated.");
    navigate("/account", { replace: true });
  };

  return (
    <AuthShell eyebrow="Account recovery" title="Choose a new password" description="Create a strong new password for your Fog Bandit account.">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="new-password" className="mb-2 block text-sm font-semibold text-foreground">New password</label>
          <div className="relative">
            <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="new-password" name="password" type="password" autoComplete="new-password" required minLength={8} className="h-12 rounded-xl pl-10" />
          </div>
        </div>
        <div>
          <label htmlFor="confirm-new-password" className="mb-2 block text-sm font-semibold text-foreground">Confirm new password</label>
          <Input id="confirm-new-password" name="confirmPassword" type="password" autoComplete="new-password" required minLength={8} className="h-12 rounded-xl" />
        </div>
        <Button type="submit" disabled={isSubmitting || !supabase} className="h-12 w-full rounded-xl bg-[#021373] text-white hover:bg-[#021373]/90">
          {isSubmitting ? "Updating…" : "Update password"}
        </Button>
      </form>
    </AuthShell>
  );
};

export default ResetPassword;
