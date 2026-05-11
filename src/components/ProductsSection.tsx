import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import homeTallLeft from "@/assets/home-bento-tall-left.png";
import homeTallRight from "@/assets/home-bento-tall-right.png";
import productPlt240Frontal from "@/assets/product-plt-240-frontal.png";
import productPlt240PerspectiveA from "@/assets/product-plt-240-perspective-a.png";

const productShotClass = "absolute inset-0 h-full w-full object-cover object-center";

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

        {/* Mobile: tall images swapped L/R; centre 240 cards swapped top/bottom vs desktop */}
        <div ref={mobileScrollRef} className="mt-10 md:hidden -mr-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-4 pr-4">
            {[
              { img: homeTallRight, title: "Fog Bandit 320 Ceiling Mount", labels: false },
              { img: productPlt240PerspectiveA, title: "Fog Bandit 240 DB Narrow Nozzle", labels: true },
              { img: productPlt240Frontal, title: "Fog Bandit 240 DB Extended Nozzle", labels: true },
              { img: homeTallLeft, title: "Fog Bandit 320 Vertical Mount", labels: false },
            ].map((p, i, arr) => (
              <div
                key={p.title}
                data-card
                className="snap-start shrink-0 rounded-2xl relative overflow-hidden"
                style={{ width: "366px", height: "700px", maxWidth: "calc(100vw - 2rem)" }}
              >
                <Link to="/products" className="absolute inset-0 z-0 block" aria-label={p.title}>
                  <img src={p.img} alt="" className={productShotClass} loading="lazy" />
                </Link>
                {p.labels ? (
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
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop bento: [tall = former R img] [240 narrow / 240 ext] [tall = former L img] */}
        <div className="mt-12 hidden md:grid md:grid-cols-3 gap-4 auto-rows-[280px]">
          <Link
            to="/products"
            aria-label="Fog Bandit 320 Ceiling Mount"
            className="md:col-start-1 md:row-start-1 md:row-span-2 h-full min-h-0 rounded-2xl relative overflow-hidden block"
          >
            <img src={homeTallRight} alt="" className={productShotClass} loading="lazy" />
            <span className="sr-only">Fog Bandit 320 Ceiling Mount</span>
          </Link>

          <Link to="/products" className="md:col-start-2 md:row-start-1 h-full min-h-0 rounded-2xl relative overflow-hidden block">
            <img src={productPlt240PerspectiveA} alt="Fog Bandit 240 DB Narrow Nozzle" className={productShotClass} loading="lazy" />
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
              <h3 className="text-primary-foreground font-heading font-bold text-base leading-tight max-w-[180px]">Fog Bandit 240 DB Narrow Nozzle</h3>
              <span aria-label="View product" className="w-10 h-9 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 ml-2">
                <ArrowRight className="w-3.5 h-3.5 text-primary-foreground" />
              </span>
            </div>
          </Link>

          <Link to="/products" className="md:col-start-2 md:row-start-2 h-full min-h-0 rounded-2xl relative overflow-hidden block">
            <img src={productPlt240Frontal} alt="Fog Bandit 240 DB Extended Nozzle" className={productShotClass} loading="lazy" />
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
              <h3 className="text-primary-foreground font-heading font-bold text-base leading-tight max-w-[180px]">Fog Bandit 240 DB Extended Nozzle</h3>
              <span aria-label="View product" className="w-10 h-9 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center shrink-0 ml-2">
                <ArrowRight className="w-3.5 h-3.5 text-primary-foreground" />
              </span>
            </div>
          </Link>

          <Link
            to="/products"
            aria-label="Fog Bandit 320 Vertical Mount"
            className="md:col-start-3 md:row-start-1 md:row-span-2 h-full min-h-0 rounded-2xl relative overflow-hidden block"
          >
            <img src={homeTallLeft} alt="" className={productShotClass} loading="lazy" />
            <span className="sr-only">Fog Bandit 320 Vertical Mount</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
