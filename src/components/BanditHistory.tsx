import banditFogRoom from "@/assets/2 (1).png";

const BanditHistory = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={banditFogRoom}
                alt="Fog Bandit security system in action"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-inter text-[24px] md:text-[32px] font-bold text-foreground leading-tight mb-4 md:mb-5">
              Built because alarms alone weren't enough
            </h2>

            <div className="space-y-4 text-[14px] md:text-[15px] leading-relaxed text-muted-foreground">
              <p>
                The Bandit Fogging Systems were first designed & developed by the Belgium based manufacturer, Bandit nv/sa in 1992. The huge number of Bandit systems sold since then are still in service today.
              </p>

              <blockquote className="border-l-4 border-primary pl-4 italic">
                <p className="text-[13px] md:text-[14px]">
                  "The Manufacturer: BANDIT was a logical brand name for our products which are completely harmless to the user and environmentally friendly as well. We are a typical technology based company, specialized in a niche sector of the security market place supplying many different types of customer, including leading national & multi-national security companies, and succeeding to grow into a worldwide market leader of fog security systems."
                </p>
              </blockquote>

              <p>
                The Bandit's patented design and unprecedented track record of performance & reliability, has earned it a reputation that has attracted end users from all types of the business world. From big companies to corner stores, the FOG BANDIT is widely used to protect people and assets against the threats of robbery and burglary across Financial Institutions, Cash Processing, Retail, Warehouse Distribution, Leisure, Jewellers, and Public Sectors.
              </p>

              <div className="pt-6 border-t border-border">
                <div className="flex items-baseline gap-3">
                  <span className="font-inter text-[32px] md:text-[40px] font-bold text-primary">10,000+</span>
                  <span className="font-dm-sans text-[13px] md:text-[14px] font-medium text-muted-foreground">
                    Installations Across ANZ & Worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanditHistory;
