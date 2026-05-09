import boltRed from "@/assets/icon-bolt-red.svg";

const AboutMission = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {/* Our Mission */}
          <div className="bg-background border border-border rounded-2xl px-6 md:px-8 pt-6 md:pt-8 pb-6 md:pb-8">
            <img src={boltRed} alt="" className="h-7 w-auto mb-3" />
            <h3 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-3">Our Mission</h3>
            <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground leading-relaxed">
              To redefine security across Australia and New Zealand by delivering systems that actively prevent crime — ensuring every space we protect is secured within seconds, not minutes.
            </p>
          </div>

          {/* Decades of Expertise */}
          <div className="bg-[#021373] rounded-2xl px-6 md:px-8 pt-6 md:pt-8 pb-6 md:pb-8">
            <h3 className="font-inter text-[20px] md:text-[28px] font-semibold mb-3 !text-white">Decades of Expertise</h3>
            <p className="font-dm-sans text-[14px] md:text-[20px] font-medium leading-relaxed mb-5 !text-white/80">
              We merge global fog security with local market insights, providing tailored solutions for ANZ businesses.
            </p>
            <div className="flex gap-10 md:gap-16">
              <div>
                <p className="text-[28px] md:text-[32px] font-bold leading-none !text-white">30+ years</p>
                <p className="font-dm-sans text-[12px] md:text-[13px] mt-1 !text-white/60">Years Experience</p>
              </div>
              <div>
                <p className="text-[28px] md:text-[32px] font-bold leading-none !text-white">10k+</p>
                <p className="font-dm-sans text-[12px] md:text-[13px] mt-1 !text-white/60">Installations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
