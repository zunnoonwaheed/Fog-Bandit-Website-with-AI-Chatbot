import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutJewelry from "@/assets/about-trust-image.svg";
import iconTech from "@/assets/icon-tech.svg";
import iconGlobal from "@/assets/icon-global.svg";
import iconCertified from "@/assets/icon-certified.svg";

const features = [
  {
    icon: iconTech,
    title: "Cutting-Edge Technology",
    desc: "Our systems are designed with precision-engineered components to deliver consistent, high-speed fog deployment when it matters most.",
  },
  {
    icon: iconGlobal,
    title: "Global Presence",
    desc: "From retail and logistics to critical infrastructure, our solutions are trusted in environments where failure isn't an option.",
  },
  {
    icon: iconCertified,
    title: "Certified Technicians & Trade Partners",
    desc: "Our trained professionals ensure every system is installed, tested, and optimised for real-world performance.",
  },
];

const AboutTrust = () => {
  return (
    <section className="pb-6 md:pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div className="flex justify-center md:block">
            <img
              src={aboutJewelry}
              alt="Fog Bandit protecting a jewelry store"
              className="rounded-2xl object-cover w-[366px] h-[215px] md:w-[604px] md:h-[745px] max-w-full"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2 leading-snug">
              Why businesses trust Fog Bandit ANZ
            </h2>
            <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground mb-4 md:mb-5">
              More than a product — a proven security partner.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 h-10 text-[13px] font-semibold gap-2 mb-5 md:mb-6">
              <Link to="/case-studies">
                View case studies <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>

            <div className="space-y-3 md:space-y-4">
              {features.map((feat, i) => (
                <div key={i} className="border border-border rounded-xl p-4 md:p-5 bg-background">
                  <img src={feat.icon} alt="" className="w-9 h-9 mb-3" />
                  <h3 className="font-inter font-semibold text-foreground text-[15px] md:text-[16px] mb-1">{feat.title}</h3>
                  <p className="font-dm-sans text-muted-foreground text-[13px] md:text-[14px] leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrust;
