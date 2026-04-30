import fogImg from "@/assets/security-fog-room.png";
import iconStopwatch from "@/assets/icon-stopwatch-blue.svg";
import iconBroom from "@/assets/icon-broom-blue.svg";

const IndustriesThreeSecond = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="bg-background border border-border rounded-2xl p-4 md:p-6 max-w-[1200px] mx-auto">
          <div className="rounded-xl overflow-hidden mb-5 md:mb-7">
            <img
              src={fogImg}
              alt="Fog Bandit security fog filling a room within seconds"
              className="w-full md:w-[1176px] md:h-[464px] h-auto object-cover aspect-[1176/464]"
              loading="lazy"
            />
          </div>

          <h2 className="font-inter text-[18px] md:text-[22px] font-bold text-foreground mb-2 md:mb-3 leading-snug">
            The 3-second rule: stop the threat before it starts
          </h2>
          <p className="font-dm-sans text-[13px] md:text-[15px] text-muted-foreground leading-relaxed mb-5 md:mb-6">
            Traditional security tells you what happened. Fog Bandit ensures it never does. Within seconds of detection, dense fog fills the space, removing visibility and forcing intruders to abandon the attempt immediately.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-muted rounded-xl p-4 md:p-5">
              <img src={iconStopwatch} alt="" className="h-6 w-5 mb-3" />
              <h3 className="font-inter text-[14px] md:text-[15px] font-bold text-foreground mb-1">Instant Obscuration</h3>
              <p className="font-dm-sans text-[12px] md:text-[13px] text-muted-foreground leading-snug">
                Visibility drops to near zero within seconds — making it impossible to locate or access assets.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-4 md:p-5">
              <img src={iconBroom} alt="" className="h-6 w-5 mb-3" />
              <h3 className="font-inter text-[14px] md:text-[15px] font-bold text-foreground mb-1">Zero-Residue Technology</h3>
              <p className="font-dm-sans text-[12px] md:text-[13px] text-muted-foreground leading-snug">
                Safe for electronics, stock, and interiors — with no cleanup, no damage, and no downtime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesThreeSecond;
