import Navbar from "@/components/Navbar";
import PartnersHero from "@/components/partners/PartnersHero";
import PartnersMarquee from "@/components/partners/PartnersMarquee";
import PartnersDirectory from "@/components/partners/PartnersDirectory";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const StrategicPartners = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] relative">
      <Navbar activeLink="Partners" mobileMode="cta" />
      <PartnersHero />
      <PartnersMarquee />
      <PartnersDirectory />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default StrategicPartners;
