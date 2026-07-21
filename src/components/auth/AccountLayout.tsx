import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Bot, FileText, LogOut } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const accountLinks = [
  { to: "/account", label: "Chat history", icon: Bot, end: true },
  { to: "/account/enquiries", label: "Previous enquiries", icon: FileText, end: false },
];

const AccountLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const signOut = async () => {
    const { error } = await supabase!.auth.signOut();
    if (error) return toast.error(error.message);
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main className="page-hero px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-[150px] lg:pt-[175px]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Link to="/account" className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Customer portal</Link>
              <p className="mt-2 text-sm text-muted-foreground">Signed in as {user?.email}</p>
            </div>
            <Button variant="outline" onClick={signOut} className="h-10 self-start rounded-xl bg-white sm:self-auto"><LogOut className="mr-2 h-4 w-4" /> Sign out</Button>
          </div>

          <nav className="mb-6 flex gap-2 overflow-x-auto" aria-label="Customer account">
            {accountLinks.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors",
                  isActive ? "border-[#021373] bg-[#021373] text-white" : "border-border bg-white text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4" /> {label}
              </NavLink>
            ))}
          </nav>

          <section className="min-w-0"><Outlet /></section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccountLayout;
