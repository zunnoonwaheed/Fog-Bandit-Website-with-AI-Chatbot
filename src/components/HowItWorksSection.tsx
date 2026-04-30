import { useState } from "react";
import sceneResidential from "@/assets/scene-residential-hq.jpg";
import sceneRetail from "@/assets/scene-retail-hq.jpg";
import sceneJewellery from "@/assets/scene-jewellery-hq.jpg";
import sceneWarehouse from "@/assets/scene-warehouse-hq.jpg";
import sceneOffice from "@/assets/scene-office-hq.jpg";
import sceneLogistics from "@/assets/scene-logistics-hq.jpg";
import iconTrigger from "@/assets/icon-howitworks-trigger.svg";
import iconDeploy from "@/assets/icon-howitworks-deploy.svg";
import iconEyeOff from "@/assets/icon-howitworks-eyeoff.svg";
import iconBell from "@/assets/icon-howitworks-bell.svg";

const tabs = ["Residential", "Retail", "Jewellery", "Warehouse", "Office", "Logistics"];

const tabImages: Record<string, string> = {
  Residential: sceneResidential,
  Retail: sceneRetail,
  Jewellery: sceneJewellery,
  Warehouse: sceneWarehouse,
  Office: sceneOffice,
  Logistics: sceneLogistics,
};

const features = [
  { icon: iconTrigger, title: "Immediate trigger", desc: "Activates the moment your alarm detects intrusion — no delay, no gap." },
  { icon: iconDeploy, title: "Instant fog deployment", desc: "Fills the space within seconds, removing visibility and control." },
  { icon: iconEyeOff, title: "Disorientation effect", desc: "Intruders lose direction, awareness, and ability to act." },
  { icon: iconBell, title: "Theft prevention", desc: "Stops incidents before assets are touched — not after loss is recorded." },
];

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState("Residential");

  return (
    <section id="how-it-works" className="pb-14 lg:pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">Stop Crime At The Point Of Entry</h2>
          <p className="section-subtext mt-4">
            Traditional systems alert you after intrusion. Fog Bandit intervenes immediately, shutting down
            movement, visibility, and intent before damage occurs.
          </p>
        </div>

        {/* Tabs - horizontal scroll on mobile (aligned with image left edge), centered on desktop */}
        <div className="mt-10 -mr-4 sm:mr-0 overflow-x-auto scrollbar-hide">
          <div className="flex lg:flex-wrap lg:justify-center gap-2 pl-3 pr-4 sm:px-0 w-max lg:w-auto lg:mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-sm font-semibold transition-all rounded-md whitespace-nowrap shrink-0 ${
                  activeTab === tab
                    ? "bg-[hsl(var(--brand-blue))] text-secondary-foreground"
                    : "bg-background text-secondary border border-border hover:bg-muted"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Image - mobile 366x511 portrait, desktop 1240x541 landscape */}
        <div className="mt-6 lg:mt-8 rounded-2xl overflow-hidden mx-3 sm:mx-0">
          <img
            src={tabImages[activeTab]}
            alt={`${activeTab} security scene`}
            className="w-full object-cover aspect-[366/511] lg:aspect-[1240/541]"
            loading="lazy"
          />
        </div>

        <div className="mt-6 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-3 sm:mx-0">
          {features.map((f) => (
            <div key={f.title} className="bg-background border border-border rounded-xl p-5">
              <img src={f.icon} alt="" className="w-10 h-10" />
              <h3 className="font-heading font-bold text-secondary mt-4 text-[15px]">{f.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
