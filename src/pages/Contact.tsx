import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contactMap from "@/assets/contact-map-anz-region.png";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar activeLink="Contact" mobileMode="cta" />

      <main>
        <section className="pt-28 pb-12 md:pt-[140px] lg:pt-[210px] md:pb-16">
            <div className="container mx-auto px-4">
              <header className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <h1 className="font-inter text-[24px] md:text-[32px] font-bold text-[#111827] leading-tight mb-3 md:mb-4">
                  Speak to a security expert
                </h1>
                <p className="font-dm-sans text-[14px] md:text-[16px] text-[#6B7280] leading-[1.6] mx-auto max-w-2xl">
                  Every environment is different — and so is every risk. Our team will help you design a Fog Bandit solution tailored to your space, your assets, and your level of protection.
                </p>
              </header>

              <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start mb-12 md:mb-14">
                {/* Left column */}
                <div className="order-2 md:order-1">
                  <h2 className="font-inter text-[18px] md:text-[20px] font-bold text-[#111827] mb-6 leading-tight">
                    Tell us about your space
                  </h2>

                  <p className="text-[13px] md:text-[14px] text-[#6B7280] mb-6">Prefer to speak directly?</p>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="h-11 w-11 shrink-0 rounded-full bg-[#021373] flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[12px] text-[#6B7280] mb-1">Dial</p>
                        <p className="text-[15px] md:text-[16px] font-semibold text-[#111827]">1300 385 358</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-11 w-11 shrink-0 rounded-full bg-[#021373] flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[12px] text-[#6B7280] mb-1">Head Office – Australia</p>
                        <p className="text-[14px] md:text-[15px] font-semibold text-[#111827]">3/8 Royal Street, Kenwick WA 6107</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-11 w-11 shrink-0 rounded-full bg-[#021373] flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[12px] text-[#6B7280] mb-1">Email Support</p>
                        <p className="text-[14px] md:text-[15px] font-semibold text-[#111827]">security@banditanz.com.au</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="contact-form" className="order-1 md:order-2">
                  <form className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[13px] font-semibold text-[#111827] mb-2 block">
                          Full Name<span className="text-[#DC2626]">*</span>
                        </label>
                        <Input placeholder="Enter your first name" className="h-12 rounded-[10px] border border-[#E5E7EB] bg-white text-[14px] shadow-none placeholder:text-[#9CA3AF] focus-visible:ring-1 focus-visible:ring-[#021373]" />
                      </div>
                      <div>
                        <label className="text-[13px] font-semibold text-[#111827] mb-2 block">
                          Email<span className="text-[#DC2626]">*</span>
                        </label>
                        <Input type="email" placeholder="Enter your email" className="h-12 rounded-[10px] border border-[#E5E7EB] bg-white text-[14px] shadow-none placeholder:text-[#9CA3AF] focus-visible:ring-1 focus-visible:ring-[#021373]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[13px] font-semibold text-[#111827] mb-2 block">
                          Phone No.<span className="text-[#DC2626]">*</span>
                        </label>
                        <Input placeholder="Enter your Phone Number" className="h-12 rounded-[10px] border border-[#E5E7EB] bg-white text-[14px] shadow-none placeholder:text-[#9CA3AF] focus-visible:ring-1 focus-visible:ring-[#021373]" />
                      </div>
                      <div>
                        <label className="text-[13px] font-semibold text-[#111827] mb-2 block">
                          Location
                        </label>
                        <Input placeholder="Enter your company name" className="h-12 rounded-[10px] border border-[#E5E7EB] bg-white text-[14px] shadow-none placeholder:text-[#9CA3AF] focus-visible:ring-1 focus-visible:ring-[#021373]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[13px] font-semibold text-[#111827] mb-2 block">
                          Country Name
                        </label>
                        <Input placeholder="Enter your Phone Number" className="h-12 rounded-[10px] border border-[#E5E7EB] bg-white text-[14px] shadow-none placeholder:text-[#9CA3AF] focus-visible:ring-1 focus-visible:ring-[#021373]" />
                      </div>
                      <div>
                        <label className="text-[13px] font-semibold text-[#111827] mb-2 block">
                          Area to Secure
                        </label>
                        <Input placeholder="Enter your company name" className="h-12 rounded-[10px] border border-[#E5E7EB] bg-white text-[14px] shadow-none placeholder:text-[#9CA3AF] focus-visible:ring-1 focus-visible:ring-[#021373]" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[13px] font-semibold text-[#111827] mb-2 block">Requirements</label>
                      <Textarea placeholder="Anything you want us to know about your requirements" className="min-h-[120px] rounded-[10px] border border-[#E5E7EB] bg-white text-[14px] shadow-none placeholder:text-[#9CA3AF] focus-visible:ring-1 focus-visible:ring-[#021373]" />
                    </div>

                    <Button className="w-full h-12 rounded-[10px] bg-[#DC2626] text-white hover:bg-[#B91C1C] text-[14px] font-semibold shadow-none">
                      Get my tailored solution
                    </Button>
                  </form>
                </div>
              </div>

              {/* Local Expertise section */}
              <section className="mt-16 md:mt-20">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="font-inter text-[24px] md:text-[32px] font-bold text-[#111827] mb-3 leading-tight">
                    Local expertise across ANZ
                  </h2>
                  <p className="font-dm-sans text-[14px] md:text-[16px] text-[#6B7280] leading-[1.6] max-w-2xl mx-auto">
                    With teams across Australia and New Zealand, we provide fast response, local knowledge, and on-ground support wherever you operate.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Office locations */}
                    <div className="space-y-4">
                      <h3 className="text-[15px] font-bold text-[#111827] mb-3">Fog Bandit ANZ – Sydney</h3>
                      <div className="space-y-2 text-[13px] text-[#4B5563]">
                        <p className="flex items-start gap-2">
                          <MapPin className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          Epping, NSW 2121
                        </p>
                        <p className="flex items-start gap-2">
                          <Phone className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          0451 205 157
                        </p>
                        <p className="flex items-start gap-2">
                          <Mail className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          sales.nsw@banditanz.com.au
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-[15px] font-bold text-[#111827] mb-3">Fog Bandit ANZ – Darwin</h3>
                      <div className="space-y-2 text-[13px] text-[#4B5563]">
                        <p className="flex items-start gap-2">
                          <MapPin className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          Parap, Northern Territory 0820
                        </p>
                        <p className="flex items-start gap-2">
                          <Phone className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          1300 385 358
                        </p>
                        <p className="flex items-start gap-2">
                          <Mail className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          sales.NT@banditanz.com.au
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-[15px] font-bold text-[#111827] mb-3">Fog Bandit ANZ – Melbourne</h3>
                      <div className="space-y-2 text-[13px] text-[#4B5563]">
                        <p className="flex items-start gap-2">
                          <MapPin className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          Berwick VIC 3806
                        </p>
                        <p className="flex items-start gap-2">
                          <Phone className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          1300 385 358
                        </p>
                        <p className="flex items-start gap-2">
                          <Mail className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          sales.vic@banditanz.com.au
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-[15px] font-bold text-[#111827] mb-3">Fog Bandit – South Pacific Region</h3>
                      <div className="space-y-2 text-[13px] text-[#4B5563]">
                        <p className="flex items-start gap-2">
                          <MapPin className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          228 Rue Georges Leques, Normandie, Noumea 98800 - New Caledonia
                        </p>
                        <p className="flex items-start gap-2">
                          <Phone className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          +687 776 896
                        </p>
                        <p className="flex items-start gap-2">
                          <Mail className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          secretariat@incendienc.nc
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-[15px] font-bold text-[#111827] mb-3">Fog Bandit ANZ – Adelaide</h3>
                      <div className="space-y-2 text-[13px] text-[#4B5563]">
                        <p className="flex items-start gap-2">
                          <MapPin className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          Woodville Park SA 5011
                        </p>
                        <p className="flex items-start gap-2">
                          <Phone className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          1300 385 358
                        </p>
                        <p className="flex items-start gap-2">
                          <Mail className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          sales.sa@banditanz.com.au
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-[15px] font-bold text-[#111827] mb-3">Fog Bandit ANZ – Brisbane</h3>
                      <div className="space-y-2 text-[13px] text-[#4B5563]">
                        <p className="flex items-start gap-2">
                          <MapPin className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          Underwood QLD 4119
                        </p>
                        <p className="flex items-start gap-2">
                          <Phone className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          1300 385 358
                        </p>
                        <p className="flex items-start gap-2">
                          <Mail className="h-3.5 w-3.5 mt-0.5 text-[#6B7280]" />
                          sales.qld@banditanz.com.au
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)] md:p-5">
                    <img
                      src={contactMap}
                      alt="Map showing Fog Bandit ANZ offices across Australia, New Zealand, and New Caledonia"
                      className="h-auto w-full rounded-xl object-contain"
                    />
                  </div>
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
