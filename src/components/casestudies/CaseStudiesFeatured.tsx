import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import featuredImg from "@/assets/casestudy-featured.jpg";
import avatarHp from "@/assets/avatar-hp.png";

const CaseStudiesFeatured = () => {
  return (
    <section className="pb-8 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-0 border border-border rounded-xl overflow-hidden md:items-stretch">
          {/* Image */}
          <div className="w-full md:w-[45%] md:self-stretch relative md:min-h-full">
            <img
              src={featuredImg}
              alt="Electronics retailer fog deployment"
              className="w-full aspect-[545/714] md:aspect-auto md:absolute md:inset-0 md:h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-[55%] p-5 md:p-8 flex flex-col justify-center">
            <span className="text-primary text-[13px] font-semibold mb-1.5">Retail & Electronics</span>
            <h2 className="text-[18px] md:text-[22px] font-bold text-foreground leading-snug mb-3">
              How a 12-store electronics retailer stopped theft overnight
            </h2>
            <p className="text-muted-foreground text-[13px] md:text-[14px] leading-relaxed mb-5">
              After repeated after-hours break-ins across multiple locations, this Sydney-based electronics retailer deployed Fog Bandit. Within weeks, attempted theft dropped to zero.
            </p>

            {/* Quote */}
            <div className="bg-muted rounded-lg p-4 mb-5">
              <div className="flex items-center gap-3 mb-2.5">
                <img src={avatarHp} alt="Head of Loss Prevention" className="w-8 h-8 rounded-full object-cover" loading="lazy" />
              </div>
              <p className="text-[12px] md:text-[13px] text-foreground leading-relaxed italic mb-2">
                "The fog deployed before intruders could reach a single shelf. Within seconds they had no visibility, and left empty-handed. We haven't had another successful break-in since."
              </p>
              <p className="text-[12px] font-semibold text-foreground">Head of Loss Prevention, RetailCo Group</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-muted rounded-lg p-4">
                <p className="leading-none mb-1.5">
                  <span className="text-foreground font-bold text-[20px] md:text-[22px]">100</span>
                  <span className="text-primary font-bold text-[20px] md:text-[22px]">%</span>
                </p>
                <p className="text-muted-foreground text-[11px]">Break-ins prevented after deployment</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="leading-none mb-1.5">
                  <span className="text-foreground font-bold text-[20px] md:text-[22px]">0.1</span>
                  <span className="text-primary font-bold text-[20px] md:text-[22px]">s</span>
                </p>
                <p className="text-muted-foreground text-[11px]">Fog deployment response time</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="leading-none mb-1.5">
                  <span className="text-foreground font-bold text-[20px] md:text-[22px]">$240</span>
                  <span className="text-primary font-bold text-[20px] md:text-[22px]">K</span>
                </p>
                <p className="text-muted-foreground text-[11px]">Assets protected</p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <p className="leading-none mb-1.5">
                  <span className="text-foreground font-bold text-[20px] md:text-[22px]">3</span>
                </p>
                <p className="text-muted-foreground text-[11px]">Attempts stopped within first month</p>
              </div>
            </div>

            <div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 h-9 text-[13px] font-semibold gap-1.5">
                Read the full case study <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesFeatured;
