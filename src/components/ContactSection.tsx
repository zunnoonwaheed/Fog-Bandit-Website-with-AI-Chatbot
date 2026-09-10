import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import banditLogo from "@/assets/footer-logo.svg";
import { submitLead } from "@/lib/leads";

const inputClass = "mt-2 w-full h-12 px-4 rounded-lg border-0 bg-[#F9F9F9] text-[13px] text-secondary placeholder:text-[#94A3B8] shadow-none focus:outline-none focus:ring-1 focus:ring-secondary transition-colors";

const ContactSection = () => {
  const [form, setForm] = useState({ fullName: "", company: "", email: "", requirements: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLead({
        type: "Quote Request",
        name: form.fullName.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        message: form.requirements.trim(),
      });
      toast.success("Thanks! Our team will be in touch shortly.");
      setForm({ fullName: "", company: "", email: "", requirements: "" });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white pt-[100px] lg:pt-[120px] pb-[100px] lg:pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <img src={banditLogo} alt="Fog Bandit logo" className="w-[245px] h-[124.41px] object-contain" loading="lazy" />
            </div>
            <h2 className="section-heading">
              Take control of your security
            </h2>
            <p className="font-dm-sans text-[14px] md:text-[16px] font-medium text-muted-foreground mt-4 leading-relaxed max-w-md">
              Complete this form and one of our trained security advisers will be in contact to help create the right Fog Bandit system for your needs.
            </p>
            <div className="mt-10">
              <p className="text-foreground text-sm font-semibold mb-2">Head Office</p>
              <p className="text-foreground text-sm font-medium">1300 385 358</p>
              <p className="text-foreground text-sm font-medium">security@banditanz.com.au</p>
              <p className="text-foreground text-sm font-medium">3/8 Royal Street</p>
              <p className="text-foreground text-sm font-medium">Kenwick WA 6107</p>
            </div>
          </div>

          {/* Right - Form */}
          <form className="premium-card lg:col-span-7 space-y-5 rounded-2xl p-5 sm:p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <div>
                <label htmlFor="quote-full-name" className="text-[13px] font-bold text-foreground block">Full name<span className="text-primary">*</span></label>
                <input
                  id="quote-full-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={e => setForm({...form, fullName: e.target.value})}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="quote-company" className="text-[13px] font-bold text-foreground block">Company <span className="font-normal text-muted-foreground">(if applicable)</span></label>
                <input
                  id="quote-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Enter your company name"
                  value={form.company}
                  onChange={e => setForm({...form, company: e.target.value})}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
                <label htmlFor="quote-email" className="text-[13px] font-bold text-foreground block">Email<span className="text-primary">*</span></label>
                <input
                  id="quote-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className={inputClass}
                />
            </div>
            <div>
              <label htmlFor="quote-requirements" className="text-[13px] font-bold text-foreground block">Requirements</label>
              <textarea
                id="quote-requirements"
                name="requirements"
                placeholder="Tell us briefly what you need to protect"
                value={form.requirements}
                onChange={e => setForm({...form, requirements: e.target.value})}
                rows={4}
                className="mt-2 w-full px-4 py-3 rounded-lg border-0 bg-[#F9F9F9] text-[13px] text-secondary placeholder:text-[#94A3B8] shadow-none focus:outline-none focus:ring-1 focus:ring-secondary resize-none transition-colors min-h-[120px]"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-white rounded-lg font-semibold text-[14px] hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
              style={{ backgroundColor: "#021373" }}
            >
              {isSubmitting ? "Submitting…" : "Get a Quote"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
