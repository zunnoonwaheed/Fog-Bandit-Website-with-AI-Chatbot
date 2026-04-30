import { Link, useLocation } from "react-router-dom";
import banditLogo from "@/assets/bandit-logo.svg";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const supportLinks = [
  { label: "Installation", href: "/contact" },
  { label: "Maintenance", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
  { label: "Warranty", href: "/contact" },
];

const Footer = () => {
  const { pathname } = useLocation();
  const showBanditLogo = pathname === "/contact";

  return (
    <footer className="bg-white text-[hsl(220,20%,10%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-8 items-start">
          <div>
            {showBanditLogo && (
              <img src={banditLogo} alt="Fog Bandit" className="h-16 md:h-20 w-auto mb-3" loading="lazy" />
            )}
            <h2 className="font-inter text-[16px] md:text-[18px] font-bold text-[hsl(220,20%,10%)] mb-3">Fog Bandit</h2>
            <p className="font-dm-sans text-[13px] md:text-[14px] text-[hsl(220,10%,46%)] leading-relaxed max-w-md">
              The ultimate high-speed security fogging system. Protecting assets and deterring intruders instantly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="font-inter text-[15px] md:text-[17px] font-semibold text-[hsl(220,20%,10%)] mb-4">Company</h3>
              <div className="space-y-2.5">
                {companyLinks.map((link) => (
                  <Link key={link.label} to={link.href} className="block font-dm-sans text-[13px] md:text-[14px] text-[hsl(220,10%,46%)] hover:text-[hsl(220,20%,10%)] transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-inter text-[15px] md:text-[17px] font-semibold text-[hsl(220,20%,10%)] mb-4">Support</h3>
              <div className="space-y-2.5">
                {supportLinks.map((link) => (
                  <Link key={link.label} to={link.href} className="block font-dm-sans text-[13px] md:text-[14px] text-[hsl(220,10%,46%)] hover:text-[hsl(220,20%,10%)] transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(220,13%,91%)] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-dm-sans text-[11px] md:text-[12px] text-[hsl(220,10%,46%)]">© 2026 Fog Bandit Security Systems. All rights reserved.</p>
          <div className="flex items-center gap-4 font-dm-sans text-[11px] md:text-[12px] text-[hsl(220,10%,46%)]">
            <Link to="#" className="hover:text-[hsl(220,20%,10%)] transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-[hsl(220,20%,10%)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
