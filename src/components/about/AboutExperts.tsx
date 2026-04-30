import { ShieldCheck, Award, Cpu } from "lucide-react";
import teamPhoto from "@/assets/about-team-photo.png";
import teamPhotoMobile from "@/assets/about-team-photo-mobile.png";

const badges = [
  { icon: ShieldCheck, label: "Environmentally responsible" },
  { icon: Award, label: "Certified & compliant" },
  { icon: Cpu, label: "Industry-leading technology" },
];

const AboutExperts = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-3 leading-snug">
          Built on experience. Delivered by experts.
        </h2>
        <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
          Every system relies on a team dedicated to precision and trust. We collaborate with you from consultation to support, creating security that prevents risk.
        </p>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden -mx-4 overflow-x-auto scrollbar-hide mb-8">
          <div className="flex items-center gap-3 px-4 w-max">
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 border border-border rounded-lg px-4 py-2 text-[12px] text-foreground font-medium whitespace-nowrap shrink-0 bg-background"
              >
                <badge.icon className="h-4 w-4 text-muted-foreground" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: centered wrap */}
        <div className="hidden md:flex items-center justify-center gap-4 flex-wrap mb-8">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border border-border rounded-lg px-4 py-2 text-[13px] text-foreground font-medium"
            >
              <badge.icon className="h-4 w-4 text-muted-foreground" />
              {badge.label}
            </div>
          ))}
        </div>

        <div className="flex justify-center px-2 md:px-0">
          {/* Mobile image */}
          <img
            src={teamPhotoMobile}
            alt="Fog Bandit team at security expo"
            className="md:hidden rounded-2xl object-cover w-[366px] h-[620px] max-w-full"
            loading="lazy"
          />
          {/* Desktop image */}
          <img
            src={teamPhoto}
            alt="Fog Bandit team at security expo"
            className="hidden md:block rounded-2xl object-cover w-full max-w-[1240px] h-[620px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutExperts;
