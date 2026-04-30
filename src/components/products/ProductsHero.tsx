import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/products-hero-bg.mp4";

const ProductsHero = () => {
  return (
    <section className="pt-[120px] pb-10 lg:pt-[160px] lg:pb-[60px]">
      <div className="container mx-auto px-4">
        <div
          className="relative mx-auto overflow-hidden rounded-2xl"
          style={{ maxWidth: "1240px" }}
        >
          {/* Frame sizing: mobile 366x292, desktop 1240x550 */}
          <div className="relative w-full" style={{ aspectRatio: "1240 / 550" }}>
            <div className="hidden md:block absolute inset-0">
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="md:hidden absolute inset-0">
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ aspectRatio: "366 / 292" }}
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 md:px-8">
              <div className="max-w-3xl">
                <h1 className="font-inter text-[20px] md:text-[36px] font-semibold text-white leading-tight mb-3 md:mb-4">
                  Stop Intruders in Their Tracks.
                </h1>
                <p className="font-dm-sans text-[13px] md:text-[16px] font-medium text-white/85 leading-relaxed mb-5 md:mb-7 max-w-2xl mx-auto">
                  <span className="md:hidden">Fog Bandit blocks vision and prevents theft. Explore our certified security solutions.</span>
                  <span className="hidden md:inline">Fog Bandit technology creates a curtain of impenetrable fog in seconds, rendering theft impossible by removing the intruder's vision. Explore our curated range of ANZ-certified security solutions.</span>
                </p>
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 md:gap-4">
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 md:px-7 h-11 text-[13px] md:text-[14px] font-semibold gap-2 w-full md:w-auto">
                    <Link to="/case-studies">
                      View Real Installations <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild className="bg-[#021373] text-white hover:bg-[#021373]/90 rounded-lg px-5 md:px-7 h-11 text-[13px] md:text-[14px] font-semibold gap-2 w-full md:w-auto">
                    <Link to="/contact">
                      Talk to Our Team <ArrowRight className="h-4 w-4" />
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
