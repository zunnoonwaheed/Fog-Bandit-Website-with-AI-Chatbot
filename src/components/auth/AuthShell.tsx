import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type AuthShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

const AuthShell = ({ eyebrow, title, description, children }: AuthShellProps) => (
  <div className="min-h-screen bg-[#F8FAFC]">
    <Navbar />
    <main className="page-hero px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-[150px] lg:pt-[190px]">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-border bg-white shadow-[0_30px_80px_-45px_rgba(2,19,115,0.45)] lg:grid-cols-[0.88fr_1.12fr]">
        <aside className="relative hidden overflow-hidden bg-[#021373] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/[0.06]" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-2xl" />
          <div className="relative">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white">
              <ShieldCheck className="h-5 w-5" /> Fog Bandit ANZ
            </Link>
          </div>
          <div className="relative max-w-sm">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/60">Customer access</p>
            <h2 className="font-inter text-3xl font-semibold leading-tight text-white">Your security information, kept together.</h2>
            <p className="mt-4 text-sm leading-6 text-white/70">Sign in to access your Fog Bandit account and manage your details securely.</p>
          </div>
        </aside>

        <section className="p-6 sm:p-9 md:p-12">
          <div className="mx-auto max-w-md">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
            <h1 className="font-inter text-3xl font-semibold tracking-[-0.035em] text-foreground md:text-4xl">{title}</h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            <div className="mt-8">{children}</div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default AuthShell;
