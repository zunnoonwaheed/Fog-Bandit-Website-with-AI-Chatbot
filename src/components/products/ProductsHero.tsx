import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/products-hero-bg.mp4";

const ProductsHero = () => {
  return (
    <section className="pt-[120px] pb-10 lg:pt-[160px] lg:pb-[60px]">
      <div className="container mx-auto px-4">
        <div
          className="relative mx-auto overflow-hidden rounded-2xl w-full"
        >
          {/* Frame sizing: mobile 366x511, desktop full width 550h */}
          <div className="relative w-full aspect-[366/511] md:aspect-[1240/550]">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-8">
              <div className="max-w-3xl">
                <h1 className="font-inter text-[22px] md:text-[36px] font-semibold text-white leading-tight mb-3 md:mb-4">
                  Stop Intruders in Their Tracks.
                </h1>
                <p className="font-dm-sans text-[13px] md:text-[16px] font-medium text-white/85 leading-relaxed mb-5 md:mb-7 max-w-2xl mx-auto">
                  <span className="md:hidden">Fog Bandit blocks vision and prevents theft. Explore our certified security solutions.</span>
                  <span className="hidden md:inline">Fog Bandit technology creates a curtain of impenetrable fog in seconds, rendering theft impossible by removing the intruder's vision. Explore our curated range of ANZ-certified security solutions.</span>
                </p>
                <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-3 md:px-7 h-10 md:h-11 text-[12px] md:text-[14px] font-semibold gap-1.5 md:gap-2">
                    <Link to="/case-studies">
                      View Real Installations <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </Link>
                  </Button>
                  <Button asChild className="bg-[#021373] text-white hover:bg-[#021373]/90 rounded-lg px-3 md:px-7 h-10 md:h-11 text-[12px] md:text-[14px] font-semibold gap-1.5 md:gap-2">
                    <Link to="/contact">
                      Talk to Our Team <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
