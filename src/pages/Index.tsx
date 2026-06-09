import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductsSection from "@/components/ProductsSection";
import PlugNSecureSection from "@/components/PlugNSecureSection";
import SafetyStatsSection from "@/components/SafetyStatsSection";
import FinanceSection from "@/components/FinanceSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <HowItWorksSection />
      <ProductsSection />
      <PlugNSecureSection />
      <SafetyStatsSection />
      <FinanceSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
