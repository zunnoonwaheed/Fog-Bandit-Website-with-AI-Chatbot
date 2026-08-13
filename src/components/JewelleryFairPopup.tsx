import { useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { useIJFPopup } from "@/context/IJFPopupContext";

const SHOWN_KEY = "jewellery-fair-2026-popup-shown";
const SHOW_DELAY_MS = 8000;
const IJF_REGISTRATION_URL =
  "https://jewelleryfair.com.au/ijf/jewellery-safety-security-zone/";

const JewelleryFairPopup = () => {
  const { isOpen, setIsOpen } = useIJFPopup();

  useEffect(() => {
    if (sessionStorage.getItem(SHOWN_KEY)) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(SHOWN_KEY, "true");
    }, SHOW_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="International Jewellery Fair 2026 announcement"
    >
      <div
        className="relative w-full max-w-[600px]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1A1A1A] shadow-lg transition-transform hover:scale-105"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <a
          href={IJF_REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src="/assets/ijf-2026-popup.jpeg"
            alt="Fog Bandit at IJF 2026 - Stand JS7, Security Zone - August 22-24, 2026, ICC Sydney Darling Harbour"
            className="w-full h-auto"
          />
        </a>
        <div className="mt-3 rounded-2xl bg-white p-4 text-center shadow-2xl">
          <a
            href={IJF_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            Register to Visit Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JewelleryFairPopup;
