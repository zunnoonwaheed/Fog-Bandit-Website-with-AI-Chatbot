import { useEffect, useState } from "react";
import { X } from "lucide-react";

const SHOWN_KEY = "jewellery-fair-2026-popup-shown";
const SHOW_DELAY_MS = 8000;

const JewelleryFairPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        className="relative w-full max-w-[420px]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1A1A1A] shadow-lg transition-transform hover:scale-105"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <img
          src="/jewellery-fair-2026-promo.jpg"
          alt="Fog Bandit ANZ at the International Jewellery Fair, Booth JS7 Security Zone, August 22-24 2026, ICC Sydney Darling Harbour"
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default JewelleryFairPopup;
