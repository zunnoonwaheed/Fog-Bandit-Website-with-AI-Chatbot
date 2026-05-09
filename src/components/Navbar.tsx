import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChatWidgetOptional } from "@/context/ChatWidgetContext";
import logoFallback from "@/assets/fog-bandit-logo.svg";
import logoLockupAnz from "@/assets/fog-bandit-anz-logo-full.svg";
import logoHomeHero from "@/assets/fog-bandit-anz-logo-home.png";
import { homeNavLinks, innerNavLinks } from "@/constants/navigation";

interface NavbarProps {
  activeLink?: string;
  mobileMode?: string;
}

const Navbar = (_props: NavbarProps = {}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const chatWidget = useChatWidgetOptional();
  const { pathname, hash } = useLocation();
  const activeLink = _props.activeLink?.toLowerCase();

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
            "flex h-[56px] w-full min-w-0 items-center px-4 sm:h-[60px] sm:px-5 lg:h-20 lg:px-[30px] rounded-2xl border backdrop-blur-md",
            isLightPage
              ? "border-border bg-white/95 shadow-sm"
              : "border-white/20 bg-white/30",
          )}
        >
          <Link
            to="/"
            data-no-animate
            className="flex shrink-0 items-center gap-0 overflow-visible"
            aria-label="Fog Bandit ANZ — home"
          >
            {isHomeHeroNav ? (
              <img
                src={logoHomeHero}
                alt=""
                aria-hidden
                className="h-9 w-auto max-h-10 max-w-[calc(100vw-10rem)] shrink-0 object-contain object-left drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] sm:h-10 lg:h-[42px] lg:max-w-none"
              />
            ) : (
              <>
                <img
                  src={logoFallback}
                  alt=""
                  aria-hidden
                  className="h-[30px] w-auto shrink-0 object-contain sm:h-8 lg:hidden"
                />
                <img
                  src={logoLockupAnz}
                  alt=""
                  aria-hidden
                  className="max-lg:hidden h-[40px] w-auto shrink-0 object-contain object-left"
                />
              </>
            )}
          </Link>

          <div className="hidden min-w-0 flex-1 justify-center gap-8 px-4 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.label, link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "shrink-0 text-[15px] font-semibold tracking-[-0.01em] transition-colors",
                    isLightPage
                      ? active
                        ? "text-primary"
                        : "text-[#475569] hover:text-primary"
                      : active
                        ? "text-white"
                        : "text-white/90 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden shrink-0 items-center gap-5 lg:flex">
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
          <div className="mt-2 rounded-xl border border-border bg-background/95 shadow-sm backdrop-blur-md lg:hidden">
            <div className="px-6 py-5 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "block py-1 text-base font-medium transition-colors",
                    isActive(link.label, link.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
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
