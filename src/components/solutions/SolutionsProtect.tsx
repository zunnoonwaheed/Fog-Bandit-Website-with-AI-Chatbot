import iconBolt from "@/assets/icon-bolt-red.svg";
import iconShield from "@/assets/icon-shield-red.svg";
import iconStopwatchRed from "@/assets/icon-stopwatch-red.svg";
import certAcclaim from "@/assets/cert-acclaim.svg";
import certNf from "@/assets/cert-nf.svg";
import fogPersonImg from "@/assets/tested-certified-lab.svg";

const SolutionsProtect = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-7 md:mb-10">
          <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2 md:mb-3 leading-snug">
            <span className="md:hidden">Built To Protect When Seconds Matter</span>
            <span className="hidden md:inline">Built to protect when seconds matter</span>
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[18px] font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            <span className="md:hidden">Home security must respond quickly. Fog Bandit activates without delay.</span>
            <span className="hidden md:inline">Your home security should respond instantly and reliably. Fog Bandit systems are designed to activate without delay, even when other systems fail.</span>
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Instant activation */}
          <div className="md:col-span-2 rounded-2xl p-5 md:p-7 bg-[hsl(220,60%,20%)] text-white relative overflow-hidden">
            <img src={iconBolt} alt="" className="h-6 w-6 mb-3 md:mb-4" />
            <h3 className="font-inter text-[16px] md:text-[20px] font-bold text-white mb-2">Instant activation</h3>
            <p className="font-dm-sans text-[13px] md:text-[14px] text-white/80 leading-relaxed mb-6 md:mb-10 max-w-md">
              <span className="md:hidden">Deployment starts right after detection, avoiding cloud delays.</span>
              <span className="hidden md:inline">Deployment begins immediately after detection, without relying on cloud delays or external response times.</span>
            </p>
            <p className="font-inter text-[36px] md:text-[56px] font-bold leading-none tracking-tight">99.9%</p>
            <p className="font-dm-sans text-[12px] md:text-[13px] text-white/70 mt-1.5">System Reliability</p>
          </div>

          {/* No blind spots */}
          <div className="rounded-2xl p-5 md:p-7 bg-background border border-border flex flex-col">
            <img src={iconShield} alt="" className="h-6 w-6 mb-3 md:mb-4" />
            <h3 className="font-inter text-[16px] md:text-[20px] font-bold text-foreground mb-2">No blind spots</h3>
            <p className="font-dm-sans text-[13px] md:text-[14px] text-muted-foreground leading-relaxed mb-5 md:mb-7">
              Security fog spreads rapidly across the space, creating an immediate visibility barrier throughout the room.
            </p>
            <div className="mt-auto">
              <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-2">
                <div className="h-full w-[98%] bg-primary rounded-full" />
              </div>
              <div className="flex items-center justify-between">
                <p className="font-dm-sans text-[12px] md:text-[13px] text-muted-foreground">Coverage Density</p>
                <p className="font-inter text-[12px] md:text-[13px] font-semibold text-foreground">98%</p>
              </div>
            </div>
          </div>

          {/* Protection you can depend on */}
          <div className="rounded-2xl p-5 md:p-7 bg-background border border-border">
            <h3 className="font-inter text-[16px] md:text-[20px] font-bold text-foreground mb-4 md:mb-6 leading-snug">
              Protection you can depend on
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <img src={iconStopwatchRed} alt="" className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-inter text-[13px] md:text-[14px] font-bold text-foreground leading-snug">2-3 Hours backup support</h4>
                  <p className="font-dm-sans text-[12px] md:text-[13px] text-muted-foreground leading-snug mt-0.5">
                    System continues working during power outages
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <img src={iconShield} alt="" className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-inter text-[13px] md:text-[14px] font-bold text-foreground leading-snug">Offline-ready deployment</h4>
                  <p className="font-dm-sans text-[12px] md:text-[13px] text-muted-foreground leading-snug mt-0.5">
                    Operates even if internet connectivity is lost
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tested & certified safe — desktop only */}
          <div className="hidden md:grid md:col-span-2 rounded-2xl bg-background border border-border overflow-hidden grid-cols-1 md:grid-cols-[1fr_240px]">
            <div className="p-5 md:p-7">
              <h3 className="font-inter text-[16px] md:text-[20px] font-bold text-foreground mb-2">Tested and certified safe</h3>
              <p className="font-dm-sans text-[13px] md:text-[14px] text-muted-foreground leading-relaxed mb-5 md:mb-6 max-w-sm">
                Fog Bandit systems meet safety standards and are designed for homes with families and pets.
              </p>
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-center gap-3">
                  <img src={certAcclaim} alt="Acclaim certification" className="h-10 w-auto" />
                  <p className="font-dm-sans text-[12px] md:text-[13px] text-muted-foreground">Security compliance certifications</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={certNf} alt="NF certification" className="h-10 w-auto" />
                  <p className="font-dm-sans text-[12px] md:text-[13px] text-muted-foreground">Independent safety testing approvals</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img src={fogPersonImg} alt="Fog Bandit operator" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsProtect;
