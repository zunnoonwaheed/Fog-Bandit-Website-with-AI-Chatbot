import { ShieldCheck, MapPin } from "lucide-react";
import enterpriseImg from "@/assets/env-enterprise.jpg";
import energyImg from "@/assets/env-energy.jpg";
import residentialImg from "@/assets/env-residential.jpg";

type Card = { img: string; title: string; desc: string; badge: "shield" | "pin" };

const Pin = ({ kind }: { kind: Card["badge"] }) => (
  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
    {kind === "shield" ? <ShieldCheck className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
  </span>
);

const CardBlock = ({ card, className = "" }: { card: Card; className?: string }) => (
  <div className={`relative overflow-hidden rounded-2xl ${className}`}>
    <img src={card.img} alt={card.title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
    <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-6">
      <Pin kind={card.badge} />
      <h3 className="mt-3 font-heading text-[17px] md:text-[19px] font-bold text-white">{card.title}</h3>
      <p className="mt-1.5 max-w-md text-[12.5px] md:text-[13.5px] leading-relaxed text-white/85">{card.desc}</p>
    </div>
  </div>
);

const enterprise: Card = { img: enterpriseImg, title: "Enterprise Security", desc: "Secure large-scale operations with a system that reacts instantly, preventing loss, downtime, and operational disruption.", badge: "shield" };
const energy: Card = { img: energyImg, title: "Energy & Infrastructure", desc: "Protect critical infrastructure and restricted sites with security that eliminates access the moment a threat is detected.", badge: "shield" };
const residential: Card = { img: residentialImg, title: "Residential Protection", desc: "Give your home more than an alarm — give it the ability to actively stop intruders and protect what matters most.", badge: "pin" };

const EnvironmentsSection = () => (
  <section className="pt-[100px] lg:pt-[120px] pb-0">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="section-heading">
          Built For <span className="text-[#021373]">Environments</span> Where Failure Isn&apos;t An Option
        </h2>
        <p className="section-subtext mt-4">
          Fog Bandit is designed for one outcome — stopping intruders before they reach your assets, no matter the environment.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:grid-rows-2 md:h-[692px]">
        <CardBlock card={enterprise} className="md:row-span-2 h-[420px] md:h-auto" />
        <CardBlock card={energy} className="h-[260px] md:h-auto" />
        <CardBlock card={residential} className="h-[260px] md:h-auto" />
      </div>
    </div>
  </section>
);

export default EnvironmentsSection;
