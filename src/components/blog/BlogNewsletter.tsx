import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import bgImg from "@/assets/blog-newsletter-bg.png";

const BlogNewsletter = () => {
  return (
    <section className="pt-8 md:pt-12 pb-[120px]">
      <div className="container mx-auto px-4">
        <div
          className="relative rounded-xl overflow-hidden bg-cover bg-center max-w-[1240px] mx-auto md:h-[401px]"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative z-10 py-12 md:py-0 md:h-full md:flex md:flex-col md:justify-center px-6 md:px-16 text-center">
            <h2 className="text-[18px] md:text-[22px] font-bold text-white mb-2 leading-snug">
              Stay ahead of security threats
            </h2>
            <p className="text-white/80 text-[13px] md:text-[14px] leading-relaxed mb-5">
              Get practical security advice, prevention strategies, and product insights delivered occasionally — only when they matter.
            </p>
            <div className="flex gap-3 w-full mx-auto mb-3">
              <Input
                placeholder="Enter your business email"
                className="rounded-lg h-11 text-[13px] bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-1 px-4"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 h-11 text-[13px] font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-white/60 text-[11px] italic">
              Join 3,000+ security professionals across ANZ. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;
