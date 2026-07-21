import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { toast } from "sonner";
import AuthShell from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) {
      toast.error("Authentication is not configured yet.");
      return;
    }
    const data = new FormData(event.currentTarget);
    setIsSubmitting(true);
    const { error } = await supabase.auth.resetPasswordForEmail(String(data.get("email") || "").trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setIsSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setSent(true);
  };

  return (
    <AuthShell eyebrow="Account recovery" title="Reset your password" description="Enter your account email and we’ll send you a secure reset link.">
      {sent ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-6 text-emerald-900">
          If an account exists for that address, a password reset email has been sent.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="recovery-email" className="mb-2 block text-sm font-semibold text-foreground">Email address</label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="recovery-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" className="h-12 rounded-xl pl-10" />
            </div>
          </div>
          <Button type="submit" disabled={isSubmitting || !supabase} className="h-12 w-full rounded-xl bg-[#021373] text-white hover:bg-[#021373]/90">
            {isSubmitting ? "Sending…" : "Send reset link"}
          </Button>
        </form>
      )}
      <Link to="/login" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#021373] hover:underline"><ArrowLeft className="h-4 w-4" /> Back to sign in</Link>
    </AuthShell>
  );
};

export default ForgotPassword;
