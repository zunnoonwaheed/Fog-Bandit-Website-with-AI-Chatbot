import partnerLook from "@/assets/partner-look.png";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerLogo3 from "@/assets/partner-logo-3.png";
import partnerLogo4 from "@/assets/partner-logo-4.png";
import partnerLogo5 from "@/assets/partner-logo-5.png";

const partnerLogos = [
  { src: partnerLook, alt: "Look Video Surveillance" },
  { src: partnerLogo1, alt: "Partner 1" },
  { src: partnerLogo2, alt: "Partner 2" },
  { src: partnerLogo3, alt: "Partner 3" },
  { src: partnerLogo4, alt: "Partner 4" },
  { src: partnerLogo5, alt: "Partner 5" },
];

const PartnersMarquee = () => {
  return (
    <div className="mt-10 md:mt-14 overflow-hidden relative w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="flex animate-marquee gap-14 items-center w-max">
        {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, i) => (
          <img
            key={`${logo.alt}-${i}`}
            src={logo.src}
            alt={logo.alt}
            className="h-12 md:h-14 w-auto shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersMarquee;
