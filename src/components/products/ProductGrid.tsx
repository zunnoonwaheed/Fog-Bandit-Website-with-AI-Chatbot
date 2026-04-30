import ProductCard from "./ProductCard";
import product240Box from "@/assets/product-240db-box.png";
import productCardInnovative from "@/assets/product-240db-narrow.png";
import productBanditFront from "@/assets/product-bandit-front.png";
import productBanditFront2 from "@/assets/product-bandit-front2.png";
import productGreenVertical from "@/assets/product-green-vertical.png";
import productRoundedDark from "@/assets/product-rounded-dark.png";
import productRoundedOpen from "@/assets/product-rounded-open.png";
import productBanditLens from "@/assets/product-bandit-lens.png";
import productRoundedGrey from "@/assets/product-rounded-grey.png";
import productCeilingLed from "@/assets/product-ceiling-led.png";
import productFlashUnit from "@/assets/product-flash-unit.png";

const mainProducts = [
  {
    image: product240Box,
    badge: "ADVANCED",
    badgeColor: "bg-[#021373]",
    title: "Fog Bandit 240 DB Extended Nozzle (Complete Kit)",
    subtitle: "Bandit LED Flash Light Barrier",
    description: "Designed for cabinet/covert installations",
    speed: "Instant activation upon alarm trigger or panic button deployment.",
    density: "Instant activation upon alarm trigger or panic button deployment.",
    safety: "Energy-efficient LED system for safe commercial use.",
  },
  {
    image: productCardInnovative,
    badge: "INNOVATIVE",
    badgeColor: "bg-[#021373]",
    title: "Fog Bandit 240 DB Narrow Nozzle (Complete Kit)",
    subtitle: "Flexible Multi-Zone Protection",
    description: "Designed for long corridors or narrow rooms",
    speed: "High-performance fog discharge for commercial spaces.",
    density: "Fog reduces visibility across protected zones.",
    safety: "Uses biodegradable fog fluid safe for people and equipment.",
  },
  {
    image: productBanditFront,
    badge: "ADVANCED",
    badgeColor: "bg-[#021373]",
    title: "Fog Bandit 320 Ceiling Mount (Complete Kit)",
    subtitle: "Mid-Range Retail",
    description: "Designed for room sizes of 40 to 200 cubic metres",
    speed: "20 cubic metres per second discharge.",
    density: "Thick fog coverage with visibility reduction < 40cm.",
    safety: "Environmentally-friendly, biodegradable fog fluid.",
  },
  {
    image: productRoundedDark,
    badge: "ADVANCED",
    badgeColor: "bg-[#021373]",
    title: "Fog Bandit 320 Vertical Mount (Complete Kit)",
    subtitle: "Industrial & Warehouse",
    description: "Designed for room sizes of 60 to 300 cubic metres",
    speed: "30 cubic metres per second discharge.",
    density: "Thick fog coverage with visibility reduction < 40cm.",
    safety: "Environmentally-friendly, biodegradable fog fluid.",
  },
  {
    image: productGreenVertical,
    badge: "ADVANCED",
    badgeColor: "bg-[#021373]",
    title: "Fog Bandit 320 Horizontal White (Complete Kit)",
    subtitle: "Discreet Retail Fit-Out",
    description: "Designed for room sizes of 40 to 300 cubic metres",
    speed: "20 cubic metres per second discharge.",
    density: "Thick fog coverage with visibility reduction < 40cm.",
    safety: "Environmentally-friendly, biodegradable fog fluid.",
  },
];

const expandedProducts = [
  {
    image: productBanditLens,
    badge: "PREMIUM",
    badgeColor: "bg-[#021373]",
    title: "Fog Bandit 240 DB Standard Tri Nozzle (Complete Kit)",
    subtitle: "Event Security",
    description: "Designed as a general purpose unit",
    speed: "40 cubic metres per second discharge.",
    density: "Flooding fog with visibility < 10cm.",
    safety: "Non-toxic, certified safe for all environments.",
  },
  {
    image: productRoundedGrey,
    badge: "PREMIUM",
    badgeColor: "bg-[#021373]",
    title: "Fog Bandit 240 DB Downward Nozzle (Complete Kit)",
    subtitle: "Warehouse/Logistics",
    description: "Designed for high ceiling, warehouse applications",
    speed: "25 cubic metres per second discharge.",
    density: "Mandatory fog density achieving visibility < 30cm.",
    safety: "Food-grade fog fluid. Ideal for any setting.",
  },
  {
    image: productRoundedOpen,
    badge: "PREMIUM",
    badgeColor: "bg-[#021373]",
    title: "Fog Bandit 240 DB Narrow Nozzle (Complete Kit)",
    subtitle: "Retail/Office",
    description: "Designed for long corridors or camera rooms.",
    speed: "15 cubic metres per second discharge.",
    density: "Light fog reducing visibility < 80cm.",
    safety: "Eco-friendly safe for pets and children.",
  },
];

const bottomProducts = [
  {
    image: productCeilingLed,
    badge: "PREMIUM",
    badgeColor: "bg-[#021373]",
    title: "Fog Bandit 320 Splitter Option (Complete Kit)",
    subtitle: "Event Security",
    description: "Designed as a general purpose unit",
    speed: "35 cubic metres per second discharge.",
    density: "Flooding fog with visibility < 5cm.",
    safety: "Non-toxic, certified safe for all environments.",
  },
  {
    image: productFlashUnit,
    badge: "PREMIUM",
    badgeColor: "bg-[#021373]",
    title: "Fog Bandit Standalone Flash Unit",
    subtitle: "Standalone/Lite",
    description: "Designed for high ceiling applications",
    speed: "20 cubic metres per second discharge.",
    density: "Mandatory fog density achieving visibility < 30cm.",
    safety: "Food-grade fog fluid. Ideal for any setting.",
  },
  {
    image: productBanditFront2,
    badge: "PREMIUM",
    badgeColor: "bg-[#021373]",
    title: "Fog Bandit 320 – Flash Fog Enabled (Complete Kit)",
    subtitle: "Retail/Office",
    description: "Designed for long corridors or camera rooms.",
    speed: "15 cubic metres per second discharge.",
    density: "Light fog reducing visibility < 80cm.",
    safety: "Eco-friendly safe for pets and children.",
  },
];

const ProductGrid = () => {
  const mobileScrollerClass = "flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
  const mobileCardClass = "w-[366px] max-w-[calc(100vw-24px)] flex-none snap-start";
  const desktopGridClass = "hidden md:grid";
  const primaryMobileProducts = mainProducts;
  const expandedMobileProducts = [...expandedProducts, ...bottomProducts];

  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className={`${mobileScrollerClass} mb-12 md:hidden`}>
          {primaryMobileProducts.map((product, i) => (
            <div key={i} className={mobileCardClass}>
              <ProductCard {...product} large={i < 2} />
            </div>
          ))}
        </div>

        <div className={`${desktopGridClass} md:grid-cols-2 md:gap-10 md:mb-12`}>
          {mainProducts.slice(0, 2).map((product, i) => (
            <div key={i}>
              <ProductCard {...product} large />
            </div>
          ))}
        </div>
        <div className={`${desktopGridClass} md:grid-cols-3 md:gap-8 md:mb-[120px]`}>
          {mainProducts.slice(2).map((product, i) => (
            <div key={i}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2">
            Expanded Product Range
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Specialised variations designed for specific deployment scenarios, from high-security stores to residential aesthetic integration.
          </p>
        </div>

        <div className={`${mobileScrollerClass} mb-12 md:hidden`}>
          {expandedMobileProducts.map((product, i) => (
            <div key={i} className={mobileCardClass}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className={`${desktopGridClass} md:grid-cols-3 md:gap-8 md:mb-12`}>
          {expandedProducts.map((product, i) => (
            <div key={i}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className={`${desktopGridClass} md:grid-cols-3 md:gap-8`}>
          {bottomProducts.map((product, i) => (
            <div key={i}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
