import ProductCard from "./ProductCard";
import product240Box from "@/assets/product-240db-box.png";
import productCardInnovative from "@/assets/product-240db-narrow.png";
import productBanditFront from "@/assets/product-bandit-front.png";
import productRoundedDark from "@/assets/product-rounded-dark.png";
import productGreenVertical from "@/assets/product-green-vertical.png";
import productBanditLens from "@/assets/product-bandit-lens.png";
import productRoundedGrey from "@/assets/product-rounded-grey.png";
import productRoundedOpen from "@/assets/product-rounded-open.png";
import productCeilingLed from "@/assets/product-ceiling-led.png";
import productFlashUnit from "@/assets/product-flash-unit.png";
import productBanditFront2 from "@/assets/product-bandit-front2.png";

const mainProducts = [
  {
    image: product240Box,
    title: "Fog Bandit 240 DB Extended Nozzle (Complete Kit)",
    description: "Designed for cabinet/covert installations",
    features: [
      "Produces 28 cubic metres of fog per second with visibility range (density) reduced to just 30cm",
      "Programable for room sizes ranging from 50m³ to 500m³, for larger areas multiple units can be used in unison",
      "24/7 self-diagnostics instantly reports stats changes to the alarm panel",
      "Error LED provides quick and easy identification of the failure for rapid resolution.",
      "Used where concealment of the FOG BANDIT is required.",
    ],
    applications: [
      "Cabinet/covert installations",
      "Small to medium spaces",
      "Retail environments",
    ],
    specifications: [
      "Coverage: 50m³ - 500m³",
      "Fog output: 28m³/sec",
      "Visibility reduction: <30cm",
    ],
  },
  {
    image: productCardInnovative,
    title: "Fog Bandit 240 DB Narrow Nozzle (Complete Kit)",
    description: "Designed for long corridors or narrow rooms",
    features: [
      "Produces 28 cubic metres of fog per second with visibility range (density) reduced to just 30cm",
      "Programable for room sizes ranging from 50m³ to 500m³, for larger areas multiple units can be used in unison",
      "24/7 self-diagnostics instantly reports stats changes to the alarm panel",
      "Error LED provides quick and easy identification of the failure for rapid resolution.",
      "Projects the fog 10 metres in the first two seconds alone!",
    ],
    applications: [
      "Long corridors",
      "Narrow rooms",
      "Linear spaces",
    ],
    specifications: [
      "Coverage: 50m³ - 500m³",
      "Fog output: 28m³/sec",
      "Projection: 10m in 2 seconds",
    ],
  },
  {
    image: productBanditFront,
    title: "Fog Bandit 320 Ceiling Mount (Complete Kit)",
    description: "Designed for room sizes of 40 to 200 cubic metres",
    features: [
      "Simple 320 system are perfect to fully protect small to medium spaces",
      "Cartridges are available and after use 320 system can perform 24/7 system diagnostics.",
      "Can be mounted in any position (wall, ceiling or floor).",
      "Patented on-board electronics perform 24/7 system diagnostics.",
    ],
    applications: [
      "Small to medium retail",
      "Office spaces",
      "Ceiling installations",
    ],
    specifications: [
      "Coverage: 40m³ - 200m³",
      "Mounting: Any position",
      "System diagnostics: 24/7",
    ],
  },
  {
    image: productRoundedDark,
    title: "Fog Bandit 320 Vertical Mount (Complete Kit)",
    description: "Designed for room sizes of 60 to 300 cubic metres",
    features: [
      "Single 320 systems are perfect to fully protect small to medium spaces",
      "Cartridges are available and after use 320 system can perform 24/7 system diagnostics.",
      "Can be mounted in any position (wall, ceiling or floor).",
      "Maximum protection without residue.",
      "Approved for localized electronics perform 24/7 system diagnostics.",
    ],
    applications: [
      "Warehouses",
      "Industrial spaces",
      "Vertical wall mounting",
    ],
    specifications: [
      "Coverage: 60m³ - 300m³",
      "Mounting: Wall/vertical",
      "Residue-free fog",
    ],
  },
  {
    image: productGreenVertical,
    title: "Fog Bandit 320 Horizontal White (Complete Kit)",
    description: "Designed for room sizes of 40 to 300 cubic metres",
    features: [
      "These are room-size specific to deliver optimum protection without residue",
      "Can be mounted in any position (wall, ceiling or floor).",
      "Approved as certified to fully comply with the ATEX Standard.",
      "Patented on-board electronics perform 24/7 system diagnostics.",
    ],
    applications: [
      "Discreet retail fit-out",
      "White interior spaces",
      "Modern commercial",
    ],
    specifications: [
      "Coverage: 40m³ - 300m³",
      "Color: White finish",
      "ATEX certified",
    ],
  },
];

const expandedProducts = [
  {
    image: productBanditLens,
    title: "Fog Bandit 240 DB Standard Tri Nozzle (Complete Kit)",
    description: "Designed as a general purpose unit",
    features: [
      "Produces 28 cubic metres of fog per second with visibility range (density) reduced to just 30cm",
      "Programable for room sizes ranging from 50m³ to 500m³",
      "24/7 self-diagnostics instantly reports stats changes",
      "Error LED provides quick identification of the failure for rapid resolution.",
      "Tri-directional fog for broad coverage",
    ],
    applications: [
      "General purpose security",
      "Multi-direction coverage",
      "Event security",
    ],
    specifications: [
      "Coverage: 50m³ - 500m³",
      "Fog output: 28m³/sec",
      "Nozzle: Tri-directional",
    ],
  },
  {
    image: productRoundedGrey,
    title: "Fog Bandit 240 DB Downward Nozzle (Complete Kit)",
    description: "Designed for high ceiling, warehouse applications",
    features: [
      "Produces 28 cubic metres of fog per second",
      "Programable for room sizes ranging from 50m³ to 500m³",
      "24/7 self-diagnostics instantly reports stats changes",
      "Downward fog deployment for high ceilings",
      "Error LED provides quick identification",
    ],
    applications: [
      "High ceiling warehouses",
      "Logistics centers",
      "Large open spaces",
    ],
    specifications: [
      "Coverage: 50m³ - 500m³",
      "Fog output: 28m³/sec",
      "Direction: Downward",
    ],
  },
  {
    image: productRoundedOpen,
    title: "Fog Bandit 240 DB Narrow Nozzle (Complete Kit)",
    description: "Designed for long corridors or camera rooms.",
    features: [
      "Produces 28 cubic metres of fog per second",
      "Programable for room sizes ranging from 50m³ to 500m³",
      "24/7 self-diagnostics instantly reports stats changes",
      "Projects fog 10 metres in first two seconds",
      "Narrow beam for corridor coverage",
    ],
    applications: [
      "Long corridors",
      "Camera rooms",
      "Linear spaces",
    ],
    specifications: [
      "Coverage: 50m³ - 500m³",
      "Fog output: 28m³/sec",
      "Projection: 10m in 2sec",
    ],
  },
];

const bottomProducts = [
  {
    image: productCeilingLed,
    title: "Fog Bandit 320 Splitter Option (Complete Kit)",
    description: "This unit can wall mount with two fog nozzles.",
    features: [
      "Totally dustproof, maintenance free design",
      "Uses patented cartridges for residue-free protection. Fog cartridges are replaceable",
      "Bandit 320 systems comply with EN50131-8 Standard.",
      "Patented on-board electronics perform 24/7 system diagnostics.",
      "Can be mounted above ceilings, behind walls, or inside cabinets.",
    ],
    applications: [
      "Split coverage areas",
      "Two-direction protection",
      "Flexible installations",
    ],
    specifications: [
      "Mounting: Wall with splitter",
      "Nozzles: Dual output",
      "EN50131-8 compliant",
    ],
  },
  {
    image: productFlashUnit,
    title: "Fog Bandit Standalone Flash Unit",
    description: "Works with either the Fog Bandit 240 or 320",
    features: [
      "Pulsed flash LED lights interrupt the human visual system",
      "Amplifies the already disorientating high-speed fog",
      "LED attacks disrupt brain processing, prompting criminals to leave quickly.",
      "Targeting assets and deploying cutting machinery becomes near impossible",
      "Aides time-window for the Police / Law Enforcement Response",
    ],
    applications: [
      "High-value asset protection",
      "Enhanced disorientation",
      "Works with 240/320 systems",
    ],
    specifications: [
      "Type: LED flash strobe",
      "Integration: 240/320 compatible",
      "Effect: Visual disruption",
    ],
  },
  {
    image: productBanditFront2,
    title: "Fog Bandit 320 – Flash Fog Enabled (Complete Kit)",
    description: "Quality Flash unit with 6 LEDs for effect.",
    features: [
      "Totally dustproof, maintenance free design",
      "Sealed cartridges protect without residue. Various sizes available, easily replaced.",
      "Bandit 320 systems comply with EN50131-8 Standard.",
      "Patented on-board electronics perform 24/7 system diagnostics.",
      "Can be oriented in any position (wall, ceiling or floor).",
    ],
    applications: [
      "Premium security installations",
      "Flash + fog combination",
      "Maximum deterrent effect",
    ],
    specifications: [
      "LEDs: 6 high-intensity",
      "EN50131-8 compliant",
      "Mounting: Any position",
    ],
  },
];

const ProductGrid = () => {
  const mobileScrollerClass = "flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
  const mobileCardClass = "w-full max-w-[calc(100vw-32px)] flex-none snap-start";
  const desktopGridClass = "hidden md:grid";
  const primaryMobileProducts = mainProducts;
  const expandedMobileProducts = [...expandedProducts, ...bottomProducts];

  return (
    <section className="pb-14 md:pb-[100px]">
      <div className="container mx-auto px-4">
        <div className={`${mobileScrollerClass} mb-12 md:hidden`}>
          {primaryMobileProducts.map((product, i) => (
            <div key={i} className={mobileCardClass}>
              <ProductCard {...product} large={i < 2} />
            </div>
          ))}
        </div>

        <div className={`${desktopGridClass} md:grid-cols-2 md:gap-10 md:mb-10`}>
          {mainProducts.slice(0, 2).map((product, i) => (
            <div key={i}>
              <ProductCard {...product} large />
            </div>
          ))}
        </div>
        <div className={`${desktopGridClass} md:grid-cols-3 md:gap-8 md:mb-[100px]`}>
          {mainProducts.slice(2).map((product, i) => (
            <div key={i}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-inter text-[24px] md:text-[32px] font-bold text-[#111827] mb-3">
            Expanded Product Range
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[16px] text-[#6B7280] leading-[1.6] max-w-2xl mx-auto">
            Specialised variations designed for specific deployment scenarios, from high-security sirens to residential aesthetic integration.
          </p>
        </div>

        <div className={`${mobileScrollerClass} mb-12 md:hidden`}>
          {expandedMobileProducts.map((product, i) => (
            <div key={i} className={mobileCardClass}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className={`${desktopGridClass} md:grid-cols-3 md:gap-8 md:mb-10`}>
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
