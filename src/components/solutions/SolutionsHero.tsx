import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SolutionsHero = () => {
  return (
    <section className="pt-28 pb-10 md:pt-[140px] lg:pt-[210px] md:pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto mb-10 md:mb-12">
          <h1 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground leading-tight mb-3 md:mb-4">
            <span className="md:hidden">Smart Protection For The People Who Matter Most</span>
            <span className="hidden md:inline">Smart protection for the people who matter most</span>
          </h1>
          <p className="font-dm-sans text-[14px] md:text-[18px] font-medium text-muted-foreground leading-relaxed mb-5 md:mb-7 max-w-3xl mx-auto">
            <span className="md:hidden">Fog Bandit provides alerts and security fog to deter intruders.</span>
            <span className="hidden md:inline">Fog Bandit gives your home more than alerts. The moment an intrusion is detected, dense security fog fills the space instantly, stopping intruders before they reach your family or valuables.</span>
          </p>
          <div className="hidden md:flex justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 h-11 text-[14px] font-semibold gap-2">
              Request a home security assessment <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[1200px] mx-auto">
          <div className="bg-background border border-border rounded-2xl p-5 md:p-7 flex flex-col">
            <p className="font-dm-sans text-[12px] md:text-[13px] text-muted-foreground mb-2">Traditional home security</p>
            <h3 className="font-inter text-[16px] md:text-[20px] font-bold text-foreground mb-2 md:mb-3 leading-snug">Alerts you after entry</h3>
            <p className="font-dm-sans text-[13px] md:text-[14px] text-muted-foreground leading-relaxed mb-5 md:mb-8">
              Most home systems record what happens, but can't stop intruders once they're inside.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-auto pt-4 md:pt-6 border-t border-border">
              <div>
                <p className="font-inter text-[18px] md:text-[20px] font-bold text-foreground leading-none">24/7</p>
                <p className="font-dm-sans text-[12px] md:text-[13px] text-muted-foreground mt-1">Monitoring</p>
              </div>
              <div>
                <p className="font-inter text-[18px] md:text-[20px] font-bold text-foreground leading-none">Cloud</p>
                <p className="font-dm-sans text-[12px] md:text-[13px] text-muted-foreground mt-1">Recording</p>
              </div>
            </div>
          </div>

          <div className="bg-[hsl(220,60%,20%)] text-white rounded-2xl p-5 md:p-7 flex flex-col">
            <p className="font-dm-sans text-[12px] md:text-[13px] text-white/70 mb-2">Fog Bandit protection</p>
            <h3 className="font-inter text-[16px] md:text-[20px] font-bold text-white mb-2 md:mb-3 leading-snug">Stops intruders instantly</h3>
            <p className="font-dm-sans text-[13px] md:text-[14px] text-white/80 leading-relaxed mb-5 md:mb-8">
              <span className="md:hidden">Fog Bandit creates a security fog, blocking visibility and forcing intruders to flee.</span>
              <span className="hidden md:inline">Fog Bandit fills your home with safe, dense security fog within seconds, removing visibility &amp; forcing intruders to leave immediately.</span>
            </p>
            <div className="grid grid-cols-2 gap-4 mt-auto pt-4 md:pt-6 border-t border-white/15">
              <div>
                <p className="font-inter text-[18px] md:text-[20px] font-bold text-white leading-none">0.3s</p>
                <p className="font-dm-sans text-[12px] md:text-[13px] text-white/70 mt-1">Response Time</p>
              </div>
              <div>
                <p className="font-inter text-[18px] md:text-[20px] font-bold text-white leading-none">Active</p>
                <p className="font-dm-sans text-[12px] md:text-[13px] text-white/70 mt-1">Neutralization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden mt-6 flex justify-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 h-10 text-[13px] font-semibold gap-2">
            Request a home security assessment <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
