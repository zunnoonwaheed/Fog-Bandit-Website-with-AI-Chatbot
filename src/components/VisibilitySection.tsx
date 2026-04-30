import storeOverlay from "@/assets/store-overlay.jpg";
import storeOverlayMobile from "@/assets/store-overlay-mobile.svg";

const VisibilitySection = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <img
          src={storeOverlayMobile}
          alt="Retail store protected by fog with Zero Visibility and Sensory Disorientation features"
          className="w-full h-auto rounded-2xl md:hidden"
          loading="lazy"
        />
        <img
          src={storeOverlay}
          alt="Retail store protected by fog with Zero Visibility and Sensory Disorientation features"
          className="w-full h-auto rounded-2xl hidden md:block"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default VisibilitySection;
