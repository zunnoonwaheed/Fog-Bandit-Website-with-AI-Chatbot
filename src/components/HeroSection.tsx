import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg-no-product.png";
import heroBgMobile from "@/assets/hero-bg-mobile.png";
import heroProduct from "@/assets/hero-product.png";
import acclaimBadge from "@/assets/acclaim-badge.png";

const HeroSection = () => {
  return (
    <section className="relative md:h-[750px] overflow-hidden bg-[#0a1525]">
      {/* Desktop background: image covers the section width; height is fixed at 750px
          via the section. backgroundSize: cover preserves aspect (may crop). */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      />

      {/* Desktop product overlay: ALWAYS exactly 348x522, pinned right with small inset
          and aligned to the section bottom. */}
      <img
        src={heroProduct}
        alt="Fog Bandit unit"
        aria-hidden="true"
        className="absolute hidden md:block pointer-events-none select-none z-[1]"
        style={{
          width: "348px",
          height: "522px",
          right: "40px",
          top: "228px",
        }}
      />

      {/* Mobile background: scales with viewport width, product overlaid via vw units */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${heroBgMobile})`,
          backgroundSize: "100vw auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      />

      {/* Mobile product overlay: 348x522 at left:51 top:518 within 430x750 frame, scaled to viewport */}
      <img
        src={heroProduct}
        alt="Fog Bandit unit"
        aria-hidden="true"
        className="absolute md:hidden pointer-events-none select-none z-[1]"
        style={{
          width: `${(348 / 430) * 100}vw`,
          height: `${(522 / 430) * 100}vw`,
          top: `${(518 / 430) * 100}vw`,
          left: `${(51 / 430) * 100}vw`,
        }}
      />

      {/* Subtle bottom vignette only — keep image bright */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-0 pt-[180px] pb-16 lg:pt-[200px]">
        <div className="max-w-lg lg:max-w-none">
          <h1 className="font-inter text-[32px] font-semibold leading-[1.15] tracking-tight text-white md:text-[40px] lg:text-[44px]">
            End the break-in before it begins
          </h1>
          <p className="font-dm-sans mt-5 max-w-[460px] text-[15px] leading-relaxed text-white/70">
            Fog Bandit doesn't just detect intruders — it shuts them down instantly.
            Within seconds, <strong className="text-white font-semibold">dense security fog</strong> fills the space, removes visibility,
            and forces criminals to abandon the attempt.
          </p>
          <div className="mt-8 flex flex-row flex-nowrap items-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-[13px] sm:text-sm transition-all hover:opacity-90 whitespace-nowrap"
            >
              Get a quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/15 px-4 sm:px-6 py-3 sm:py-3.5 text-[13px] sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/25 whitespace-nowrap"
            >
              Explore Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-10 lg:mt-5 lg:w-[640px]">
            {/* Mobile: badges above text */}
            <div className="lg:hidden">
              <img src={acclaimBadge} alt="Acclaim & NF A2P certification badges" className="h-7 w-auto mb-2" />
              <p className="font-dm-sans text-[14px] leading-snug text-white/80 max-w-[300px]">
                Fog Bandit has received the highest security grade certificate named NF & A2P, in France.
              </p>
            </div>
            {/* Desktop: badges inline left of text, single line */}
            <div className="hidden lg:flex items-center gap-3">
              <img src={acclaimBadge} alt="Acclaim & NF A2P certification badges" className="h-8 w-auto flex-shrink-0" />
              <p className="font-dm-sans text-[13px] leading-snug text-white/60 whitespace-nowrap">
                <span className="text-white font-semibold">Note:</span> Fog Bandit has received the highest security grade certificate named NF & A2P, in France.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
