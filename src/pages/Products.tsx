
import Navbar from "@/components/Navbar";
import ProductsHero from "@/components/products/ProductsHero";
import ProductGrid from "@/components/products/ProductGrid";
import PanicIntegration from "@/components/products/PanicIntegration";
import TechnicalComparison from "@/components/products/TechnicalComparison";
import ActiveDefense from "@/components/products/ActiveDefense";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] relative overflow-x-hidden">
      <Navbar activeLink="Products" />
      <ProductsHero />
      <ProductGrid />
      <PanicIntegration />
      <TechnicalComparison />
      <ActiveDefense />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Products;
