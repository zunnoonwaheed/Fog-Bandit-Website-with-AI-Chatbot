import { useState } from "react";
import riskAsset from "@/assets/risk-protection-overlay.png.asset.json";
import retailIcon from "@/assets/icon-retail.png.asset.json";
import warehouseIcon from "@/assets/icon-warehouse.png.asset.json";
import smeIcon from "@/assets/icon-sme.png.asset.json";
import residentialIcon from "@/assets/icon-residential.png.asset.json";
import financialIcon from "@/assets/icon-financial.png.asset.json";
import cannabisIcon from "@/assets/icon-cannabis.png.asset.json";

const riskImg = riskAsset.url;

type Row = { icon: string; title: string; desc: string };

const rows: Row[] = [
  { icon: retailIcon.url, title: "Retail & Jewellery", desc: "Eliminate smash-and-grab theft by removing visibility instantly — making it impossible for intruders to locate or access valuables." },
  { icon: warehouseIcon.url, title: "Warehousing & Logistics", desc: "Stop high-volume product theft before stock leaves the floor." },
  { icon: smeIcon.url, title: "SME & Office Spaces", desc: "Protect equipment, IP, and staff areas from after-hours intrusion." },
  { icon: residentialIcon.url, title: "Residential Protection", desc: "Give your home an active response that stops intruders on contact." },
  { icon: financialIcon.url, title: "Financial Institutions", desc: "Add a physical deterrent layer to existing alarm and CCTV systems." },
  { icon: cannabisIcon.url, title: "Cannabis & Restricted Goods", desc: "Secure regulated product storage with instant visibility denial." },
];

const ProtectionSection = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="pt-[100px] lg:pt-[120px] pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">
            Protection Designed Around <span className="text-[#021373]">Your Risk</span>
          </h2>
          <p className="section-subtext mt-4">
            Every industry faces different threats. Fog Bandit adapts to each environment — delivering immediate response and eliminating opportunity for theft.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          <div className="order-2 lg:order-1 flex flex-col gap-3 lg:h-[655px]">
            {rows.map((r, i) => {
              const open = active === i;
              return (
                <button
                  key={r.title}
                  onClick={() => setActive(i)}
                  className={`w-full rounded-xl border bg-background px-5 py-4 text-left transition-all lg:flex-1 ${open ? "border-[#021373] shadow-sm" : "border-border hover:border-foreground/20"}`}
                  aria-expanded={open}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-heading text-[15px] font-bold text-secondary">{r.title}</span>
                    <img src={r.icon} alt="" className="h-5 w-5 shrink-0 object-contain" />
                  </div>
                  {open && <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{r.desc}</p>}
                </button>
              );
            })}
          </div>
          <div className="order-1 lg:order-2 relative overflow-hidden rounded-2xl min-h-[420px] lg:min-h-[655px] bg-[#0a0a0a]">
            <img src={riskImg} alt="Jewellery store filling with security fog" loading="lazy" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectionSection;
