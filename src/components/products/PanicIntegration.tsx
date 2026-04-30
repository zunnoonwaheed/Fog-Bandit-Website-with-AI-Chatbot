import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPanicAlert from "@/assets/icon-panic-alert.svg";
import iconStopwatch from "@/assets/icon-stopwatch.svg";

const PanicIntegration = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="bg-background border border-border rounded-2xl p-5 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-6">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5 flex-1">
            <img src={iconPanicAlert} alt="" className="w-12 h-12 md:w-[60px] md:h-[60px] flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-inter text-[16px] md:text-[18px] font-bold text-foreground mb-2">
                Immediate Tactical Defense: Panic Integration
              </h3>
              <p className="font-dm-sans text-[13px] md:text-[14px] text-muted-foreground leading-relaxed max-w-2xl">
                Fog Bandit devices are not just for after-hours. Integrated with discreet panic buttons, our systems provide immediate defense during trading hours, creating an impenetrable visual barrier in seconds to protect your staff and assets from aggressive robberies.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <img src={iconStopwatch} alt="" className="h-4 w-auto" />
                <span className="font-dm-sans text-[12px] md:text-[13px] font-semibold text-accent">Certified 0.1s Response Time</span>
              </div>
            </div>
          </div>
          <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-lg px-5 md:px-6 h-10 md:h-11 text-[12px] md:text-[13px] font-semibold whitespace-nowrap flex-shrink-0 w-full md:w-auto self-stretch md:self-auto">
            <Link to="/case-studies">
              View Case Studies
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PanicIntegration;
