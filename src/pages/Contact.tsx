import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactMap from "@/assets/contact-map-new.svg";

const australiaRegions = [
  "NSW: Sydney, Newcastle, Wollongong",
  "VIC: Melbourne, Geelong",
  "QLD: Brisbane, Gold Coast, Cairns",
  "WA: Perth, Fremantle",
  "SA/TAS: Adelaide, Hobart",
];

const nzRegions = [
  "Auckland (North Island)",
  "Wellington (North Island)",
  "Christchurch (South Island)",
  "Hamilton & Tauranga",
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] relative">
      <Navbar activeLink="Contact" mobileMode="cta" />

        <main>
          <section className="pt-28 pb-12 md:pt-[140px] lg:pt-[210px] md:pb-16">
            <div className="container mx-auto px-4">
              <header className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <h1 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground leading-tight mb-3 md:mb-4">
                  Speak to a security expert
                </h1>
                {/* Mobile-only short copy */}
                <p className="md:hidden font-dm-sans text-[14px] font-medium text-muted-foreground leading-relaxed mx-auto max-w-[300px]">
                  Every environment is unique. We will design a Fog Bandit solution for you.
                </p>
                {/* Desktop copy */}
                <p className="hidden md:block font-dm-sans text-[18px] font-medium text-muted-foreground leading-relaxed mx-auto">
                  Every environment is different — and so is every risk. Our team will help you design a Fog Bandit solution tailored to your space, your assets, and your level of protection.
                </p>
              </header>

              <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-12 items-start mb-12 md:mb-14">
                {/* Left column on desktop; appears AFTER the form on mobile */}
                <div className="order-2 md:order-1">
                  <h2 className="hidden md:block font-inter text-[18px] md:text-[22px] font-semibold text-foreground mb-6 leading-tight">
                    Tell Us About Your Space
                  </h2>

                  {/* Mobile-only: map + divider before phone/email */}
                  <div className="md:hidden mb-8">
                    <div className="rounded-2xl overflow-hidden">
                      <img
                        src={contactMap}
                        alt="Map showing local expertise across Australia and New Zealand"
                        className="w-full h-[260px] object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="border-t border-border mt-8" />
                  </div>

                  <div className="mb-8 md:mb-8 mt-6 md:mt-0">
                    <p className="text-[13px] text-muted-foreground mb-4">Prefer to speak directly?</p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[hsl(220,60%,25%)] flex items-center justify-center shrink-0">
                          <Phone className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-[12px] text-muted-foreground">Toll Free</p>
                          <p className="text-[14px] md:text-[15px] font-semibold text-foreground">#1300 385 358</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[hsl(220,60%,25%)] flex items-center justify-center shrink-0">
                          <Mail className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-[12px] text-muted-foreground">Email Support</p>
                          <p className="text-[14px] md:text-[15px] font-semibold text-foreground break-all">Security@banditanz.com.au</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop-only ANZ pills */}
                  <div className="hidden md:block">
                    <p className="text-[13px] text-muted-foreground mb-4">Local expertise across ANZ</p>
                    <ul className="space-y-2.5">
                      {[
                        "Sydney HQ",
                        "Melbourne Bureau",
                        "Brisbane Operations",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[14px] md:text-[15px] font-semibold text-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div id="contact-form" className="order-1 md:order-2">
                  <form className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label className="text-[13px] font-bold text-foreground mb-2 block">
                          First Name<span className="text-primary">*</span>
                        </label>
                        <Input placeholder="Enter your first name" className="h-12 rounded-lg border-0 bg-[#F9F9F9] text-[13px] shadow-none placeholder:text-[#94A3B8] focus-visible:ring-1" />
                      </div>
                      <div>
                        <label className="text-[13px] font-bold text-foreground mb-2 block">
                          Last Name<span className="text-primary">*</span>
                        </label>
                        <Input placeholder="Enter your last name" className="h-12 rounded-lg border-0 bg-[#F9F9F9] text-[13px] shadow-none placeholder:text-[#94A3B8] focus-visible:ring-1" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label className="text-[13px] font-bold text-foreground mb-2 block">
                          Company<span className="text-primary">*</span>
                        </label>
                        <Input placeholder="Enter your company name" className="h-12 rounded-lg border-0 bg-[#F9F9F9] text-[13px] shadow-none placeholder:text-[#94A3B8] focus-visible:ring-1" />
                      </div>
                      <div>
                        <label className="text-[13px] font-bold text-foreground mb-2 block">
                          Email<span className="text-primary">*</span>
                        </label>
                        <Input type="email" placeholder="Enter your email" className="h-12 rounded-lg border-0 bg-[#F9F9F9] text-[13px] shadow-none placeholder:text-[#94A3B8] focus-visible:ring-1" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[13px] font-bold text-foreground mb-2 block">Requirements</label>
                      <Textarea placeholder="Tell us about your space, risks, or what you're looking to protect" className="min-h-[120px] rounded-lg border-0 bg-[#F9F9F9] text-[13px] shadow-none placeholder:text-[#94A3B8] focus-visible:ring-1" />
                    </div>

                    <Button className="w-full h-12 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-[14px] font-semibold">
                      Get my tailored solution
                    </Button>
                  </form>
                </div>
              </div>

              {/* Desktop-only: Local Expertise section */}
              <section className="hidden md:grid md:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-10 items-start">
                <div>
                  <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-3 leading-tight">
                    Local Expertise Across ANZ
                  </h2>
                  <p className="font-dm-sans text-muted-foreground text-[14px] md:text-[18px] font-medium leading-relaxed max-w-2xl mb-6 md:mb-7">
                    With teams across Australia and New Zealand, we provide fast response, local knowledge, and on-ground support wherever you operate.
                  </p>

                  <div className="grid grid-cols-2 gap-6 md:gap-10">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-4 w-4 text-foreground" />
                        <h3 className="text-[15px] md:text-[17px] font-semibold text-foreground">Australia</h3>
                      </div>
                      <ul className="space-y-2 text-[12px] md:text-[14px] text-foreground leading-relaxed">
                        {australiaRegions.map((region) => (
                          <li key={region}>{region}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-4 w-4 text-foreground" />
                        <h3 className="text-[15px] md:text-[17px] font-semibold text-foreground">New Zealand</h3>
                      </div>
                      <ul className="space-y-2 text-[12px] md:text-[14px] text-foreground leading-relaxed">
                        {nzRegions.map((region) => (
                          <li key={region}>{region}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden mt-2 md:mt-0">
                  <img
                    src={contactMap}
                    alt="Map showing local expertise across Australia and New Zealand"
                    className="w-full h-[280px] md:h-[380px] object-cover"
                    loading="lazy"
                  />
                </div>
              </section>
            </div>
          </section>
        </main>

        <Footer />

    </div>
  );
};

export default Contact;
