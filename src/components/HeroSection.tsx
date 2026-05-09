import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg-no-product.png";
import heroBgMobile from "@/assets/hero-bg-mobile.png";
import heroProduct from "@/assets/hero-product.png";
import acclaimBadge from "@/assets/acclaim-badge.png";

const HeroSection = () => {
  return (
    <section data-hero-home className="relative md:h-[750px] overflow-hidden bg-[#0a1525]">
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

      {/* Desktop product overlay: fixed 348x522 and intentionally dropped below the fold
          so only the upper portion is visible, matching the reference crop. */}
      <img
        src={heroProduct}
        alt="Fog Bandit unit"
        aria-hidden="true"
        className="absolute hidden md:block pointer-events-none select-none z-[1]"
        style={{
          width: "348px",
          height: "522px",
          right: "40px",
          bottom: "-174px",
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

      {/* Padding tuned to 1440×750 hero: clear space below floating nav */}
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 pt-[152px] pb-14 sm:px-6 sm:pt-[168px] md:px-6 md:pt-[176px] lg:px-0 lg:pb-16 lg:pt-[188px] xl:pt-[196px]">
        {/* Wider than 592px so the title can sit on one line at desktop; product sits in the remaining width */}
        <div className="hero-home-copy min-w-0 max-w-lg md:max-w-2xl lg:max-w-[min(52rem,calc(100vw-18rem))] xl:max-w-[min(58rem,calc(100vw-22rem))]">
          {/* Title + body layout locked in index.css (lg+) so utilities/build order can't override */}
          <h1 className="hero-home-title font-inter">
            End the break-in before it begins
          </h1>
          <div className="hero-home-lead mt-4 md:mt-5 lg:mt-[22px] xl:mt-6">
            <p className="hero-home-lead-line">
              Fog Bandit doesn&apos;t just detect intruders —
            </p>
            <p className="hero-home-lead-line">
              it shuts them down instantly. Within seconds,{" "}
              <strong>dense security fog</strong>
            </p>
            <p className="hero-home-lead-line">
              fills the space, removes visibility, and forces criminals to abandon the attempt.
            </p>
          </div>
          <div className="mt-7 flex flex-row flex-nowrap items-stretch gap-2 sm:mt-8 sm:gap-3 lg:mt-9 lg:gap-4">
            <Link
              to="/contact"
              className="inline-flex min-h-[44px] flex-1 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-primary px-3.5 py-2.5 text-[14px] font-semibold tracking-[-0.01em] text-primary-foreground transition-all hover:opacity-90 sm:min-h-0 sm:flex-none sm:px-6 sm:py-3 md:text-[15px] xl:px-7 xl:text-[15px]"
            >
              Get a quote <ArrowRight className="h-[15px] w-[15px] shrink-0 sm:h-4 sm:w-4" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex min-h-[44px] flex-1 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/[0.28] bg-white/[0.14] px-3 py-2.5 text-[14px] font-semibold tracking-[-0.01em] text-white backdrop-blur-md transition-all hover:bg-white/[0.22] sm:min-h-0 sm:flex-none sm:px-5 sm:py-3 md:text-[15px] xl:text-[15px]"
            >
              Explore Case Studies{" "}
              <ArrowRight className="h-[15px] w-[15px] shrink-0 sm:h-4 sm:w-4" />
            </Link>
          </div>

          <div className="mt-9 sm:mt-10 lg:mt-11 lg:w-full lg:max-w-[740px]">
            <div className="lg:hidden">
              <img src={acclaimBadge} alt="Acclaim & NF A2P certification badges" className="mb-2.5 h-7 w-auto" />
              <p className="font-dm-sans max-w-[22rem] text-[13px] leading-[1.45] text-white/90 sm:text-[14px] sm:leading-[1.48]">
                Note: Fog Bandit has received the highest security grade certificate named NF &amp; A2P, in France.
              </p>
            </div>
            <div className="hidden lg:flex lg:items-start lg:gap-3 xl:gap-4">
              <img src={acclaimBadge} alt="Acclaim & NF A2P certification badges" className="h-8 w-auto shrink-0 xl:h-[34px]" />
              <p className="font-dm-sans pt-0.5 text-[13px] leading-snug tracking-[-0.01em] text-white/[0.92] xl:text-[13.5px]">
                Note: Fog Bandit has received the highest security grade certificate named NF &amp; A2P, in France.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
