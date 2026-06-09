import { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import product240ExtendedCard from "@/assets/product-240-extended-card.png";
import product240NarrowCard from "@/assets/product-240-narrow-card.png";
import productPlt240Frontal from "@/assets/product-plt-240-frontal.png";
import productPlt240PerspectiveA from "@/assets/product-plt-240-perspective-a.png";
import productPlt240PerspectiveB from "@/assets/product-plt-240-perspective-b.png";
import productPlt320Covert from "@/assets/product-plt-320-covert.png";
import productPltBanditVertical from "@/assets/product-plt-bandit-vertical.png";
import productPltWhiteHorizontal from "@/assets/product-plt-white-horizontal.png";
import productPltSideMount from "@/assets/product-plt-side-mount.png";
import productPltFlashSquare from "@/assets/product-plt-flash-square.png";
import productPltFlashFogPill from "@/assets/product-plt-flash-fog-pill.png";

const mainProducts = [
  {
    image: product240ExtendedCard,
    imageAspectClass: "aspect-[604/350]",
    title: "Fog Bandit 240 DB Standard Tri Nozzle (Complete Kit)",
    description: "Designed as a general-purpose unit",
    features: [
      "Produces 28 cubic metres of fog per second with visibility range reduced to just 30cm",
      "Programable for room sizes ranging from 50m³ to 500m³",
      "24/7 self-diagnostics instantly reports stats changes to the alarm panel",
      "Error LED provides quick identification of the failure for rapid resolution.",
      "Our most popular unit for rapid protection of entire rooms.",
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
    image: product240NarrowCard,
    imageAspectClass: "aspect-[604/350]",
    title: "Fog Bandit 240 DB Narrow Nozzle (Complete Kit)",
    description: "Designed for long corridors or narrow rooms",
    features: [
      "Produces 28 cubic metres of fog per second with visibility range reduced to just 30cm",
      "Programable for room sizes ranging from 50m³ to 500m³",
      "24/7 self-diagnostics instantly reports stats changes to the alarm panel",
      "Error LED quickly identifies failures for resolution.",
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
    image: productPlt320Covert,
    title: "Fog Bandit 320 Bc / Hidden / Ceiling / Cabinet (Complete Kit)",
    description: "Designed for room sizes of 40 to 200 cubic metres",
    features: [
      "Totally dustproof, maintenance free design",
      "Bandit 320 systems are verified to fully comply with the EN50131-8 European Standard.",
      "Can be covertly mounted above suspended ceilings, behind plaster walls.",
      "These are room-size specific to deliver maximum protection without residue.",
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
    image: productPltBanditVertical,
    title: "Fog Bandit 320 Vertical Mount (Complete Kit)",
    description: "Designed for room sizes of 40 to 200 cubic metres",
    features: [
      "Totally dustproof, maintenance free design",
      "Cartridges are available and after use cartridges are easily replaced and empties",
      "Patented on-board electronics perform 24/7 system diagnostics.",
      "Can be oriented in any position (wall, ceiling or floor).",
      "These are room-size specific to deliver maximum protection without residue.",
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
    image: productPltWhiteHorizontal,
    title: "Fog Bandit 320 Horizontal White (Complete Kit)",
    description: "Designed for room sizes of 40 to 200 cubic metres",
    features: [
      "Totally dustproof, maintenance free design",
      "These are room-size specific to deliver maximum protection without residue.",
      "Patented on-board electronics perform 24/7 system diagnostics.",
      "Can be oriented in any position (wall, ceiling or floor).",
      "Systems are verified to fully comply with the EN50131-8 European Standard.",
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
    image: productPlt240Frontal,
    title: "Fog Bandit 240 DB Standard Tri Nozzle (Complete Kit)",
    description: "Designed as a general-purpose unit",
    features: [
      "Produces 28 cubic metres of fog per second with visibility range reduced to just 30cm",
      "Programable for room sizes ranging from 50m³ to 500m³",
      "24/7 self-diagnostics instantly reports stats changes to the alarm panel",
      "Error LED provides quick identification of the failure for rapid resolution.",
      "Our most popular unit for rapid protection of entire rooms.",
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
    image: productPlt240PerspectiveB,
    title: "Fog Bandit 240 DB Downward Nozzle (Complete Kit)",
    description: "Designed for high ceilings, warehouse applications",
    features: [
      "Produces 28 cubic metres of fog per second with visibility range reduced to just 30cm",
      "Programable for room sizes ranging from 50m³ to 500m³",
      "24/7 self-diagnostics instantly reports stats changes to the alarm panel",
      "Error LED provides quick identification of the failure for rapid resolution.",
      "Used where downward firing of the FOG BANDIT is required.",
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
    image: productPlt240PerspectiveA,
    imageNoZoom: true,
    title: "Fog Bandit 240 DB Narrow Nozzle (Complete Kit)",
    description: "Designed for long corridors or narrow rooms",
    features: [
      "Produces 28 cubic metres of fog per second with visibility range reduced to just 30cm",
      "Programable for room sizes ranging from 50m³ to 500m³",
      "24/7 self-diagnostics instantly reports stats changes to the alarm panel",
      "Error LED quickly identifies failures for resolution.",
      "Projects the fog 10 metres in the first two seconds alone!",
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
    image: productPltSideMount,
    title: "Fog Bandit 320 Splitter Option (Complete Kit)",
    description: "This unit mounts on a wall with two fog nozzles.",
    features: [
      "Totally dustproof, maintenance free design",
      "Uses patented cartridges for residue-free protection. Fog cartridges are replaceable.",
      "Bandit 320 systems comply with EN50131-8.",
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
    image: productPltFlashSquare,
    title: "Fog Bandit Standalone Flash Unit",
    description: "Works with either the Fog Bandit 240 or 320",
    features: [
      "Pulsed flash LED lights interrupt the human visual system.",
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
    image: productPltFlashFogPill,
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
  const primaryScrollRef = useRef<HTMLDivElement>(null);
  const expandedScrollRef = useRef<HTMLDivElement>(null);
  const [primaryActiveIndex, setPrimaryActiveIndex] = useState(0);
  const [expandedActiveIndex, setExpandedActiveIndex] = useState(0);

  const mobileScrollerClass = "flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
  const mobileCardClass = "w-full max-w-[calc(100vw-32px)] flex-none snap-start";
  const desktopGridClass = "hidden md:grid";
  const primaryMobileProducts = mainProducts;
  const expandedMobileProducts = [...expandedProducts, ...bottomProducts];

  useEffect(() => {
    const handleScroll = (ref: React.RefObject<HTMLDivElement>, setIndex: (index: number) => void) => {
      if (!ref.current) return;
      const scrollLeft = ref.current.scrollLeft;
      const cardWidth = ref.current.scrollWidth / ref.current.children.length;
      const index = Math.round(scrollLeft / cardWidth);
      setIndex(index);
    };

    const primaryScroller = primaryScrollRef.current;
    const expandedScroller = expandedScrollRef.current;

    const handlePrimaryScroll = () => handleScroll(primaryScrollRef, setPrimaryActiveIndex);
    const handleExpandedScroll = () => handleScroll(expandedScrollRef, setExpandedActiveIndex);

    primaryScroller?.addEventListener('scroll', handlePrimaryScroll);
    expandedScroller?.addEventListener('scroll', handleExpandedScroll);

    return () => {
      primaryScroller?.removeEventListener('scroll', handlePrimaryScroll);
      expandedScroller?.removeEventListener('scroll', handleExpandedScroll);
    };
  }, []);

  return (
    <section className="pb-14 md:pb-[100px]">
      <div className="container mx-auto px-4">
        <div id="fog-generators" className="scroll-mt-24 md:hidden mb-8">
          <div ref={primaryScrollRef} className={mobileScrollerClass}>
            {primaryMobileProducts.map((product, i) => (
              <div key={i} className={mobileCardClass}>
                <ProductCard {...product} large={i < 2} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {primaryMobileProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const element = primaryScrollRef.current;
                  if (element) {
                    const cardWidth = element.scrollWidth / primaryMobileProducts.length;
                    element.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
                  }
                }}
                className={`h-2 rounded-full transition-all ${
                  i === primaryActiveIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to product ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={`${desktopGridClass} md:grid-cols-2 md:gap-10 md:mb-10`}>
          {mainProducts.slice(0, 2).map((product, i) => (
            <div key={i}>
              <ProductCard {...product} large />
            </div>
          ))}
        </div>
        <div id="bandit-320-split" className="scroll-mt-24">
          <div className={`${desktopGridClass} md:grid-cols-3 md:gap-8 md:mb-[100px]`}>
            {mainProducts.slice(2).map((product, i) => (
              <div key={i}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        <div id="led-flash" className="text-center mb-8 md:mb-12 scroll-mt-24">
          <h2 className="font-inter text-[24px] md:text-[32px] font-bold text-[#111827] mb-3">
            Expanded Product Range
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[16px] text-[#6B7280] leading-[1.6] max-w-2xl mx-auto">
            Specialized variations designed for specific deployment scenarios, from high-security sirens to residential aesthetic integration.
          </p>
        </div>

        <div className="md:hidden mb-8">
          <div ref={expandedScrollRef} className={mobileScrollerClass}>
            {expandedMobileProducts.map((product, i) => (
              <div key={i} className={mobileCardClass}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {expandedMobileProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const element = expandedScrollRef.current;
                  if (element) {
                    const cardWidth = element.scrollWidth / expandedMobileProducts.length;
                    element.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
                  }
                }}
                className={`h-2 rounded-full transition-all ${
                  i === expandedActiveIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to product ${i + 1}`}
              />
            ))}
          </div>
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
