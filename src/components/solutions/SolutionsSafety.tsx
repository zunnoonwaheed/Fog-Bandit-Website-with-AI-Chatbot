import { Button } from "@/components/ui/button";
import { ArrowRight, PawPrint, Droplets, Leaf } from "lucide-react";
import safetyImg from "@/assets/about-fog-room.png";

const safetyPoints = [
  {
    icon: PawPrint,
    title: "Pet-safe diffusion",
    desc: "Safe for sensitive eyes and skin, including children and small animals.",
  },
  {
    icon: Droplets,
    title: "Residue-free formula",
    desc: "Leaves no film on furniture, electronics, or fabrics after activation.",
  },
  {
    icon: Leaf,
    title: "Environmentally responsible",
    desc: "Biodegradable components break down naturally after deployment.",
  },
];

const SolutionsSafety = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center max-w-[1200px] mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src={safetyImg}
              alt="Safe security fog filling a living room"
              className="w-full h-auto object-cover aspect-square"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-3 leading-snug">
              <span className="md:hidden">Safe for your family. Safe for your home.</span>
              <span className="hidden md:inline">Safe for your family. Safe for your home.</span>
            </h2>
            <p className="font-dm-sans text-[14px] md:text-[16px] font-medium text-muted-foreground leading-relaxed mb-5 md:mb-7">
              <span className="md:hidden">Fog Bandit provides safe, residue-free fog to protect your home.</span>
              <span className="hidden md:inline">Fog Bandit uses a clean, residue-free security fog designed to protect your home without harming people, pets, or belongings.</span>
            </p>

            <div className="space-y-4 md:space-y-5 mb-6 md:mb-7">
              {safetyPoints.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <p.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter text-[14px] md:text-[15px] font-bold text-foreground leading-snug">{p.title}</h3>
                    <p className="font-dm-sans text-[13px] md:text-[14px] text-muted-foreground leading-snug mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 h-10 md:h-11 text-[13px] md:text-[14px] font-semibold gap-2">
              View safety certifications <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSafety;
