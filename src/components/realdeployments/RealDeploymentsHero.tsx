import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RealDeploymentsHero = () => {
  return (
    <section className="pt-[120px] pb-8 lg:pt-[160px] md:pb-10 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground leading-tight mb-3 md:mb-4 max-w-4xl mx-auto">
          See Fog Bandit in Action
        </h1>
        <p className="font-dm-sans text-foreground text-[14px] md:text-[18px] font-medium leading-relaxed max-w-3xl mx-auto mb-7 md:mb-8 px-4">
          Watch real deployments, controlled demonstrations, and<br className="hidden md:inline" /> live activations to understand how Fog Bandit protects businesses within seconds.
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center mx-auto px-4 w-full md:w-auto max-w-[540px] md:max-w-none">
          <Link to="/contact" className="w-full md:w-auto">
            <Button
              size="default"
              className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-5 py-2 rounded-md text-[14px] flex items-center justify-center gap-2 w-full md:w-auto"
            >
              Get a Quote
              <span>↓</span>
            </Button>
          </Link>
          <Link to="/products" className="w-full md:w-auto">
            <Button
              size="default"
              variant="outline"
              className="bg-[#021373] hover:bg-[#021373]/90 text-white border-[#021373] font-dm-sans font-semibold px-5 py-2 rounded-md text-[14px] flex items-center justify-center gap-2 w-full md:w-auto"
            >
              Explore Products
              <span>↓</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RealDeploymentsHero;
