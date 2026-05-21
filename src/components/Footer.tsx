import { Link } from "react-router-dom";
import banditLogo from "@/assets/Frame 2147227015 (2).png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Financial Assistance", href: "/financing" },
  { label: "Certifications and Accreditations", href: "/#certifications" },
];

const resourceLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog / Insights", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

const productLinks = [
  { label: "Fog Generators", href: "/products" },
  { label: "Bandit 320 Split", href: "/products" },
  { label: "LED Flash Light Barrier", href: "/products" },
  { label: "Financial Assistance", href: "/financing" },
];

const Footer = () => {
  return (
    <footer className="bg-white text-[hsl(220,20%,10%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div className="lg:col-span-1">
            <img src={banditLogo} alt="Fog Bandit ANZ" className="h-12 md:h-14 mb-4" />
            <p className="font-dm-sans text-[13px] md:text-[14px] text-[hsl(220,10%,46%)] leading-relaxed">
              The ultimate high-speed security fogging system. Protecting assets, staff, and operations instantly.
            </p>
          </div>

          <div>
            <h3 className="font-inter text-[15px] md:text-[17px] font-semibold text-[hsl(220,20%,10%)] mb-4">Quick Links</h3>
            <div className="space-y-2.5">
              {quickLinks.map((link) => (
                <Link key={link.label} to={link.href} className="block font-dm-sans text-[13px] md:text-[14px] text-[hsl(220,10%,46%)] hover:text-[hsl(220,20%,10%)] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-inter text-[15px] md:text-[17px] font-semibold text-[hsl(220,20%,10%)] mb-4">Resources</h3>
            <div className="space-y-2.5">
              {resourceLinks.map((link) => (
                <Link key={link.label} to={link.href} className="block font-dm-sans text-[13px] md:text-[14px] text-[hsl(220,10%,46%)] hover:text-[hsl(220,20%,10%)] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-inter text-[15px] md:text-[17px] font-semibold text-[hsl(220,20%,10%)] mb-4">Products</h3>
            <div className="space-y-2.5">
              {productLinks.map((link) => (
                <Link key={link.label} to={link.href} className="block font-dm-sans text-[13px] md:text-[14px] text-[hsl(220,10%,46%)] hover:text-[hsl(220,20%,10%)] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(220,13%,91%)] pt-6">
          <p className="font-dm-sans text-[11px] md:text-[12px] text-[hsl(220,10%,46%)]">© 2026 Fog Bandit Security Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
