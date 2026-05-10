import mapImage from "@/assets/contact-map-anz-region.png";

const locations = [
  { state: "WA", name: "Western Australia", count: 2, color: "bg-blue-500" },
  { state: "NT", name: "Northern Territory", count: 1, color: "bg-orange-500" },
  { state: "SA", name: "South Australia", count: 1, color: "bg-rose-500" },
  { state: "QLD", name: "Queensland", count: 2, color: "bg-amber-500" },
  { state: "NSW", name: "New South Wales", count: 5, color: "bg-cyan-500" },
  { state: "VIC", name: "Victoria", count: 4, color: "bg-indigo-500" },
];

const PartnersMap = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-inter text-[22px] md:text-[32px] font-bold text-foreground mb-3 md:mb-4">
              Coast to Coast Coverage
            </h2>
            <p className="font-dm-sans text-[14px] md:text-[18px] text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our strategic partners are positioned across every major region in Australia, ensuring expert installation and support wherever you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-muted/30 rounded-2xl p-6 md:p-8">
                <h3 className="font-inter text-[18px] md:text-[20px] font-bold text-foreground mb-5 md:mb-6">
                  Partner Distribution
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {locations.map((location) => (
                    <div
                      key={location.state}
                      className="flex items-center justify-between bg-background border border-border rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`${location.color} rounded-lg px-3 py-1.5`}>
                          <span className="text-white font-inter text-[13px] md:text-[14px] font-bold">
                            {location.state}
                          </span>
                        </div>
                        <span className="font-dm-sans text-[14px] md:text-[15px] text-foreground font-medium">
                          {location.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-primary text-[20px] md:text-[24px] font-bold">
                          {location.count}
                        </div>
                        <div className="text-[11px] md:text-[12px] text-muted-foreground">
                          {location.count === 1 ? "Partner" : "Partners"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <img
                  src={mapImage}
                  alt="Australia partner locations map"
                  className="rounded-2xl w-full max-w-[500px] h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMap;
