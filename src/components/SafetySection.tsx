import iconTick from "@/assets/icon-tick.svg";
import iconPeople from "@/assets/icon-safety-people.svg";
import iconElectronics from "@/assets/icon-safety-electronics.svg";
import iconFood from "@/assets/icon-safety-food.svg";
import iconResidue from "@/assets/icon-safety-residue.svg";

const checkItems = [
  "Leaves no residue after ventilation",
  "Safe for sensitive electronics and equipment",
  "Compliant with strict EU safety standards (EN50131-8)",
  "Certified safe for people, animals, and goods",
];

const safetyFeatures = [
  { icon: iconPeople, label: "Safe for people" },
  { icon: iconElectronics, label: "Safe for electronics" },
  { icon: iconFood, label: "Food-grade formulation" },
  { icon: iconResidue, label: "Residue-free protection" },
];

const SafetySection = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="section-heading mb-3 md:mb-4">
              Engineered to be powerful, and completely safe
            </h2>
            <p className="font-dm-sans text-[14px] md:text-[20px] font-medium mb-6 md:mb-8 leading-relaxed" style={{ color: "#475569" }}>
              Fog Bandit uses a safe, non-toxic fog made of food-grade materials for strong intrusion prevention.
            </p>
            <div className="space-y-3 md:space-y-4">
              {checkItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img src={iconTick} alt="" className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="font-dm-sans text-[14px] md:text-[16px]" style={{ color: "#475569" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {safetyFeatures.map((feat, i) => (
              <div key={i} className="bg-muted rounded-xl p-5 flex flex-col items-center text-center gap-2.5">
                <img src={feat.icon} alt="" className="w-12 h-12" />
                <span className="text-[13px] font-medium" style={{ color: "#000000" }}>{feat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
