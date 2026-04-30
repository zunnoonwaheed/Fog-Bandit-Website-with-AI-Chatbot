import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="pt-[140px] pb-10 lg:pt-[210px] lg:pb-[60px] text-center">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground leading-tight mb-3 md:mb-4">
          Protecting ANZ Businesses for <span className="text-primary">Over 20 Years</span>
        </h1>
        <p className="font-dm-sans text-[14px] md:text-[18px] font-medium text-muted-foreground leading-relaxed mb-7 md:mb-8 max-w-3xl mx-auto">
          Fog Bandit ANZ is built on one principle — security should stop crime, not just record it. For over two decades, we've helped businesses and homeowners move from passive systems to real protection.
        </p>
        <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 md:px-8 h-10 md:h-11 text-[13px] md:text-[14px] font-semibold gap-2">
            <Link to="/products">
              Explore The Products <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button className="bg-[#021373] text-white hover:bg-[#021373]/90 rounded-lg px-6 md:px-8 h-10 md:h-11 text-[13px] md:text-[14px] font-semibold gap-2">
            View Real Installations <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
