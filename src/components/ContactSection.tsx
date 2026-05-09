import { useState } from "react";
import { toast } from "sonner";
import banditLogo from "@/assets/bandit-logo.svg";

const inputClass = "mt-2 w-full h-12 px-4 rounded-lg border-0 bg-[#F9F9F9] text-[13px] text-secondary placeholder:text-[#94A3B8] shadow-none focus:outline-none focus:ring-1 focus:ring-secondary transition-colors";

const ContactSection = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", company: "", email: "", requirements: "" });

  return (
    <section id="contact" className="bg-white pt-14 lg:pt-[80px] pb-8 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <img src={banditLogo} alt="Fog Bandit logo" className="w-16 h-auto" loading="lazy" />
              <div>
                <h1 className="font-inter text-[18px] md:text-[20px] font-bold text-foreground tracking-tight leading-tight">
                  FOG BANDIT<sup className="text-[10px]">®</sup>
                </h1>
                <p className="font-inter text-[18px] md:text-[20px] font-bold text-foreground tracking-tight leading-tight">ANZ</p>
              </div>
            </div>
            <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground tracking-tight leading-tight">
              Take control of your security
            </h2>
            <p className="font-dm-sans text-[14px] md:text-[16px] font-medium text-muted-foreground mt-4 leading-relaxed max-w-md">
              Complete this form and one of our trained security advisers will be in contact to help create the right Fog Bandit system for your needs.
            </p>
            <div className="mt-10 space-y-1">
              <p className="text-foreground text-sm font-medium">1300 385 358</p>
              <p className="text-foreground text-sm font-medium">security@banditanz.com</p>
              <p className="text-foreground text-sm font-medium">3/8 Royal Street</p>
              <p className="text-foreground text-sm font-medium">Kenwick WA 6107</p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <div>
                <label className="text-[13px] font-bold text-foreground block">First Name<span className="text-primary">*</span></label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={form.firstName}
                  onChange={e => setForm({...form, firstName: e.target.value})}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-[13px] font-bold text-foreground block">Last Name<span className="text-primary">*</span></label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={form.lastName}
                  onChange={e => setForm({...form, lastName: e.target.value})}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <div>
                <label className="text-[13px] font-bold text-foreground block">Company<span className="text-primary">*</span></label>
                <input
                  type="text"
                  placeholder="Enter your company name"
                  value={form.company}
                  onChange={e => setForm({...form, company: e.target.value})}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-[13px] font-bold text-foreground block">Email<span className="text-primary">*</span></label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className="text-[13px] font-bold text-foreground block">Requirements</label>
              <textarea
                placeholder="Tell us about your requirements"
                value={form.requirements}
                onChange={e => setForm({...form, requirements: e.target.value})}
                rows={4}
                className="mt-2 w-full px-4 py-3 rounded-lg border-0 bg-[#F9F9F9] text-[13px] text-secondary placeholder:text-[#94A3B8] shadow-none focus:outline-none focus:ring-1 focus:ring-secondary resize-none transition-colors min-h-[120px]"
              />
            </div>
            <button
              onClick={() => {
                if (!form.firstName || !form.email || !form.company) {
                  toast.error("Please fill in your name, company and email.");
                  return;
                }
                toast.success("Thanks! Our team will be in touch shortly.");
                setForm({ firstName: "", lastName: "", company: "", email: "", requirements: "" });
              }}
              className="w-full h-12 text-white rounded-lg font-semibold text-[14px] hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#021373" }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
