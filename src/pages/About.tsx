
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTrust from "@/components/about/AboutTrust";
import AboutMission from "@/components/about/AboutMission";
import AboutExperts from "@/components/about/AboutExperts";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] relative">
      <Navbar activeLink="About Us" />
      <AboutHero />
      <AboutStory />
      <AboutTrust />
      <AboutMission />
      <AboutExperts />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;
