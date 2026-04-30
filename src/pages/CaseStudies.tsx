
import Navbar from "@/components/Navbar";
import CaseStudiesHero from "@/components/casestudies/CaseStudiesHero";
import CaseStudiesFeatured from "@/components/casestudies/CaseStudiesFeatured";
import CaseStudiesTestimonials from "@/components/casestudies/CaseStudiesTestimonials";
import CaseStudiesGrid from "@/components/casestudies/CaseStudiesGrid";
import CaseStudiesResults from "@/components/casestudies/CaseStudiesResults";
import CaseStudiesNewsletter from "@/components/casestudies/CaseStudiesNewsletter";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] relative">
      <Navbar activeLink="Case Studies" />
      <CaseStudiesHero />
      <CaseStudiesFeatured />
      <CaseStudiesTestimonials />
      <CaseStudiesGrid />
      <CaseStudiesResults />
      <CaseStudiesNewsletter />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default CaseStudies;
