import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import sarahCardBg from "@/assets/testimonial-sarah-bg.jpg";
import InitialsAvatar from "@/components/InitialsAvatar";

const imageTestimonials = [
  {
    img: testimonial1,
    name: "Hasan Shahzad",
    role: "Google Review",
    quote: "Excellent product and great service team",
    aspect: "aspect-[685/363]",
    metadata: "Local Guide · 37 reviews · 7 photos · 4 days ago",
  },
  {
    img: testimonial2,
    name: "Muhammad Sibtain",
    role: "Google Review",
    quote: "Best fog devices ever",
    aspect: "aspect-[535/363]",
    metadata: "16 reviews · 1 photo · 2 years ago",
  },
];

const CaseStudiesTestimonials = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2 leading-snug">
            <span className="text-primary">Trusted by customers</span> that can't afford downtime
          </h2>
          <p className="font-dm-sans text-muted-foreground text-[14px] md:text-[18px] font-medium leading-relaxed">
            Hear directly from security leaders and operators using Fog Bandit every day.
          </p>
        </div>

        {/* Image testimonials - 2 cols on desktop; mobile shows only the first */}
        <div className="grid grid-cols-1 md:grid-cols-[685fr_535fr] gap-5 mb-5">
          {imageTestimonials.map((t, i) => (
            <div key={i} className={`${i === 1 ? "hidden md:block" : ""} rounded-xl overflow-hidden border border-border bg-card`}>
              <img
                src={t.img}
                alt={t.name}
                className={`w-full ${t.aspect} object-cover`}
                loading="lazy"
              />
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <InitialsAvatar name={t.name} size="md" />
                  <div>
                    <p className="font-semibold text-foreground text-[13px]">{t.name}</p>
                    {t.role && <p className="text-muted-foreground text-[11px]">{t.role}</p>}
                    {t.metadata && <p className="text-muted-foreground/70 text-[10px] mt-0.5">{t.metadata}</p>}
                  </div>
                </div>
                <p className="text-muted-foreground text-[12px] md:text-[13px] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: Kamlesh text | Sukoon image card | Frank text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Left text testimonial */}
          <div className="border border-border rounded-xl p-5 flex flex-col bg-card">
            <div className="flex items-center gap-3 mb-3">
              <InitialsAvatar name="Malik" size="md" />
              <div>
                <p className="font-semibold text-foreground text-[13px]">Malik</p>
                <p className="text-muted-foreground text-[11px]">Google Review</p>
                <p className="text-muted-foreground/70 text-[10px] mt-0.5">6 reviews · 2 years ago</p>
              </div>
            </div>
            <p className="text-muted-foreground text-[12px] md:text-[13px] leading-relaxed italic flex-1 mt-3">
              "Unique and amazing devices to stop intruders"
            </p>
          </div>

          {/* Middle - Francis image background card with frosted overlay - desktop only */}
          <div className="hidden md:flex rounded-xl overflow-hidden relative min-h-[303px] items-end p-6">
            <img
              src={sarahCardBg}
              alt="Fog deployment"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="relative w-full rounded-xl bg-white/30 backdrop-blur-md p-4 text-white">
              <div className="flex items-center gap-3 mb-2">
                <InitialsAvatar name="Francis King" size="md" />
                <div>
                  <p className="font-semibold text-[13px]">Francis King</p>
                  <p className="text-white/80 text-[11px]">Google Review</p>
                  <p className="text-white/70 text-[10px] mt-0.5">
                    Local Guide · 52 reviews · 42 photos · 2 years ago
                  </p>
                </div>
              </div>
              <p className="text-[12px] md:text-[13px] leading-relaxed italic">
                "It just works."
              </p>
            </div>
          </div>

          {/* Right text testimonial - desktop only */}
          <div className="hidden md:flex border border-border rounded-xl p-5 flex-col bg-card">
            <div className="flex items-center gap-3 mb-3">
              <InitialsAvatar name="H A" size="md" />
              <div>
                <p className="font-semibold text-foreground text-[13px]">H A</p>
                <p className="text-muted-foreground text-[11px]">Google Review</p>
                <p className="text-muted-foreground/70 text-[10px] mt-0.5">1 review · 2 years ago</p>
              </div>
            </div>
            <p className="text-muted-foreground text-[12px] md:text-[13px] leading-relaxed italic flex-1 mt-3">
              "Great pricing, innovative and functional products range, been using for over 5 years now and everything still working flawlessly. Great after sales support too."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTestimonials;
