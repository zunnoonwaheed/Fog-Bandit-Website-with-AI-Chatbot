import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { toast } from "sonner";
import AuthShell from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) {
      toast.error("Authentication is not configured yet.");
      return;
    }

    const data = new FormData(event.currentTarget);
    const password = String(data.get("password") || "");
    if (password !== String(data.get("confirmPassword") || "")) {
      toast.error("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    const email = String(data.get("email") || "").trim();
    const fullName = String(data.get("fullName") || "").trim();
    const { data: result, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });
    setIsSubmitting(false);

    if (error) {
      const emailRateLimited =
        error.status === 429 ||
        error.code === "over_email_send_rate_limit" ||
        /rate limit/i.test(error.message);

      toast.error(
        emailRateLimited
          ? "Confirmation emails are temporarily unavailable. Please try again later or contact Fog Bandit ANZ."
          : error.message,
      );
      return;
    }

    if (result.session) {
      toast.success(`Welcome, ${fullName || email.split("@")[0]}!`);
      const destination = typeof location.state?.from === "string" ? location.state.from : "/account";
      navigate(destination, { replace: true });
    } else {
      localStorage.setItem("fogBanditPendingWelcome", JSON.stringify({ email, name: fullName }));
      toast.success("Check your email to confirm your account.");
      navigate("/login", { replace: true, state: location.state });
    }
  };

  return (
    <AuthShell eyebrow="Customer account" title="Create your account" description="Set up secure access for a more personalised Fog Bandit experience.">
      {!supabase && (
        <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-5 text-amber-900">
          Add the Supabase URL and anonymous key to <code>.env.vercel</code> to enable signup locally.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="signup-name" className="mb-2 block text-sm font-semibold text-foreground">Full name</label>
          <div className="relative">
            <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="signup-name" name="fullName" autoComplete="name" required placeholder="Enter your full name" className="h-12 rounded-xl pl-10" />
          </div>
        </div>
        <div>
          <label htmlFor="signup-email" className="mb-2 block text-sm font-semibold text-foreground">Email address</label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="signup-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" className="h-12 rounded-xl pl-10" />
          </div>
        </div>
        <div>
          <label htmlFor="signup-password" className="mb-2 block text-sm font-semibold text-foreground">Password</label>
          <div className="relative">
            <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="signup-password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" required minLength={8} placeholder="At least 8 characters" className="h-12 rounded-xl px-10" />
            <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="signup-confirm" className="mb-2 block text-sm font-semibold text-foreground">Confirm password</label>
          <div className="relative">
            <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input id="signup-confirm" name="confirmPassword" type={showPassword ? "text" : "password"} autoComplete="new-password" required minLength={8} placeholder="Repeat your password" className="h-12 rounded-xl px-10" />
            <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label={showPassword ? "Hide confirmed password" : "Show confirmed password"}>
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <label className="flex items-start gap-3 text-xs leading-5 text-muted-foreground">
          <input name="terms" type="checkbox" required className="mt-1 h-4 w-4 rounded border-border accent-[#021373]" />
          <span>I agree to the <Link to="/privacy-policy" className="font-semibold text-[#021373] hover:underline">Privacy Policy</Link> and <Link to="/sales-service-conditions" className="font-semibold text-[#021373] hover:underline">Sales &amp; Service Conditions</Link>.</span>
        </label>
        <Button type="submit" disabled={isSubmitting || !supabase} className="h-12 w-full rounded-xl bg-[#021373] text-white hover:bg-[#021373]/90">
          {isSubmitting ? "Creating account…" : "Create account"}
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account? <Link to="/login" state={location.state} className="font-semibold text-primary hover:underline">Sign in</Link>
      </p>
    </AuthShell>
  );
};

export default SignUp;
