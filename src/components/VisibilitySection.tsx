import fogImageDesktop from "@/assets/Room filled with dense fog (1).png";
import fogImageMobile from "@/assets/Room filled with dense fog (2).svg";

const VisibilitySection = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <img
          src={fogImageMobile}
          alt="Retail store protected by fog with Zero Visibility and Sensory Disorientation features"
          className="block md:hidden w-full h-auto rounded-2xl"
          loading="lazy"
        />
        <img
          src={fogImageDesktop}
          alt="Retail store protected by fog with Zero Visibility and Sensory Disorientation features"
          className="hidden md:block w-full h-auto rounded-2xl"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default VisibilitySection;
