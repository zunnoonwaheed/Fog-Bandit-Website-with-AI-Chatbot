import { useState, useRef, useEffect } from "react";
import iconJewellery from "@/assets/Icon (7).svg";
import iconRetail from "@/assets/Icon (8).svg";
import iconWarehouses from "@/assets/Icon (9).svg";
import iconAutomotive from "@/assets/Icon (10).svg";
import iconCommercial from "@/assets/Icon (11).svg";
import iconResidential from "@/assets/Icon (12).svg";

type Environment = {
  icon: string;
  title: string;
  description: string;
};

const environments: Environment[] = [
  {
    icon: iconJewellery,
    title: "Jewellery Stores",
    description: "Protect high-value inventory from smash-and-grab attempts with instant asset obscuration.",
  },
  {
    icon: iconRetail,
    title: "Retail Stores",
    description: "Secure electronics, designer apparel, and stockrooms with localized fog zones.",
  },
  {
    icon: iconWarehouses,
    title: "Warehouses",
    description: "Scalable protection for large logistics spaces and distribution centers.",
  },
  {
    icon: iconAutomotive,
    title: "Automotive",
    description: "Defend high-performance vehicles and specialized tools in showrooms and workshops.",
  },
  {
    icon: iconCommercial,
    title: "Commercial Offices",
    description: "Safeguard critical IT infrastructure, server rooms, and intellectual property.",
  },
  {
    icon: iconResidential,
    title: "Residential",
    description: "Premium protection for private estates, safes, and high-value domestic assets.",
  },
];

const ProtectionEnvironments = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / environments.length;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-[100px] lg:pt-[120px] pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">Protection Across Every Environment</h2>
          <p className="section-subtext mt-4">
            Engineered for versatility. From micro-retail to massive logistics hubs.
          </p>
        </div>

        {/* Mobile: Horizontal scroll, one card at a time */}
        <div className="mt-10 md:hidden">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            <div className="flex gap-4 px-4">
              {environments.map((env) => (
                <div
                  key={env.title}
                  className="bg-background border border-border rounded-xl p-6 hover:border-primary/20 transition-colors min-w-[calc(100vw-48px)] max-w-[calc(100vw-48px)] snap-center flex-shrink-0"
                >
                  <img src={env.icon} alt="" className="h-[27px] mb-4" />
                  <h3 className="font-heading text-[17px] font-bold text-secondary mb-2">
                    {env.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    {env.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {environments.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  if (container) {
                    const cardWidth = container.scrollWidth / environments.length;
                    container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
                  }
                }}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tablet and Desktop: Grid layout */}
        <div className="mt-12 hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {environments.map((env) => (
            <div
              key={env.title}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/20 transition-colors"
            >
              <img src={env.icon} alt="" className="h-[27px] mb-4" />
              <h3 className="font-heading text-[17px] font-bold text-secondary mb-2">
                {env.title}
              </h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                {env.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtectionEnvironments;
