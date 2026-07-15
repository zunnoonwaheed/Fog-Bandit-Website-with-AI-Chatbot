import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import product320VVertical from "@/assets/product-320v-vertical.png";
import homeTallRight from "@/assets/home-bento-tall-right.png";
import product240DbExtended from "@/assets/product-240db-extended.png";
import product240DbNarrow from "@/assets/product-240db-narrow.png";

const productShotClass = "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]";

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
    <section id="products" className="pt-[100px] lg:pt-[120px] pb-0">
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

        {/* Mobile: tall images swapped L/R; centre 240 cards swapped top/bottom vs desktop */}
        <div ref={mobileScrollRef} className="mt-10 md:hidden -mr-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4 pr-4">
            {[
              { img: product320VVertical, title: "Fog Bandit 320 V Vertical Mount", labels: true },
              { img: product240DbNarrow, title: "Fog Bandit 240 DB Extended Nozzle", labels: true },
              { img: product240DbExtended, title: "Fog Bandit 240 DB Narrow Nozzle", labels: true },
              { img: homeTallRight, title: "Fog Bandit 320 C Ceiling Mount", labels: true },
            ].map((p, i, arr) => (
              <div
                key={p.title}
                data-card
                className="premium-media group snap-start shrink-0 rounded-2xl relative overflow-hidden ring-1 ring-black/[0.05]"
                style={{ width: "366px", height: "700px", maxWidth: "calc(100vw - 2rem)" }}
              >
                <Link to="/products" className="absolute inset-0 z-0 block" aria-label={p.title}>
                  <img src={p.img} alt="" className={productShotClass} loading="lazy" />
                </Link>
                {p.labels ? (
                  <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
                    <h3 className="text-white font-heading font-bold text-[17px] leading-tight max-w-[200px]">{p.title.replace(' ', '\n')}</h3>
                    <button
                      aria-label="Next product"
                      onClick={() => scrollToCard((i + 1) % arr.length)}
                      className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0 ml-3"
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop bento: [320 V Vertical] [240 narrow / 240 ext] [320 C Ceiling] */}
        <div className="mt-12 hidden md:grid md:grid-cols-3 gap-4 auto-rows-[280px]">
          <Link
            to="/products"
            aria-label="Fog Bandit 320 Vertical Mount"
            className="premium-media group md:col-start-1 md:row-start-1 md:row-span-2 h-full min-h-0 rounded-2xl relative overflow-hidden block ring-1 ring-black/[0.05]"
          >
            <img src={product320VVertical} alt="" className={productShotClass} loading="lazy" />
            <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
              <h3 className="text-white font-heading font-bold text-[15px] leading-tight max-w-[180px]">Fog Bandit 320 V<br />Vertical Mount</h3>
              <span aria-label="View product" className="w-9 h-9 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0 ml-2">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </div>
          </Link>

          <Link to="/products" className="premium-media group md:col-start-2 md:row-start-1 h-full min-h-0 rounded-2xl relative overflow-hidden block ring-1 ring-black/[0.05]">
            <img src={product240DbNarrow} alt="Fog Bandit 240 DB Extended Nozzle" className={productShotClass} loading="lazy" />
            <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
              <h3 className="text-white font-heading font-bold text-[15px] leading-tight max-w-[180px]">Fog Bandit 240 DB<br />Extended Nozzle</h3>
              <span aria-label="View product" className="w-9 h-9 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0 ml-2">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </div>
          </Link>

          <Link to="/products" className="premium-media group md:col-start-2 md:row-start-2 h-full min-h-0 rounded-2xl relative overflow-hidden block ring-1 ring-black/[0.05]">
            <img src={product240DbExtended} alt="Fog Bandit 240 DB Narrow Nozzle" className={productShotClass} loading="lazy" />
            <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
              <h3 className="text-white font-heading font-bold text-[15px] leading-tight max-w-[180px]">Fog Bandit 240 DB<br />Narrow Nozzle</h3>
              <span aria-label="View product" className="w-9 h-9 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0 ml-2">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </div>
          </Link>

          <Link
            to="/products"
            aria-label="Fog Bandit 320 Ceiling Mount"
            className="premium-media group md:col-start-3 md:row-start-1 md:row-span-2 h-full min-h-0 rounded-2xl relative overflow-hidden block ring-1 ring-black/[0.05]"
          >
            <img src={homeTallRight} alt="" className={productShotClass} loading="lazy" />
            <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
              <h3 className="text-white font-heading font-bold text-[15px] leading-tight max-w-[180px]">Fog Bandit 320 C<br />Ceiling Mount</h3>
              <span aria-label="View product" className="w-9 h-9 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0 ml-2">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
