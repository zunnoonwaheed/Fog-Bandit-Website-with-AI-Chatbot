import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChatWidgetOptional } from "@/context/ChatWidgetContext";
import newLogo from "@/assets/image 40.svg";
import { homeNavLinks, innerNavLinks } from "@/constants/navigation";
import { useAuth } from "@/context/AuthContext";

interface NavbarProps {
  activeLink?: string;
  mobileMode?: string;
}

const Navbar = (_props: NavbarProps = {}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const chatWidget = useChatWidgetOptional();
  const location = useLocation();
  const { pathname, hash } = location;
  const activeLink = _props.activeLink?.toLowerCase();
  const { user, loading: authLoading } = useAuth();
  const returnTo = `${pathname}${location.search}${hash}`;

  // Use a light navbar on inner pages where the hero background is light
  const isLightPage = pathname !== "/";
  const isHomeHeroNav = pathname === "/";
  const navLinks = pathname === "/" ? homeNavLinks : innerNavLinks;

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Scroll to hash target when navigating to /#section links
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.includes("#")) return;
    const [path, id] = href.split("#");
    const targetPath = path || "/";
    if (pathname === targetPath) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
      setMobileOpen(false);
    }
  };

  const isActive = (label: string, href: string) => {
    if (activeLink === label.toLowerCase()) return true;
    if (href === "/") return pathname === "/" && !hash;
    if (href.includes("#")) {
      const [path, id] = href.split("#");
      return pathname === (path || "/") && hash === `#${id}`;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  if (chatWidget?.isChatOpen) {
    return null;
  }

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 pt-5 lg:pt-[30px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-0">
        <div
          className={cn(
            "flex h-[56px] w-full min-w-0 items-center px-4 sm:h-[60px] sm:px-5 lg:h-20 lg:px-[30px] rounded-2xl border backdrop-blur-xl transition-shadow duration-300",
            isLightPage
              ? "border-white/80 bg-white/95 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.28)]"
              : "border-white/20 bg-white/25 shadow-[0_16px_44px_-26px_rgba(0,0,0,0.45)]",
          )}
        >
          <a
            href="/"
            data-no-animate
            className="relative z-10 flex h-full min-w-[119px] shrink-0 cursor-pointer items-center overflow-visible pointer-events-auto"
            aria-label="Fog Bandit ANZ — home"
          >
            <img
              src={newLogo}
              alt=""
              aria-hidden
              className="pointer-events-none h-12 w-auto max-h-14 max-w-[calc(100vw-10rem)] shrink-0 object-contain object-left sm:h-14 lg:h-[56px] lg:max-w-none"
            />
          </a>

          <div className="hidden min-w-0 flex-1 justify-center gap-8 px-4 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.label, link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative shrink-0 py-2 text-[15px] font-semibold tracking-[-0.01em] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:mx-auto after:h-0.5 after:rounded-full after:transition-all after:duration-300",
                    isLightPage
                      ? active
                        ? "text-primary after:w-full after:bg-primary"
                        : "text-[#475569] after:w-0 after:bg-primary hover:text-primary hover:after:w-full"
                      : active
                        ? "text-white after:w-full after:bg-white"
                        : "text-white/90 after:w-0 after:bg-white hover:text-white hover:after:w-full",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden shrink-0 items-center gap-5 lg:flex">
            {!authLoading && (
              <Link
                to={user ? "/account" : "/login"}
                state={user ? undefined : { from: returnTo }}
                className={cn(
                  "text-[15px] font-semibold tracking-[-0.01em] transition-colors",
                  isLightPage ? "text-[#475569] hover:text-primary" : "text-white/90 hover:text-white",
                )}
              >
                {user ? "My Account" : "Sign In"}
              </Link>
            )}
            {pathname === "/" && (
              <Link
                to="/contact"
                className={cn(
                  "text-[15px] font-semibold tracking-[-0.01em] transition-colors",
                  isLightPage
                    ? "text-[#475569] hover:text-primary"
                    : "text-white/90 hover:text-white",
                )}
              >
                Contact Us
              </Link>
            )}
            <Link to="/contact" className="btn-primary gap-2 px-5 py-2.5 text-[15px] font-semibold tracking-[-0.01em]">
              {pathname === "/" ? "Get a quote" : "Get a Quote"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 min-[390px]:gap-2 lg:hidden">
            {pathname === "/" && (
              <Link
                to="/contact"
                className={cn(
                  "btn-primary gap-1 px-3 py-2 text-[14px] font-semibold tracking-[-0.01em] min-[390px]:px-3.5 min-[390px]:text-[15px] whitespace-nowrap",
                )}
                tabIndex={mobileOpen ? -1 : undefined}
              >
                Get a quote <ArrowRight className="h-[15px] w-[15px] shrink-0" />
              </Link>
            )}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "rounded-lg p-2 [-webkit-tap-highlight-color:transparent]",
                isLightPage ? "text-[#021373]" : "text-white",
              )}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/80 bg-background/95 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl lg:hidden">
            <div className="px-6 py-5 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors",
                    isActive(link.label, link.href)
                      ? "bg-primary/[0.06] text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              {pathname === "/" && (
                <Link to="/contact" className="block py-1 text-base font-medium text-muted-foreground transition-colors hover:text-foreground">
                  Contact Us
                </Link>
              )}
              {!authLoading && (
                <Link
                  to={user ? "/account" : "/login"}
                  state={user ? undefined : { from: returnTo }}
                  className="block rounded-lg px-3 py-2 text-[15px] font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {user ? "My Account" : "Sign In"}
                </Link>
              )}
              <Link to="/contact" className="btn-primary mt-3 w-full justify-center">
                Get a quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
