import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Products from "./pages/Products.tsx";
import Solutions from "./pages/Solutions.tsx";
import Contact from "./pages/Contact.tsx";
import Industries from "./pages/Industries.tsx";
import Blog from "./pages/Blog.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import NotFound from "./pages/NotFound.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import Financing from "./pages/Financing.tsx";
import ChatWidget from "./components/ChatWidget.tsx";
import { ChatWidgetProvider } from "./context/ChatWidgetContext.tsx";
import ScrollAnimator from "./components/ScrollAnimator.tsx";
import GsapAnimator from "./components/GsapAnimator.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ChatWidgetProvider>
          <ScrollToTop />
          <ScrollAnimator />
          <GsapAnimator />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatWidget />
        </ChatWidgetProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
