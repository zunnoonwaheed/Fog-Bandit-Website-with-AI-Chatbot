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
            <p className="font-dm-sans text-[14px] md:text-[16px] font-medium leading-relaxed mb-4" style={{ color: '#475569' }}>
              The Bandit Fogging Systems were first designed & developed by the Belgium based manufacturer, Bandit nv/sa in 1992. The huge number of Bandit systems sold since then are still in service today.
            </p>
            <p className="font-dm-sans text-[14px] md:text-[16px] font-medium leading-relaxed mb-4" style={{ color: '#475569' }}>
              "The Manufacturer: BANDIT was a logical brand name for our products which are completely harmless to the user and environmentally friendly as well. We are a typical technology based company, specialized in a niche sector of the security market place supplying many different types of customer, including leading national & multi-national security companies, and succeeding to grow into a worldwide market leader of fog security systems."
            </p>
            <p className="font-dm-sans text-[14px] md:text-[16px] font-medium leading-relaxed mb-6" style={{ color: '#475569' }}>
              The Bandit's patented design and unprecedented track record of performance & reliability, has earned it a reputation that has attracted end users from all types of the business world. From big companies to corner stores, the FOG BANDIT is widely used to protect people and assets against the threats of robbery and burglary across Financial Institutions, Cash Processing, Retail, Warehouse Distribution, Leisure, Jewellers, and Public Sectors.
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

          <div className="flex justify-center md:justify-start md:items-start">
            <img
              src={aboutFogRoom}
              alt="Fog Bandit in action"
              className="rounded-2xl object-cover w-full md:w-auto md:max-w-[500px] h-auto max-h-[450px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
