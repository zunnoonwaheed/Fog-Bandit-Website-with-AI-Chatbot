
import Navbar from "@/components/Navbar";
import BlogHero from "@/components/blog/BlogHero";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogTopics from "@/components/blog/BlogTopics";
import BlogLatest from "@/components/blog/BlogLatest";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] relative">
      <Navbar activeLink="Blog" />
      <BlogHero />
      <BlogFeatured />
      <BlogTopics />
      <BlogLatest />
      <BlogNewsletter />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Blog;
