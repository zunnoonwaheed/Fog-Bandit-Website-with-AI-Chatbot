import { useMemo, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import AuthShell from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

type Challenge = {
  email?: string;
  fullName?: string;
  mode?: "signup" | "recovery";
  destination?: string;
};

const getStoredChallenge = (): Challenge => {
  try {
    return JSON.parse(localStorage.getItem("fogBanditOtpChallenge") || "{}") as Challenge;
  } catch {
    return {};
  }
};

const VerifyEmailOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const challenge = useMemo(() => ({ ...getStoredChallenge(), ...(location.state as Challenge | null) }), [location.state]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recovery = challenge.mode === "recovery";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase || !challenge.email || !challenge.mode) {
      toast.error("Your verification request has expired. Please start again.");
      navigate(recovery ? "/forgot-password" : "/signup", { replace: true });
      return;
    }

    const token = String(new FormData(event.currentTarget).get("code") || "").replace(/\D/g, "");
    if (token.length !== 6) {
      toast.error("Enter the six-digit code from your email.");
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.auth.verifyOtp({
      email: challenge.email,
      token,
      type: recovery ? "recovery" : "email",
    });
    setIsSubmitting(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    localStorage.removeItem("fogBanditOtpChallenge");
    if (recovery) {
      toast.success("Code confirmed. Choose a new password.");
      navigate("/reset-password", { replace: true });
      return;
    }

    toast.success(`Welcome, ${challenge.fullName || challenge.email.split("@")[0]}!`);
    navigate(challenge.destination || "/account", { replace: true });
  };

  if (!challenge.email || !challenge.mode) {
    return (
      <AuthShell eyebrow="Verification" title="Start a new request" description="We need your email address before we can send a verification code.">
        <Link to="/signup" className="btn-primary w-full justify-center">Create an account</Link>
        <Link to="/forgot-password" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#021373] hover:underline"><ArrowLeft className="h-4 w-4" /> Reset password</Link>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      eyebrow={recovery ? "Account recovery" : "Confirm your account"}
      title="Enter your verification code"
      description={`We sent a six-digit code to ${challenge.email}. It expires shortly.`}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="verification-code" className="mb-2 block text-sm font-semibold text-foreground">Six-digit code</label>
          <div className="relative">
            <ShieldCheck className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="verification-code" name="code" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} required placeholder="123456" className="h-12 rounded-xl pl-10 text-center text-lg font-semibold tracking-[0.35em]" />
          </div>
        </div>
        <Button type="submit" disabled={isSubmitting || !supabase} className="h-12 w-full rounded-xl bg-[#021373] text-white hover:bg-[#021373]/90">
          {isSubmitting ? "Verifying…" : "Verify code"}
        </Button>
      </form>
      <p className="mt-5 flex items-center gap-2 text-xs leading-5 text-muted-foreground"><Mail className="h-4 w-4 shrink-0" /> Check your inbox and spam folder. You can request a new code after one minute.</p>
      <Link to={recovery ? "/forgot-password" : "/signup"} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#021373] hover:underline"><ArrowLeft className="h-4 w-4" /> Use a different email</Link>
    </AuthShell>
  );
};

export default VerifyEmailOtp;
