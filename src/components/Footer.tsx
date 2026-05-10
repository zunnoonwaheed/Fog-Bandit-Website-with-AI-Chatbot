import { Link } from "react-router-dom";
import banditLogo from "@/assets/bandit-logo.svg";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Strategic Partners", href: "/strategic-partners" },
  { label: "Financial Assistance", href: "/financing" },
  { label: "Certifications and Accreditations", href: "/about" },
];

const resourceLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Testimonials", href: "/case-studies" },
  { label: "Blog / Insights", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

const productLinks = [
  { label: "All Products", href: "/products" },
  { label: "Fog Bandit 240 Series", href: "/products" },
  { label: "Fog Bandit 320 Series", href: "/products" },
  { label: "Flash Units & Accessories", href: "/products" },
];

const Footer = () => {
  return (
    <footer className="bg-white text-[hsl(220,20%,10%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div className="lg:col-span-1">
            <h2 className="font-inter text-[16px] md:text-[18px] font-bold text-[hsl(220,20%,10%)] mb-3">Fog Bandit</h2>
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
