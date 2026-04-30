import { useState } from "react";
import { Landmark } from "lucide-react";
import fogJewelry from "@/assets/fog-jewelry.png";
import iconActiveProtection from "@/assets/icon-active-protection.png";
import iconRetail from "@/assets/icon-industry-retail.svg";
import iconWarehouse from "@/assets/icon-industry-warehouse.svg";
import iconOffice from "@/assets/icon-industry-office.svg";
import iconResidential from "@/assets/icon-industry-residential.svg";
import iconCannabis from "@/assets/icon-industry-cannabis.svg";

const industries = [
  { id: "retail", label: "Retail & Jewellery", icon: iconRetail, desc: "Eliminate smash-and-grab theft by removing visibility instantly — making it impossible for intruders to locate or access valuables." },
  { id: "warehouse", label: "Warehousing & Logistics", icon: iconWarehouse, desc: "Protect high-value stock and distribution centres from targeted raids with instant fog deployment." },
  { id: "office", label: "SME & Office Spaces", icon: iconOffice, desc: "Safeguard equipment, data, and assets with a system that responds faster than any security guard." },
  { id: "residential", label: "Residential Protection", icon: iconResidential, desc: "Give your home active defence capabilities that stop break-ins the moment they start." },
  { id: "financial", label: "Financial Institutions", icon: null, desc: "Bank-grade protection with instant response, preventing access to vaults and secure areas." },
  { id: "cannabis", label: "Cannabis & Restricted Goods", icon: iconCannabis, desc: "High-security protection for regulated goods with instant response fog systems." },
];

const ProtectionSection = () => {
  const [active, setActive] = useState("retail");

  return (
    <section id="solutions" className="pb-14 lg:pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">
            Protection Designed Around <span className="text-[#021373]">Your Risk</span>
          </h2>
          <p className="section-subtext mt-4">
            Every industry faces different threats. Fog Bandit adapts to each environment — delivering
            immediate response and eliminating opportunity for theft.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left - Accordion cards */}
          <div className="space-y-3">
            {industries.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`w-full text-left px-6 py-5 rounded-xl transition-all ${
                    isActive
                      ? "bg-background border border-border shadow-sm"
                      : "bg-muted border border-transparent hover:bg-muted/80"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-heading font-bold text-secondary text-[15px]">{item.label}</span>
                    <div className="w-9 h-9 flex items-center justify-center shrink-0">
                      {item.icon ? (
                        <img src={item.icon} alt="" className="w-5 h-5" />
                      ) : (
                        <Landmark className="w-5 h-5 text-secondary" />
                      )}
                    </div>
                  </div>
                  {isActive && (
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed pr-10">{item.desc}</p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right - Image with overlay */}
          <div className="relative rounded-2xl overflow-hidden min-h-[560px]">
            <img src={fogJewelry} alt="Fog Bandit in action" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "30% center" }} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 bg-white/30 backdrop-blur-md rounded-xl p-5 border border-white/20">
              <div className="flex items-start gap-3">
                <img src={iconActiveProtection} alt="" className="w-11 h-11 shrink-0" />
                <div>
                  <span className="text-primary-foreground/80 text-[12px] font-medium block">Active Protection</span>
                  <h4 className="text-primary-foreground font-heading font-bold text-base mt-0.5">Total visual disruption in seconds</h4>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-[13px] mt-3 leading-relaxed">
                Fog Bandit fills a room with dense fog almost instantly, reducing
                visibility to near zero and forcing intruders to retreat without
                knowing where anything is.
              </p>
              <div className="flex gap-10 mt-4">
                <div>
                  <span className="text-primary-foreground font-heading font-bold text-xl">0.1s</span>
                  <p className="text-primary-foreground/60 text-[11px] mt-0.5">Reaction Time</p>
                </div>
                <div>
                  <span className="text-primary-foreground font-heading font-bold text-xl">28,000</span>
                  <p className="text-primary-foreground/60 text-[11px] mt-0.5">ft³/min Deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectionSection;
