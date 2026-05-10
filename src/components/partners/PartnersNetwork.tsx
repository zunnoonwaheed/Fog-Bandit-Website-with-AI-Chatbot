import teamPhoto from "@/assets/industries-team.png";
import { ShieldCheck, Award, MapPin } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, label: "Certified & Trained Installers" },
  { icon: Award, label: "Nationwide Service Coverage" },
  { icon: MapPin, label: "Local Expertise & Support" },
];

const PartnersNetwork = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-background border border-border rounded-2xl p-5 md:p-8 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h2 className="font-inter text-[20px] md:text-[28px] font-bold text-foreground mb-3 md:mb-4 leading-snug">
                  A Network Built on Trust and Excellence
                </h2>
                <p className="font-dm-sans text-[14px] md:text-[16px] text-muted-foreground leading-relaxed mb-5 md:mb-6">
                  Our strategic partners are carefully selected based on their technical expertise, commitment to quality, and proven track record in security installations. Each partner undergoes comprehensive training on Fog Bandit systems to ensure perfect installations every time.
                </p>
                <p className="font-dm-sans text-[14px] md:text-[16px] text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  Whether you're in a major city or regional area, our partner network provides local support with national standards of excellence.
                </p>

                <div className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-muted rounded-lg px-4 py-3"
                    >
                      <benefit.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-dm-sans text-[13px] md:text-[14px] text-foreground font-medium">
                        {benefit.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={teamPhoto}
                  alt="Strategic partner network"
                  className="rounded-xl object-cover w-full max-w-[500px] h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersNetwork;
