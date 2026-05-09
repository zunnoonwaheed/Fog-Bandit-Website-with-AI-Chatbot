import { Button } from "@/components/ui/button";
import { ArrowRight, PawPrint, Droplets, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import safetyImg from "@/assets/security-fog-room.png";

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

const IndustriesSafety = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="rounded-xl overflow-hidden">
            <img
              src={safetyImg}
              alt="Safe security fog filling a living room"
              className="w-full h-auto object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-3 leading-snug">
              Safe for your family. Safe for your home.
            </h2>
            <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground leading-relaxed mb-5 md:mb-6">
              Fog Bandit uses a clean, residue-free security fog designed to protect your home without harming people, pets, or belongings.
            </p>

            <div className="space-y-4 mb-6">
              {safetyPoints.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <p.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter text-[14px] font-semibold text-foreground leading-snug">{p.title}</h3>
                    <p className="font-dm-sans text-[12px] md:text-[13px] text-muted-foreground leading-snug mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 h-10 text-[13px] font-semibold gap-2">
              <Link to="/how-it-works">
                View safety certifications <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSafety;
