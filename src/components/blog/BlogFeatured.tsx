import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import featuredImg from "@/assets/blog-featured.png";

const BlogFeatured = () => {
  return (
    <section className="py-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="bg-background border border-border rounded-2xl overflow-hidden max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img
                src={featuredImg}
                alt="Security fog filling a showroom"
                className="w-full h-full object-cover aspect-[4/3] md:aspect-auto md:min-h-[380px]"
                loading="eager"
              />
            </div>
            <div className="w-full md:w-1/2 p-5 md:p-10 flex flex-col justify-center">
              <span className="text-[hsl(225,65%,22%)] text-[13px] font-semibold mb-2">Security Awareness</span>
              <h2 className="font-inter text-[18px] md:text-[24px] font-bold text-foreground leading-snug mb-3">
                Traditional alarm systems can't stop modern theft.
              </h2>
              <p className="font-dm-sans text-muted-foreground text-[13px] md:text-[14px] leading-relaxed mb-4">
                Alarms tell you something happened. Modern security stops it from happening at all. Here's what today's risks look like, and how businesses across ANZ are responding.
              </p>
              <div className="flex items-center gap-4 text-muted-foreground text-[12px] mb-5">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 8 min read • March 18, 2025</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> March 18, 2025</span>
              </div>
              <div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5 h-10 text-[13px] font-semibold gap-1.5">
                  Read the full guide <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeatured;
