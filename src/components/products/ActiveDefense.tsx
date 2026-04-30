import productLineup from "@/assets/product-lineup.png";
import iconStopwatchRed from "@/assets/icon-stopwatch-red.svg";
import iconShieldRed from "@/assets/icon-shield-red.svg";

const ActiveDefense = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2">
            The Active Defense Advantage
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[18px] font-medium text-muted-foreground leading-relaxed max-w-xl mx-auto">
            <span className="md:hidden">Alarms warn of theft. Fog Bandit stops it.</span>
            <span className="hidden md:inline">Conventional alarms tell you that you're being robbed. Fog Bandit prevents the theft from actually happening.</span>
          </p>
        </div>

        {/* Large image */}
        <div className="relative rounded-2xl overflow-hidden mb-6 md:mb-8">
          <img
            src={productLineup}
            alt="Fog Bandit product lineup"
            className="w-full h-[292px] md:h-[520px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Feature cards + stat */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
          {/* Zero Visibility - spans 2 cols on desktop */}
          <div className="bg-background border border-border rounded-2xl p-5 md:p-6 flex flex-col items-start md:col-span-2 md:h-[273px]">
            <img src={iconStopwatchRed} alt="" className="h-7 md:h-8 w-auto mb-4" />
            <h3 className="font-inter text-[16px] md:text-[18px] font-bold text-foreground mb-2">
              Zero Visibility in Under 10 Seconds
            </h3>
            <p className="font-dm-sans text-[13px] md:text-[14px] text-muted-foreground leading-relaxed mb-4">
              <span className="md:hidden">Intruders can't steal what they can't see. Our fog technology disorients criminals before they react.</span>
              <span className="hidden md:inline">Intruders cannot steal what they cannot see. Our high-pressure technology deploys fog at a speed that creates total disorientation before criminals can react.</span>
            </p>
            <div className="flex gap-2 flex-wrap mt-auto">
              <span className="bg-muted rounded-lg px-3 py-2 text-[12px] font-medium text-foreground">
                Patented Nozzle
              </span>
              <span className="bg-muted rounded-lg px-3 py-2 text-[12px] font-medium text-foreground">
                Fast-Reaction Sensors
              </span>
            </div>
          </div>

          {/* Safe & Clean */}
          <div className="bg-background border border-border rounded-2xl p-5 md:p-6 flex flex-col items-start md:h-[273px]">
            <img src={iconShieldRed} alt="" className="h-7 md:h-8 w-auto mb-4" />
            <h3 className="font-inter text-[16px] md:text-[18px] font-bold text-foreground mb-2">
              Safe & Clean
            </h3>
            <p className="font-dm-sans text-[13px] md:text-[14px] text-muted-foreground leading-relaxed">
              <span className="md:hidden">The fog is a food-grade glycol mixture, harmless to humans, animals, and fabrics.</span>
              <span className="hidden md:inline">The fog is composed of a food- grade glycol mixture. It is completely harmless to humans, animals, electronics, and delicate fabrics.</span>
            </p>
          </div>

          {/* 99% Stat - desktop only */}
          <div className="hidden md:flex bg-background border border-border rounded-2xl p-5 md:p-6 flex-col items-center justify-center text-center md:h-[273px]">
            <span className="font-inter text-[56px] md:text-[72px] font-bold text-[#021373] leading-none mb-2">99%</span>
            <span className="font-dm-sans text-[14px] md:text-[16px] font-semibold text-[#021373]">Theft Prevention Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveDefense;
