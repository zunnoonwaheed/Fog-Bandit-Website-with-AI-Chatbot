import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/fog-bandit-logo.svg";

const homeNavLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
];

const innerNavLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  activeLink?: string;
  mobileMode?: string;
}

const Navbar = (_props: NavbarProps = {}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const activeLink = _props.activeLink?.toLowerCase();

  // Use a light navbar on inner pages where the hero background is light
  const isLightPage = pathname !== "/";
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

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 pt-5 lg:pt-[30px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-0">
        <div
          className={cn(
            "flex items-center justify-between h-[60px] lg:h-[80px] rounded-xl border px-4 backdrop-blur-md lg:px-[30px]",
            isLightPage
              ? "border-border bg-white/95 shadow-sm"
              : "border-white/20 bg-white/30",
          )}
        >
          <Link to="/" className="flex items-center" aria-label="Fog Bandit home">
            <img src={logo} alt="Fog Bandit" className="h-8 w-auto lg:h-10" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.label, link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "text-[15px] font-semibold transition-colors",
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

          <div className="hidden lg:flex items-center gap-5">
            {pathname === "/" && (
              <Link
                to="/contact"
                className={cn(
                  "text-[15px] font-semibold transition-colors",
                  isLightPage
                    ? "text-[#475569] hover:text-primary"
                    : "text-white/90 hover:text-white",
                )}
              >
                Contact Us
              </Link>
            )}
            <Link to="/contact" className="btn-primary px-5 py-2.5 text-sm">
              {pathname === "/" ? "Get a quote" : "Get a Quote"} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile: hamburger only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn("p-1 lg:hidden", isLightPage ? "text-[#021373]" : "text-white")}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
