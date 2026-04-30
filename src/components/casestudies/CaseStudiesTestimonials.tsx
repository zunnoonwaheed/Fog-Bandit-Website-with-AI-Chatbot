import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Frank",
    role: "Elk Fish Robotics WA",
    quote:
      "The glass got broken outside and the fog bandit stopped the intruders and instantly foiled the robbery. Thank you!",
  },
  {
    name: "Sukoon Bedi",
    role: "IGA Winchelsea VIC",
    quote:
      "The Fog Bandit worked perfectly, and we did not suffer any loss and the shop is back open this morning for usual trading. Without the Fog Bandit the outcome could have been very different. We feel assured by having the Fog Bandit installed and strongly suggest that other IGA supermarkets do the same.",
  },
  {
    name: "Kamlesh",
    role: "Sindhiz Group of Companies ACT",
    quote:
      "The Fog Bandit was installed at all our Tobacco Stores in ACT & NSW, to protect against burglaries which were steadily increasing. The Fog Bandit has proved to be an extremely reliable and immensely efficient system in dramatically reducing our problem and foiling robberies without any failure.",
  },
  {
    name: "Jack",
    role: "",
    quote:
      "I sleep well knowing that Fog Bandit is on Guard. I highly recommend Fog Bandit for your business, property or asset !!",
  },
];

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <div className="border border-border rounded-xl p-5 md:p-6 flex flex-col bg-card h-full min-h-[260px]">
    <div className="text-primary text-[28px] leading-none mb-3">❝</div>
    <p className="text-muted-foreground text-[12px] md:text-[13px] leading-relaxed italic flex-1">
      "{t.quote}"
    </p>
    <div className="mt-4 pt-4 border-t border-border">
      <p className="font-semibold text-foreground text-[13px]">{t.name}</p>
      {t.role && <p className="text-muted-foreground text-[11px] mt-0.5">{t.role}</p>}
    </div>
  </div>
);

const CaseStudiesTestimonials = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2 leading-snug">
            <span className="text-primary">Trusted by businesses</span> that can't afford downtime
          </h2>
          <p className="font-dm-sans text-muted-foreground text-[14px] md:text-[18px] font-medium leading-relaxed">
            Hear directly from security leaders and operators using Fog Bandit every day.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {visible.map((t, i) => (
            <TestimonialCard key={`${page}-${i}`} t={t} />
          ))}
        </div>

        {/* Desktop pagination */}
        <div className="hidden md:flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-foreground disabled:opacity-40 hover:bg-muted transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[13px] text-muted-foreground">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-foreground disabled:opacity-40 hover:bg-muted transition"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile horizontal snap scroll */}
        <div className="md:hidden -mx-4">
          <div className="flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 scroll-smooth scrollbar-hide">
            {testimonials.map((t, i) => (
              <div key={i} className="snap-center shrink-0 w-[82%] max-w-[300px]">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTestimonials;
