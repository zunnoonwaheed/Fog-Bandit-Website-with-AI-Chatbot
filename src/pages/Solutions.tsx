import Navbar from "@/components/Navbar";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsProtect from "@/components/solutions/SolutionsProtect";
import SolutionsSafety from "@/components/solutions/SolutionsSafety";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] relative">
      <Navbar activeLink="Solutions" mobileMode="cta" />
      <SolutionsHero />
      <SolutionsProtect />
      <SolutionsSafety />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Solutions;
