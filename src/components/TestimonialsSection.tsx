import { useRef } from "react";
import fogActionSplit from "@/assets/fog-action-split.png";
import avatarPatrick from "@/assets/avatar-patrick.png";
import avatarRob from "@/assets/avatar-rob.png";
import avatarPia from "@/assets/avatar-pia.png";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

const cardLeft: Testimonial = {
  name: "Kamlesh",
  role: "Sindhiz Group of Companies ACT",
  avatar: avatarRob,
  quote:
    "The Fog Bandit was installed at all our Tobacco Stores in ACT & NSW, to protect against burglaries which were steadily increasing. The Fog Bandit has proved to be an extremely reliable and immensely efficient system in dramatically reducing our problem and foiling robberies without any failure.",
};

const cardRight: Testimonial = {
  name: "Frank",
  role: "Elk Fish Robotics WA",
  avatar: avatarPatrick,
  quote:
    "The glass got broken outside and the fog bandit stopped the intruders and instantly foiled the robbery. Thank you!",
};

const QuoteOpen = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 18V12.6C0 10.92 0.31 9.18 0.93 7.38C1.55 5.58 2.43 3.88 3.57 2.28C4.71 0.68 6.07 -0.7 7.65 -1.86L9.42 0.06C8.16 1.32 7.07 2.7 6.15 4.2C5.23 5.7 4.59 7.32 4.23 9.06H8.4V18H0ZM12.6 18V12.6C12.6 10.92 12.91 9.18 13.53 7.38C14.15 5.58 15.03 3.88 16.17 2.28C17.31 0.68 18.67 -0.7 20.25 -1.86L22.02 0.06C20.76 1.32 19.67 2.7 18.75 4.2C17.83 5.7 17.19 7.32 16.83 9.06H21V18H12.6Z"
      fill="currentColor"
    />
  </svg>
);

const QuoteClose = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="rotate(180 11 9)">
      <path
        d="M0 18V12.6C0 10.92 0.31 9.18 0.93 7.38C1.55 5.58 2.43 3.88 3.57 2.28C4.71 0.68 6.07 -0.7 7.65 -1.86L9.42 0.06C8.16 1.32 7.07 2.7 6.15 4.2C5.23 5.7 4.59 7.32 4.23 9.06H8.4V18H0ZM12.6 18V12.6C12.6 10.92 12.91 9.18 13.53 7.38C14.15 5.58 15.03 3.88 16.17 2.28C17.31 0.68 18.67 -0.7 20.25 -1.86L22.02 0.06C20.76 1.32 19.67 2.7 18.75 4.2C17.83 5.7 17.19 7.32 16.83 9.06H21V18H12.6Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const TextCard = ({ t }: { t: Testimonial }) => (
  <div className="bg-background border border-border rounded-2xl p-4 md:p-8 shadow-sm flex flex-col min-h-[248px] md:min-h-[300px]">
    <div className="flex items-center gap-3 md:gap-4">
      <img src={t.avatar} alt={t.name} className="w-9 h-9 md:w-12 md:h-12 rounded-full object-cover" loading="lazy" />
      <div>
        <p className="font-bold text-secondary text-[13px] md:text-[16px] leading-tight">{t.name}</p>
        <p className="text-muted-foreground text-[11px] md:text-[13px] mt-0.5">{t.role}</p>
      </div>
    </div>
    <QuoteOpen className="text-[#021373] mt-4 md:mt-6 w-[18px] h-[14px] md:w-[26px] md:h-[20px]" />
    <p className="text-muted-foreground text-[12px] md:text-[15px] leading-[1.6] mt-3 md:mt-4 md:flex-1">{t.quote}</p>
    <div className="flex justify-end mt-2 md:mt-4">
      <QuoteClose className="text-[#021373] w-[18px] h-[14px] md:w-[26px] md:h-[20px]" />
    </div>
  </div>
);

const PiaCard = ({ className = "" }: { className?: string }) => (
  <div className={`relative rounded-2xl overflow-hidden w-full h-[420px] shadow-lg ${className}`}>
    <img src={fogActionSplit} alt="Fog Bandit in action" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
    {/* Glass overlay card */}
    <div className="absolute left-4 right-4 bottom-4 rounded-xl p-4 bg-white/25 backdrop-blur-md border border-white/30">
      <div className="flex items-center gap-2.5 mb-2.5">
        <img src={avatarPia} alt="Sukoon Bedi" className="w-9 h-9 rounded-md object-cover" loading="lazy" />
        <div>
          <p className="text-white text-[13px] font-bold leading-tight">Sukoon Bedi</p>
          <p className="text-white/80 text-[11px] leading-tight mt-0.5">IGA Winchelsea VIC</p>
        </div>
      </div>
      <p className="text-white text-[12px] leading-relaxed">
        The Fog Bandit worked perfectly, and we did not suffer any loss and the shop is back open this morning for usual trading. Without the Fog Bandit the outcome could have been very different. We feel assured by having the Fog Bandit installed and strongly suggest that other IGA supermarkets do the same.
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
          <PiaCard className="max-w-[300px] mx-auto" />
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
              <PiaCard />
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
