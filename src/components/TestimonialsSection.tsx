import testimonialJewelry from "@/assets/testimonial-jewelry.png";
import testimonialOffice from "@/assets/testimonial-office.png";
import testimonialWarehouse from "@/assets/testimonial-warehouse.png";
import { cn } from "@/lib/utils";

const BOTTOM_CARD_HEIGHT_PX = 372;

type ImageTestimonial = {
  name: string;
  company: string;
  quote: string;
  image: string;
  imageAlt: string;
};

type QuoteTestimonial = {
  name: string;
  company: string;
  quote: string;
};

const topRow: ImageTestimonial[] = [
  {
    name: "Sue Dixon",
    company: "Harvey and Thompson Pawnbrokers",
    quote:
      "As Pawnbrokers we have a special responsibility to look after valuables belonging to our customers. Often these items are of great sentimental value. The Bandit is a powerful and effective product, which helps to prevent criminality in our stores.",
    image: testimonialJewelry,
    imageAlt: "Fog Bandit protecting a jewelry store display",
  },
  {
    name: "Jamie Kirkland",
    company: "Cutting Jewellers",
    quote:
      "The Fog Bandit worked perfectly! Nobody was hurt, we did not suffer any loss and the shop is back open this morning for Christmas trading. Without the Fog Bandit the outcome could have been very different. We feel assured by having the Fog Bandit installed and strongly suggest that other retail Jewellers do the same.",
    image: testimonialOffice,
    imageAlt: "Fog Bandit deployed in an office environment",
  },
];

const quoteLeft: QuoteTestimonial = {
  name: "Kamlesh",
  company: "Sindhiz Group of Companies ACT",
  quote:
    "The Fog Bandit was installed at all our Tobacco Stores in ACT & NSW, to protect against burglaries which were steadily increasing. The Fog Bandit has proved to be an extremely reliable and immensely efficient system in dramatically reducing our problem and foiling robberies without any failure.",
};

const quoteRight: QuoteTestimonial = {
  name: "Frank",
  company: "Elk Fish Robotics WA",
  quote:
    "The glass got broken outside and the fog bandit stopped the intruders and instantly foiled the robbery. Thank you!",
};

const featuredCenter = {
  name: "Sukoon Bedi",
  company: "IGA Winchelsea VIC",
  quote:
    "The Fog Bandit worked perfectly, and we did not suffer any loss and the shop is back open this morning for usual trading. Without the Fog Bandit the outcome could have been very different. We feel assured by having the Fog Bandit installed and strongly suggest that other IGA supermarkets do the same.",
};

const QuoteMarks = () => (
  <>
    <span
      className="pointer-events-none absolute left-5 top-5 font-serif text-[40px] leading-none text-[#021373] md:left-6 md:top-6"
      aria-hidden
    >
      “
    </span>
    <span
      className="pointer-events-none absolute bottom-5 right-5 font-serif text-[40px] leading-none text-[#021373] md:bottom-6 md:right-6"
      aria-hidden
    >
      ”
    </span>
  </>
);

const ImageTestimonialCard = ({ t }: { t: ImageTestimonial }) => (
  <article className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
    <img src={t.image} alt={t.imageAlt} className="h-[220px] w-full object-cover md:h-[260px]" loading="lazy" />
    <div className="p-5 md:p-6">
      <p className="font-inter text-[15px] font-bold leading-tight text-secondary md:text-[16px]">{t.name}</p>
      <p className="mt-1 font-dm-sans text-[12px] text-[#64748B] md:text-[13px]">{t.company}</p>
      <p className="mt-4 font-dm-sans text-[13px] leading-[1.65] text-[#334155] md:text-[14px]">{t.quote}</p>
    </div>
  </article>
);

const QuoteTestimonialCard = ({ t }: { t: QuoteTestimonial }) => (
  <article
    className="testimonial-bottom-card relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
    style={{
      height: `${BOTTOM_CARD_HEIGHT_PX}px`,
      minHeight: `${BOTTOM_CARD_HEIGHT_PX}px`,
      maxHeight: `${BOTTOM_CARD_HEIGHT_PX}px`,
    }}
  >
    <QuoteMarks />
    <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden px-6 pb-6 pt-10 md:px-8 md:pt-12">
      <p className="font-inter text-[15px] font-bold leading-tight text-secondary md:text-[16px]">{t.name}</p>
      <p className="mt-1 font-dm-sans text-[12px] text-[#64748B] md:text-[13px]">{t.company}</p>
      <p className="mt-4 min-h-0 flex-1 overflow-y-auto font-dm-sans text-[13px] leading-[1.65] text-[#334155] md:text-[14px]">
        {t.quote}
      </p>
    </div>
  </article>
);

const FeaturedTestimonialCard = () => (
  <article
    className="testimonial-bottom-card relative overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(15,23,42,0.08)]"
    style={{
      height: `${BOTTOM_CARD_HEIGHT_PX}px`,
      minHeight: `${BOTTOM_CARD_HEIGHT_PX}px`,
      maxHeight: `${BOTTOM_CARD_HEIGHT_PX}px`,
    }}
  >
    <img
      src={testimonialWarehouse}
      alt="Fog Bandit protecting a warehouse"
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/20" />
    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-5">
      <div className="max-h-[calc(100%-1.5rem)] w-full max-w-md overflow-y-auto rounded-xl border border-white/30 bg-white/25 p-4 backdrop-blur-md md:p-5">
        <p className="font-inter text-[14px] font-bold leading-tight text-white md:text-[15px]">{featuredCenter.name}</p>
        <p className="mt-1 font-dm-sans text-[11px] text-white/85 md:text-[12px]">{featuredCenter.company}</p>
        <p className="mt-3 min-h-0 overflow-y-auto font-dm-sans text-[12px] leading-[1.55] text-white md:text-[13px]">
          {featuredCenter.quote}
        </p>
      </div>
    </div>
  </article>
);

type TestimonialsSectionProps = {
  className?: string;
};

const TestimonialsSection = ({ className }: TestimonialsSectionProps) => {
  return (
    <section id="case-studies" className={cn("bg-[#F9F9F9] py-14 lg:py-20", className)}>
      <style>
        {`
          section#case-studies .testimonials-bottom-row {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            grid-template-rows: ${BOTTOM_CARD_HEIGHT_PX}px !important;
            gap: 1.25rem !important;
            align-items: start !important;
          }

          section#case-studies .testimonials-bottom-row > article.testimonial-bottom-card {
            height: ${BOTTOM_CARD_HEIGHT_PX}px !important;
            max-height: ${BOTTOM_CARD_HEIGHT_PX}px !important;
            min-height: ${BOTTOM_CARD_HEIGHT_PX}px !important;
            overflow: hidden !important;
            box-sizing: border-box !important;
            margin: 0 !important;
            padding: 0 !important;
            transform: none !important;
            position: relative !important;
          }

          @media (max-width: 767px) {
            section#case-studies .testimonials-bottom-row {
              grid-template-columns: 1fr !important;
              grid-template-rows: auto !important;
            }
            section#case-studies .testimonials-bottom-row > article.testimonial-bottom-card {
              height: auto !important;
              min-height: 280px !important;
              max-height: none !important;
            }
          }
        `}
      </style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-inter text-[24px] font-bold leading-tight md:text-[32px]">
            <span className="text-primary">Trusted by businesses</span>{" "}
            <span className="text-secondary">that can&apos;t afford downtime</span>
          </h2>
          <p className="mt-3 font-dm-sans text-[15px] leading-relaxed text-[#64748B] md:mt-4 md:text-[17px]">
            Hear directly from security leaders and operators using Fog Bandit every day.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2">
          {topRow.map((t) => (
            <ImageTestimonialCard key={t.name} t={t} />
          ))}
        </div>

        <div className="testimonials-bottom-row mt-5">
          <QuoteTestimonialCard t={quoteLeft} />
          <FeaturedTestimonialCard />
          <QuoteTestimonialCard t={quoteRight} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
