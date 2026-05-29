import partnerLook from "@/assets/partner-look.png";
import partnerLogo1 from "@/assets/partner-logo-1.png";
import partnerLogo2 from "@/assets/partner-logo-2.png";
import partnerLogo3 from "@/assets/partner-logo-3.png";
import partnerLogo4 from "@/assets/partner-logo-4.png";
import partnerLogo5 from "@/assets/partner-logo-5.png";
import partnerSentricom from "@/assets/partner-sentricom.png";
import partnerProtection1 from "@/assets/partner-protection1.png";
import partnerHitech from "@/assets/partner-hitech.png";
import partnerGsec from "@/assets/partner-gsec.png";
import partnerAsc from "@/assets/partner-asc.png";
import partnerSafeguards from "@/assets/partner-safeguards.png";
import partnerElectra from "@/assets/partner-electra.png";

const partnerLogos = [
  { src: partnerLook, alt: "Look Video Surveillance" },
  { src: partnerLogo1, alt: "Partner 1" },
  { src: partnerLogo2, alt: "Partner 2" },
  { src: partnerLogo3, alt: "Partner 3" },
  { src: partnerLogo4, alt: "Partner 4" },
  { src: partnerLogo5, alt: "Partner 5" },
  { src: partnerSentricom, alt: "Sentricom" },
  { src: partnerProtection1, alt: "Protection1 Security" },
  { src: partnerHitech, alt: "Hitech Security" },
  { src: partnerGsec, alt: "G-sec" },
  { src: partnerAsc, alt: "Asset Security Concepts" },
  { src: partnerSafeguards, alt: "Safeguards Security Services" },
  { src: partnerElectra, alt: "Electra Security" },
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
