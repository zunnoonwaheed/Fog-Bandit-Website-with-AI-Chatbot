import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { useIJFPopup } from "@/context/IJFPopupContext";

const IJF_REGISTRATION_URL =
  "https://jewelleryfair.com.au/ijf/jewellery-safety-security-zone/";

const IJFPromoBanner = () => {
  const { isOpen: isPopupOpen } = useIJFPopup();

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-4 transition-all duration-300 sm:px-6 lg:px-8 ${
        isPopupOpen
          ? "pointer-events-none translate-y-8 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
      aria-hidden={isPopupOpen}
    >
      <a
        href={IJF_REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="premium-card group mx-auto flex max-w-4xl flex-col items-start justify-between gap-4 rounded-2xl border-white/10 bg-[#0a1525]/95 p-5 shadow-2xl backdrop-blur-md transition-all hover:bg-[#0a1525] sm:flex-row sm:items-center lg:p-6"
      >
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
          <span className="inline-flex shrink-0 items-center rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
            IJF 2026
          </span>
          <div>
            <p className="font-inter text-[15px] font-semibold text-white sm:text-base">
              Meet Fog Bandit ANZ at Stand JS7
            </p>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 font-dm-sans text-[13px] text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-primary" />
                22&ndash;24 August 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                ICC Sydney
              </span>
            </div>
          </div>
        </div>
        <span className="btn-primary shrink-0 whitespace-nowrap">
          Register to Visit Us
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </a>
    </div>
  );
};

export default IJFPromoBanner;
