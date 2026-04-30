import { ArrowDown, Star } from "lucide-react";
import logoAmpol from "@/assets/logos/ampol.svg";
import logoBrand02 from "@/assets/logos/brand02.svg";
import logoBrand04 from "@/assets/logos/brand04.svg";
import logoCamzilla from "@/assets/logos/camzilla.svg";
import logoIga from "@/assets/logos/iga.svg";
import logoWestcoast from "@/assets/logos/westcoast.svg";

const clientLogos = [
  { src: logoBrand02, alt: "Coles" },
  { src: logoBrand04, alt: "FreeChoice" },
  { src: logoIga, alt: "IGA Liquor" },
  { src: logoWestcoast, alt: "West Coast Motorcycles" },
  { src: logoAmpol, alt: "Ampol" },
  { src: logoCamzilla, alt: "Camzilla" },
];

const circumference = 2 * Math.PI * 41;

const SocialProofSection = () => {
  return (
    <section className="pt-14 lg:pt-[120px] pb-14 lg:pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl lg:max-w-[1100px] mx-auto">
          <h2 className="section-heading">When seconds matter, businesses choose certainty</h2>
          <p className="section-subtext mt-4 lg:mx-auto lg:max-w-none lg:[text-wrap:balance]">
            <span className="lg:block">Across Australia and New Zealand, retailers, warehouses, and high-risk facilities</span>
            <span className="lg:block">rely on Fog Bandit to stop theft in real time – not just record it after the damage is done.</span>
          </p>
          <a href="#case-studies" className="btn-primary mt-6 inline-flex">
            See Customer Results <ArrowDown className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Logo marquee - full-width, edge-to-edge */}
      <div className="mt-14 overflow-hidden relative w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="flex animate-marquee gap-14 items-center w-max">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            <img key={`${logo.alt}-${i}`} src={logo.src} alt={logo.alt} className="h-10 w-auto shrink-0" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Ratings card */}
        <div className="mt-12 bg-background border border-border rounded-2xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0 divide-y lg:divide-y-0 divide-border">
            {/* Stars & rating */}
            <div className="w-full lg:w-auto lg:border-r lg:border-border lg:pr-12 pb-8 lg:pb-0">
              <div className="flex items-center gap-1">
                {[1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                <Star className="w-4 h-4 fill-primary/30 text-primary/30" />
              </div>
              <p className="font-heading font-bold text-[13px] mt-2 text-secondary">4.8 out of 5 stars</p>
              <a href="#" className="text-primary text-[13px] font-semibold hover:underline block mt-1">Rated by those who depend on it ›</a>
              <p className="text-muted-foreground text-[12px] mt-3">
                Security solutions starting from <strong className="text-secondary">AUD 1,550</strong><br />
                (installation not included).
              </p>
            </div>

            {/* Score circles - row on desktop, column on mobile */}
            <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-14 pt-8 lg:pt-0">
              {[
                { score: "9.6", label: "Ease of deployment", percent: 96 },
                { score: "9.6", label: "Support & reliability", percent: 96 },
                { score: "9.6", label: "Return on protection", percent: 96 },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-[80px] h-[80px] mx-auto relative">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="44" fill="none" stroke="hsl(var(--primary) / 0.2)" strokeWidth="3" />
                      <circle cx="50" cy="50" r="44" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray={2 * Math.PI * 44} strokeDashoffset={2 * Math.PI * 44 * (1 - item.percent / 100)} strokeLinecap="round" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[17px] font-heading font-bold text-secondary">{item.score}</span>
                  </div>
                  <p className="text-[13px] text-muted-foreground mt-3">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
