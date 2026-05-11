import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import productVertical from "@/assets/product-plt-bandit-vertical.png";
import product240Ext from "@/assets/product-plt-240-frontal.png";
import product240Narrow from "@/assets/product-plt-240-perspective-a.png";
import productCeiling from "@/assets/product-plt-320-covert.png";

const productShotCover = "absolute inset-0 h-full w-full object-cover object-center";
const productShotContain = "absolute inset-0 h-full w-full object-contain object-center p-5 md:p-8";

const ProductsSection = () => {
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    const container = mobileScrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLDivElement>("[data-card]");
    const target = cards[index];
    if (target) {
      container.scrollTo({ left: target.offsetLeft - container.offsetLeft, behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="pb-14 lg:pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">
            Engineered To <span className="text-[#021373]">Stop Theft</span>, Not Just Report It
          </h2>
          <p className="section-subtext mt-4">
            Every Fog Bandit system is built for speed, reliability, and real-world performance — delivering
            instant protection when alarms alone aren't enough.
          </p>
          <Link to="/products" className="btn-primary mt-6 inline-flex">
            Explore the Products Range <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile: horizontal scroll snap — tall cards, image fills tile edge-to-edge */}
        <div ref={mobileScrollRef} className="mt-10 md:hidden -mr-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4 pr-4">
            {[
              { img: productVertical, title: "Fog Bandit 320 Vertical Mount", contain: false },
              { img: product240Ext, title: "Fog Bandit 240 DB Extended Nozzle", contain: true },
              { img: product240Narrow, title: "Fog Bandit 240 DB Narrow Nozzle", contain: true },
              { img: productCeiling, title: "Fog Bandit 320 Ceiling Mount", contain: false },
            ].map((p, i, arr) => (
              <div
                key={p.title}
                data-card
                className="snap-start shrink-0 rounded-2xl relative overflow-hidden w-[min(100vw-2rem,420px)] aspect-[3/5]"
              >
                <Link to="/products" className="absolute inset-0 z-0 block">
                  <img src={p.img} alt={p.title} className={p.contain ? productShotContain : productShotCover} loading="lazy" />
                </Link>
                <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
                  <h3 className="text-primary-foreground font-heading font-bold text-lg leading-tight max-w-[200px]">{p.title}</h3>
                  <button
                    aria-label="Next product"
                    onClick={() => scrollToCard((i + 1) % arr.length)}
                    className="w-12 h-11 rounded-lg bg-white/10 hover:bg-white/10 focus:bg-white/10 active:bg-white/10 border border-white/20 backdrop-blur-md transition-none flex items-center justify-center shrink-0 ml-3"
                  >
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop bento — taller rows so product shots read larger, images fill cells */}
        <div className="mt-12 hidden md:grid md:grid-cols-3 gap-4 auto-rows-[minmax(300px,1fr)]">
          {/* Left - tall */}
          <Link to="/products" className="md:row-span-2 h-full min-h-0 rounded-2xl relative overflow-hidden group block">
            <img src={productVertical} alt="Fog Bandit 320 Vertical Mount" className={productShotCover} loading="lazy" />
            <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
              <h3 className="text-primary-foreground font-heading font-bold text-lg leading-tight max-w-[180px]">Fog Bandit 320 Vertical Mount</h3>
              <span aria-label="View product" className="w-12 h-11 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 ml-3">
                <ArrowRight className="w-4 h-4 text-primary-foreground" />
              </span>
            </div>
          </Link>

          {/* Middle top */}
          <Link to="/products" className="h-full min-h-[300px] rounded-2xl relative overflow-hidden block">
            <img src={product240Ext} alt="Fog Bandit 240 DB Extended Nozzle" className={productShotContain} loading="lazy" />
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
              <h3 className="text-primary-foreground font-heading font-bold text-base leading-tight max-w-[180px]">Fog Bandit 240 DB Extended Nozzle</h3>
              <span aria-label="View product" className="w-10 h-9 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 ml-2">
                <ArrowRight className="w-3.5 h-3.5 text-primary-foreground" />
              </span>
            </div>
          </Link>

          {/* Middle bottom */}
          <Link to="/products" className="h-full min-h-[300px] rounded-2xl relative overflow-hidden block">
            <img src={product240Narrow} alt="Fog Bandit 240 DB Narrow Nozzle" className={productShotContain} loading="lazy" />
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
              <h3 className="text-primary-foreground font-heading font-bold text-base leading-tight max-w-[180px]">Fog Bandit 240 DB Narrow Nozzle</h3>
              <span aria-label="View product" className="w-10 h-9 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 ml-2">
                <ArrowRight className="w-3.5 h-3.5 text-primary-foreground" />
              </span>
            </div>
          </Link>

          {/* Right - tall */}
          <Link to="/products" className="md:row-span-2 md:col-start-3 md:row-start-1 h-full min-h-0 rounded-2xl relative overflow-hidden block">
            <img src={productCeiling} alt="Fog Bandit 320 Ceiling Mount" className={productShotCover} loading="lazy" />
            <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
              <h3 className="text-primary-foreground font-heading font-bold text-lg leading-tight max-w-[180px]">Fog Bandit 320 Ceiling Mount</h3>
              <span aria-label="View product" className="w-12 h-11 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 ml-3">
                <ArrowRight className="w-4 h-4 text-primary-foreground" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
