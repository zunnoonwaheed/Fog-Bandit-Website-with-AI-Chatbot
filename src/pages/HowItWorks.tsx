import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

import DetectionSection from "@/components/DetectionSection";
import StagesSection from "@/components/StagesSection";
import SafetySection from "@/components/SafetySection";
import IntegrationSection from "@/components/IntegrationSection";
import FinanceSection from "@/components/FinanceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar activeLink="how it works" />

      {/* Page hero */}
      <section className="relative pt-[140px] lg:pt-[210px] pb-10 lg:pb-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-heading">
            How Fog Bandit stops intruders in seconds
          </h1>
          <p className="section-subtext mt-4 max-w-3xl mx-auto">
            Fog Bandit transforms your security system from passive detection into active prevention,
            deploying dense fog instantly to eliminate visibility and stop threats before they escalate.
          </p>
          <div className="mt-8 flex flex-row flex-nowrap justify-center gap-3">
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:opacity-90 transition-all whitespace-nowrap"
            >
              Watch a real deployment <ArrowDown className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#021373] hover:bg-[#021373]/90 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all whitespace-nowrap"
            >
              Get a quote <ArrowDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div id="detection">
        <DetectionSection />
      </div>
      <StagesSection />
      
      <SafetySection />
      <IntegrationSection />
      <FinanceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HowItWorks;
