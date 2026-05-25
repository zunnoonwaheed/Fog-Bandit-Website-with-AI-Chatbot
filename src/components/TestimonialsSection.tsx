import { useRef } from "react";
import fogActionSplit from "@/assets/fog-action-split.png";
import InitialsAvatar from "@/components/InitialsAvatar";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  metadata?: string;
};

const cardLeft: Testimonial = {
  name: "H A",
  role: "Google Review",
  quote:
    "Great pricing, innovative and functional products range, been using for over 5 years now and everything still working flawlessly. Great after sales support too.",
  metadata: "1 review · 2 years ago",
};

const cardRight: Testimonial = {
  name: "Hamza Sajid",
  role: "Google Review",
  quote:
    "Works really well for foiling robberies",
  metadata: "2 reviews · 2 years ago",
};

const TextCard = ({ t }: { t: Testimonial }) => (
  <div className="bg-background border border-border rounded-2xl p-4 md:p-8 shadow-sm flex flex-col min-h-[248px] md:min-h-[300px]">
    <div className="flex items-center gap-3">
      <InitialsAvatar name={t.name} size="md" />
      <div>
        <p className="font-bold text-secondary text-[13px] md:text-[16px] leading-tight">{t.name}</p>
        <p className="text-muted-foreground text-[11px] md:text-[13px] mt-0.5">{t.role}</p>
        {t.metadata && (
          <p className="text-muted-foreground/70 text-[10px] md:text-[11px] mt-0.5">{t.metadata}</p>
        )}
      </div>
    </div>
    <p className="text-muted-foreground text-[12px] md:text-[15px] leading-[1.6] mt-4 md:mt-6 italic flex-1">"{t.quote}"</p>
  </div>
);

const ImageCard = ({ className = "" }: { className?: string }) => (
  <div className={`relative rounded-2xl overflow-hidden w-full h-[420px] shadow-lg ${className}`}>
    <img src={fogActionSplit} alt="Fog Bandit in action" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
    {/* Glass overlay card */}
    <div className="absolute left-4 right-4 bottom-4 rounded-xl p-4 bg-white/25 backdrop-blur-md border border-white/30">
      <div className="flex items-center gap-2.5 mb-2.5">
        <InitialsAvatar name="Francis King" size="md" />
        <div>
          <p className="text-white text-[13px] font-bold leading-tight">Francis King</p>
          <p className="text-white/80 text-[11px] leading-tight mt-0.5">Google Review</p>
        </div>
      </div>
      <p className="text-white text-[12px] leading-relaxed">
        "It just works."
      </p>
      <p className="text-white/70 text-[10px] mt-1.5">
        Local Guide · 52 reviews · 42 photos · 2 years ago
      </p>
    </div>
  </div>
);


const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="case-studies" className="pb-14 lg:pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[20px] md:text-[28px] font-bold text-secondary leading-snug">
            Proven When It <span className="text-[#021373]">Matters Most</span>
          </h2>
          <p className="mt-3 text-[13px] md:text-[15px] text-muted-foreground leading-relaxed">
            Fog Bandit isn't theoretical, it's been tested in real break-ins where seconds made the difference between loss and protection.
          </p>
        </div>

        {/* Desktop: 3-column layout - wide side cards, narrower portrait center */}
        <div className="mt-10 hidden md:grid md:grid-cols-[1fr_300px_1fr] gap-8 items-center">
          <div>
            <TextCard t={cardLeft} />
          </div>
          <ImageCard className="max-w-[300px] mx-auto" />
          <div>
            <TextCard t={cardRight} />
          </div>
        </div>

        {/* Mobile: horizontal snap scroll - all cards same width */}
        <div className="mt-8 md:hidden -mx-4">
          <div
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 scroll-smooth scrollbar-hide"
          >
            <div className="snap-center shrink-0 w-[78%] max-w-[286px]">
              <TextCard t={cardLeft} />
            </div>
            <div className="snap-center shrink-0 w-[78%] max-w-[286px]">
              <ImageCard />
            </div>
            <div className="snap-center shrink-0 w-[78%] max-w-[286px]">
              <TextCard t={cardRight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
