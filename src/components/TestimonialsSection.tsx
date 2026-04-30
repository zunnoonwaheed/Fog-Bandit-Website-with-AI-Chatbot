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

const QuoteOpen = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 18V12.6C0 10.92 0.31 9.18 0.93 7.38C1.55 5.58 2.43 3.88 3.57 2.28C4.71 0.68 6.07 -0.7 7.65 -1.86L9.42 0.06C8.16 1.32 7.07 2.7 6.15 4.2C5.23 5.7 4.59 7.32 4.23 9.06H8.4V18H0ZM12.6 18V12.6C12.6 10.92 12.91 9.18 13.53 7.38C14.15 5.58 15.03 3.88 16.17 2.28C17.31 0.68 18.67 -0.7 20.25 -1.86L22.02 0.06C20.76 1.32 19.67 2.7 18.75 4.2C17.83 5.7 17.19 7.32 16.83 9.06H21V18H12.6Z"
      fill="currentColor"
    />
  </svg>
);

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <div className="bg-background border border-border rounded-2xl p-5 md:p-7 shadow-sm flex flex-col h-full min-h-[260px]">
    <QuoteOpen className="text-primary w-[22px] h-[18px] mb-4" />
    <p className="text-muted-foreground text-[13px] md:text-[14px] leading-[1.7] flex-1">{t.quote}</p>
    <div className="mt-5 pt-4 border-t border-border">
      <p className="font-bold text-secondary text-[14px] md:text-[15px]">{t.name}</p>
      {t.role && <p className="text-muted-foreground text-[12px] md:text-[13px] mt-0.5">{t.role}</p>}
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="case-studies" className="pb-14 lg:pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[20px] md:text-[28px] font-bold text-secondary leading-snug">
            Why People Feel <span className="text-[#021373]">More Secure With Fog Bandit?</span>
          </h2>
          <p className="mt-3 text-[13px] md:text-[15px] text-muted-foreground leading-relaxed">
            Real stories from businesses across Australia who trust Fog Bandit to protect what matters most.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="mt-10 hidden md:grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <TestimonialCard key={`${page}-${i}`} t={t} />
          ))}
        </div>

        {/* Desktop pagination */}
        <div className="hidden md:flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-secondary disabled:opacity-40 hover:bg-muted transition"
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
            className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-secondary disabled:opacity-40 hover:bg-muted transition"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile horizontal snap scroll */}
        <div className="mt-8 md:hidden -mx-4">
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

export default TestimonialsSection;
