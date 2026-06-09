import Navbar from "@/components/Navbar";
import RealDeploymentsHero from "@/components/realdeployments/RealDeploymentsHero";
import VideoGrid from "@/components/realdeployments/VideoGrid";
import DemoSection from "@/components/realdeployments/DemoSection";
import PerformanceTests from "@/components/realdeployments/PerformanceTests";
import TradingHoursProtection from "@/components/realdeployments/TradingHoursProtection";
import ProtectionEnvironments from "@/components/realdeployments/ProtectionEnvironments";
import RealDeploymentsTestimonials from "@/components/realdeployments/RealDeploymentsTestimonials";
import CTASection from "@/components/realdeployments/CTASection";
import ComparisonSection from "@/components/ComparisonSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const RealDeployments = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] relative overflow-x-hidden">
      <Navbar activeLink="Real Deployments" />
      <RealDeploymentsHero />
      <VideoGrid />
      <DemoSection />
      <PerformanceTests />
      <ProtectionEnvironments />
      <TradingHoursProtection />
      <ComparisonSection />
      <RealDeploymentsTestimonials />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default RealDeployments;
