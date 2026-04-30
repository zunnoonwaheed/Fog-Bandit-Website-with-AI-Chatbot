import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import iconActivation from "@/assets/icon-stage-activation.svg";
import iconDeployment from "@/assets/icon-stage-deployment.svg";
import iconVisibility from "@/assets/icon-stage-visibility.svg";
import stagesFogBikes from "@/assets/stages-fog-bikes.png";
import stagesFogMobile from "@/assets/stages-fog-mobile.svg";

const stages = [
  {
    icon: iconActivation,
    title: "Stage 1: Instant Activation",
    description:
      "The system receives the alert and immediately begins heating and preparing fog deployment.",
  },
  {
    icon: iconDeployment,
    title: "Stage 2: Rapid Fog Deployment",
    description:
      "High-density fog is released at speed, expanding across the space within seconds.",
  },
  {
    icon: iconVisibility,
    title: "Stage 3: Total Visibility Loss",
    description:
      "The environment becomes fully obscured, preventing intruders from locating assets or navigating the space.",
  },
];

const StagesSection = () => {
  return (
    <section className="py-14 md:pt-0 md:pb-[120px]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-heading mb-3 md:mb-4">
          From Detection To Total Control In Seconds
        </h2>
        <p className="section-subtext mb-7 md:mb-8">
          Once triggered, Fog Bandit rapidly fills the space with dense security fog, removing visibility and shutting down movement before theft can occur.
        </p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 md:px-8 h-11 md:h-12 text-[13px] md:text-[15px] font-semibold gap-2 mb-10 md:mb-12">
          <Link to="/case-studies">
            View real case studies <ArrowDown className="h-4 w-4" />
          </Link>
        </Button>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
          {stages.map((stage, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-5 md:p-6 text-left border border-border"
            >
              <img src={stage.icon} alt="" className="w-11 h-11 md:w-12 md:h-12 mb-4 md:mb-5" />
              <h3 className="font-bold mb-1.5 md:mb-2 text-[14px] md:text-[17px]" style={{ color: "#000000" }}>
                {stage.title}
              </h3>
              <p className="text-[12px] md:text-[15px] leading-relaxed" style={{ color: "#475569" }}>
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fog scene image - portrait (with baked overlays) on mobile, landscape on desktop */}
        <div className="relative mt-6 md:mt-8 max-w-6xl mx-auto rounded-2xl overflow-hidden">
          <img
            src={stagesFogMobile}
            alt="Dense fog filling a retail space with Zero Visibility and Sensory Disorientation"
            className="block md:hidden w-full h-auto"
            loading="lazy"
          />
          <img
            src={stagesFogBikes}
            alt="Dense fog filling a retail space"
            className="hidden md:block w-full h-[520px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default StagesSection;
