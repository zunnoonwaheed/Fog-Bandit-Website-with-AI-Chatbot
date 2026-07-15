import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PartnersHero = () => {
  return (
    <section className="page-hero pt-28 pb-12 md:pt-[140px] lg:pt-[210px] md:pb-14">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <p className="font-dm-sans text-[11px] md:text-[12px] font-semibold text-primary/70 tracking-[0.15em] uppercase mb-3 md:mb-4">
            The world leader in security fogging
          </p>
          <h1 className="font-inter text-[28px] md:text-[36px] lg:text-[42px] font-semibold tracking-[-0.035em] text-foreground leading-[1.12] mb-4 md:mb-5">
            Strategic Partners Across Australia
          </h1>
          <p className="font-dm-sans text-[14px] md:text-[18px] font-medium text-muted-foreground leading-relaxed mb-5 md:mb-7 max-w-3xl mx-auto">
            Certified security experts delivering professional Fog Bandit installations with local expertise and nationwide coverage.
          </p>
          <div className="flex flex-row gap-2 md:gap-3 justify-center items-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 md:px-6 h-10 md:h-11 text-[12px] md:text-[14px] font-semibold gap-1.5 md:gap-2">
              <Link to="/contact">
                Find a Partner Near You <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Link>
            </Button>
            <Button asChild className="bg-[#021373] text-white hover:bg-[#021373]/90 rounded-lg px-4 md:px-6 h-10 md:h-11 text-[12px] md:text-[14px] font-semibold gap-1.5 md:gap-2">
              <Link to="/products">
                View Our Products <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersHero;
