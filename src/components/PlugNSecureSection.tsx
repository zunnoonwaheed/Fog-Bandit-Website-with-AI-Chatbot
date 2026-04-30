import { ArrowRight } from "lucide-react";
import iconTick from "@/assets/icon-tick.svg";
import iconBolt from "@/assets/icon-plug-bolt.png";
import iconEdge from "@/assets/icon-plug-edge.png";
import iconHome from "@/assets/icon-plug-home.png";

const features = [
  { icon: iconBolt, title: "Instant Activation", desc: "Plug the device into a standard outlet. In 60 seconds, AI sensors map and monitor your perimeter." },
  { icon: iconEdge, title: "Standalone Edge", desc: "No extra installation. No integration with legacy alarm systems. Our devices operate on an encrypted mesh network." },
  { icon: iconHome, title: "Residential Focus", desc: "Designed for home environment. Discreet aesthetics combined with heavy-duty commercial sensors." },
];

const PlugNSecureSection = () => {
  return (
    <section className="pb-14 lg:pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">Plug N Secure™</h2>
          <p className="section-subtext mt-4">
            The world's first professional standalone residential security system. Zero
            integration required. 100% peace of mind.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-background border border-border rounded-xl p-6">
              <img src={f.icon} alt="" className="w-10 h-10" />
              <h3 className="font-heading font-bold text-secondary mt-4 text-lg">{f.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Residential Transit */}
        <div className="mt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h3 className="font-heading font-bold text-secondary text-xl">Residential Transit</h3>
            <p className="text-muted-foreground text-sm mt-2 max-w-md">
              Securing your vacation home or temporary rental house has never been
              this effortless. Simply plug, sync, and relax.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-secondary">
                <img src={iconTick} alt="" className="w-5 h-5" /> No long-term contracts
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <img src={iconTick} alt="" className="w-5 h-5" /> 24/7 Remote Monitoring
              </div>
            </div>
          </div>
          <a href="#" className="btn-primary">
            Start Rental Plan <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlugNSecureSection;
