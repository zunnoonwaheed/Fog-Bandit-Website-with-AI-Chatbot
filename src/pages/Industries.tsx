import Navbar from "@/components/Navbar";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesThreeSecond from "@/components/industries/IndustriesThreeSecond";
import IndustriesBreakIn from "@/components/industries/IndustriesBreakIn";
import FinanceSection from "@/components/FinanceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Industries = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] relative">
      <Navbar activeLink="Industries" mobileMode="cta" />
      <IndustriesHero />
      <IndustriesThreeSecond />
      <IndustriesBreakIn />
      <FinanceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Industries;
