import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Headphones, MonitorCog } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";

type Counts = { enquiries: number; systems: number; support: number };

const Account = () => {
  const { user } = useAuth();
  const [counts, setCounts] = useState<Counts>({ enquiries: 0, systems: 0, support: 0 });
  const displayName = String(user?.user_metadata?.full_name || "").trim();

  useEffect(() => {
    if (!user || !supabase) return;
    Promise.all([
      supabase.from("enquiries").select("id", { count: "exact", head: true }),
      supabase.from("registered_systems").select("id", { count: "exact", head: true }),
      supabase.from("support_requests").select("id", { count: "exact", head: true }),
    ]).then(([enquiries, systems, support]) => setCounts({ enquiries: enquiries.count ?? 0, systems: systems.count ?? 0, support: support.count ?? 0 }));
  }, [user]);

  const cards = [
    { icon: FileText, title: "Enquiries", value: counts.enquiries, description: "Quote and finance requests", href: "/account/enquiries" },
    { icon: MonitorCog, title: "Registered systems", value: counts.systems, description: "Products and warranty details", href: "/account/systems" },
    { icon: Headphones, title: "Support requests", value: counts.support, description: "Service and support history", href: "/account/support" },
  ];

  return (
    <div>
      <header>
        <h1 className="font-inter text-3xl font-semibold tracking-[-0.035em] text-foreground md:text-4xl">{displayName ? `Welcome, ${displayName}` : "Welcome to your account"}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">Manage your Fog Bandit enquiries, registered systems, support and account preferences in one place.</p>
      </header>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {cards.map(({ icon: Icon, title, value, description, href }) => (
          <Link key={title} to={href} className="premium-card group rounded-2xl p-6">
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#021373]/[0.07] text-[#021373]"><Icon className="h-5 w-5" /></div>
              <span className="text-3xl font-semibold text-foreground">{value}</span>
            </div>
            <h2 className="mt-5 text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#021373]">View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Account;
