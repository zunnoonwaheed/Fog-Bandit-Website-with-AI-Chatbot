import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsHero = () => {
  return (
    <section className="pt-[140px] pb-10 lg:pt-[210px] lg:pb-[60px] text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground leading-tight mb-3 md:mb-4">
          <span className="md:hidden">Stop Intruders in <span className="text-primary">Their Tracks.</span></span>
          <span className="hidden md:inline">Stop Intruders in Their Tracks.</span>
        </h1>
        <p className="font-dm-sans text-[14px] md:text-[18px] font-medium text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto">
          <span className="md:hidden">Fog Bandit blocks vision and prevents theft. Explore our certified security solutions.</span>
          <span className="hidden md:inline">Fog Bandit technology creates a curtain of impenetrable fog in seconds, rendering theft impossible by removing the intruder's vision. Explore our curated range of ANZ-certified security solutions.</span>
        </p>
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 md:gap-4">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 md:px-7 h-11 md:h-11 text-[13px] md:text-[14px] font-semibold gap-2 w-full md:w-auto">
            <Link to="/case-studies">
              View Real Installations <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="bg-[#021373] text-white hover:bg-[#021373]/90 rounded-lg px-5 md:px-7 h-11 md:h-11 text-[13px] md:text-[14px] font-semibold gap-2 w-full md:w-auto">
            <Link to="/contact">
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
