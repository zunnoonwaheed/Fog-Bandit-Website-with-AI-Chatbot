import aboutFogRoom from "@/assets/about-fog-room.png";

const AboutStory = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          <div>
            <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-4 leading-snug">
              Built because alarms alone weren't enough
            </h2>
            <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground leading-relaxed mb-4">
              Traditional security systems are designed to detect and report. But by the time an alarm sounds and response arrives, the damage is already done.
            </p>
            <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground leading-relaxed mb-4">
              Fog Bandit ANZ was founded to solve that gap — to move security from passive monitoring to active prevention. Backed by decades of engineering expertise, we introduced fog-based security technology to Australia and New Zealand — a system designed to stop intruders instantly by removing visibility and control.
            </p>
            <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground leading-relaxed mb-6">
              Today, we continue to lead the region in active security solutions that protect assets before loss occurs.
            </p>

            <div className="border-t border-border pt-5 flex gap-10 md:gap-16">
              <div>
                <p className="text-[#021373] text-[28px] md:text-[32px] font-bold leading-none">10,000+</p>
                <p className="font-dm-sans text-muted-foreground text-[12px] md:text-[13px] mt-1">Installations Across ANZ & Worldwide</p>
              </div>
              <div>
                <p className="text-[#021373] text-[28px] md:text-[32px] font-bold leading-none">99.9%</p>
                <p className="font-dm-sans text-muted-foreground text-[12px] md:text-[13px] mt-1">Proven Theft Prevention Success Rate</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <img
              src={aboutFogRoom}
              alt="Fog Bandit in action"
              className="rounded-2xl object-cover w-[366px] h-[548px] md:w-[610px] md:h-[548px] max-w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
