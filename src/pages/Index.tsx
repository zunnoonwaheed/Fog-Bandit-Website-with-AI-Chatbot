import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProductsSection from "@/components/ProductsSection";
import PlugNSecureSection from "@/components/PlugNSecureSection";
import EnvironmentsSection from "@/components/EnvironmentsSection";
import SafetyStatsSection from "@/components/SafetyStatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinanceSection from "@/components/FinanceSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <HowItWorksSection />
      <ProductsSection />
      <PlugNSecureSection />
      <EnvironmentsSection />
      <ComparisonSection />
      <SafetyStatsSection />
      <TestimonialsSection />
      <FinanceSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
