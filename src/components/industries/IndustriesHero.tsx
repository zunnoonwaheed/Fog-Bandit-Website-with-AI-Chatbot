import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IndustriesHero = () => {
  return (
    <section className="pt-28 pb-10 md:pt-[140px] lg:pt-[210px] md:pb-[80px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground leading-tight mb-3 md:mb-4">
            Protect your revenue, not just your premises
          </h1>
          <p className="font-dm-sans text-[14px] md:text-[18px] font-medium text-muted-foreground leading-relaxed mb-5 md:mb-6 mx-auto">
            Break-ins don't just cost inventory — they disrupt operations, damage trust, and impact your bottom line. Fog Bandit stops intrusions instantly, before any loss occurs.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 md:px-6 h-10 md:h-11 text-[13px] md:text-[14px] font-semibold gap-2">
            <Link to="/contact">
              Request a security audit <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;
