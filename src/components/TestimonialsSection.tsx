import fogStore from "@/assets/testimonial-featured.png";
import quoteIconOpening from "@/assets/Icon.png";
import quoteIconClosing from "@/assets/Icon (1).png";

const side = [
  { name: "Frank", role: "Elk Fish Robotics WA",
    quote: "The glass got broken outside and the fog bandit stopped the intruders and instantly foiled the robbery. Thank you!" },
  { name: "Kamlesh", role: "Sindhiz Group of Companies ACT",
    quote: "The Fog Bandit was installed at all our Tobacco Stores in ACT & NSW, to protect against burglaries which were steadily increasing. The Fog Bandit has proved to be an extremely reliable and immensely efficient system in dramatically reducing our problem and foiling robberies without any failure." },
];

const featured = {
  name: "Sukoon Bedi", role: "IGA Winchelsea VIC",
  quote: "The Fog Bandit worked perfectly, and we did not suffer any loss and the shop is back open this morning for usual trading. Without the Fog Bandit the outcome could have been very different. We feel assured by having the Fog Bandit installed and strongly suggest that other IGA supermarkets do the same.",
};

const QuoteIcon = ({ className = "", isClosing = false }: { className?: string; isClosing?: boolean }) => (
  <img src={isClosing ? quoteIconClosing : quoteIconOpening} alt="" aria-hidden className={`h-6 w-6 ${className}`} />
);

const SideCard = ({ t, heightClass = "" }: { t: (typeof side)[number]; heightClass?: string }) => (
  <article className={`premium-card rounded-2xl p-6 flex flex-col ${heightClass}`}>
    <h3 className="font-heading text-[18px] font-bold text-secondary">{t.name}</h3>
    <p className="text-[13px] text-muted-foreground mt-1">{t.role}</p>
    <QuoteIcon className="mt-5" />
    <p className="mt-3 text-[14px] leading-relaxed text-secondary/90 flex-1">{t.quote}</p>
    <QuoteIcon isClosing className="mt-4 ml-auto" />
  </article>
);

const FeaturedCard = ({ heightClass = "" }: { heightClass?: string }) => (
  <article className={`premium-media relative overflow-hidden rounded-2xl bg-[#0a0a0a] ring-1 ring-black/[0.05] ${heightClass || "min-h-[480px]"}`}>
    <img src={fogStore} alt={`${featured.name}, ${featured.role}: ${featured.quote}`} loading="lazy"
         className="absolute inset-0 h-full w-full object-contain object-center" />
    <span className="sr-only">{featured.name} — {featured.role}. {featured.quote}</span>
  </article>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="pt-[100px] lg:pt-[120px] pb-0">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="section-heading">
          Proven When It <span className="text-[#021373]">Matters Most</span>
        </h2>
        <p className="section-subtext mt-4">
          Fog Bandit isn&apos;t theoretical. It&apos;s been tested in real break-ins where seconds made the difference between loss and protection.
        </p>
      </div>

      {/* Mobile carousel */}
      <div className="mt-10 lg:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory flex items-center gap-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="snap-center shrink-0 w-[88%]"><SideCard t={side[0]} /></div>
        <div className="snap-center shrink-0 w-[88%]"><FeaturedCard /></div>
        <div className="snap-center shrink-0 w-[88%]"><SideCard t={side[1]} /></div>
      </div>

      {/* Desktop 3-col */}
      <div className="mt-12 hidden lg:grid grid-cols-3 items-center gap-6">
        <SideCard t={side[0]} heightClass="h-[372px]" />
        <FeaturedCard heightClass="h-[468px]" />
        <SideCard t={side[1]} heightClass="h-[320px]" />
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
