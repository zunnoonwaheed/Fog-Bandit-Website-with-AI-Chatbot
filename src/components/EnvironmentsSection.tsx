const environments = [
  {
    icon: "/assets/icon-jewellery.svg",
    title: "Jewellery Stores",
    description: "Protect high-value inventory from smash-and-grab attempts with instant asset obscuration.",
  },
  {
    icon: "/assets/icon-retail.svg",
    title: "Retail Stores",
    description: "Secure electronics, designer apparel, and stockrooms with localized fog zones.",
  },
  {
    icon: "/assets/icon-warehouse.svg",
    title: "Warehouses",
    description: "Scalable protection for large logistics spaces and distribution centers.",
  },
  {
    icon: "/assets/icon-automotive.svg",
    title: "Automotive",
    description: "Defend high-performance vehicles and specialized tools in showrooms and workshops.",
  },
  {
    icon: "/assets/icon-commercial.svg",
    title: "Commercial Offices",
    description: "Safeguard critical IT infrastructure, server rooms, and intellectual property.",
  },
  {
    icon: "/assets/icon-residential.svg",
    title: "Residential",
    description: "Premium protection for private estates, safes, and high-value domestic assets.",
  },
];

const EnvironmentsSection = () => {
  return (
    <section className="bg-white pb-[100px] lg:pb-[120px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-2 md:pt-0">
          <h2 className="font-inter text-[24px] md:text-[32px] font-semibold text-black leading-tight tracking-tight">
            Protection Across Every Environment
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[16px] text-[#666666] font-medium leading-relaxed mt-3 md:mt-4 max-w-[800px] mx-auto">
            Engineered for versatility. From micro-retail to massive logistics hubs.
          </p>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="mt-10 md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 pb-2">
            {environments.map((env) => (
              <div
                key={env.title}
                className="snap-start shrink-0 bg-white rounded-2xl p-6 border border-[#E8E8E8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg hover:border-[#D0D0D0]"
                style={{ width: 'calc(100vw - 2rem)' }}
              >
                <img src={env.icon} alt="" className="h-8 w-auto mb-4" loading="lazy" />
                <h3 className="font-inter text-[17px] font-semibold text-[#1A1A1A] mb-2 leading-snug">
                  {env.title}
                </h3>
                <p className="font-dm-sans text-[14px] text-[#666666] leading-[1.55]">
                  {env.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="mt-12 hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {environments.map((env) => (
            <div
              key={env.title}
              className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E8E8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg hover:border-[#D0D0D0] hover:-translate-y-1"
            >
              <img src={env.icon} alt="" className="h-8 w-auto mb-4 md:mb-5" loading="lazy" />
              <h3 className="font-inter text-[17px] md:text-[18px] font-semibold text-[#1A1A1A] mb-2 md:mb-3 leading-snug">
                {env.title}
              </h3>
              <p className="font-dm-sans text-[14px] md:text-[15px] text-[#666666] leading-[1.55]">
                {env.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentsSection;
