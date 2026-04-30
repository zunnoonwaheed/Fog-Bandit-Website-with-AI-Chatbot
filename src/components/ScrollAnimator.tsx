import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Site-wide scroll reveal. Watches common elements (headings, paragraphs,
 * images, videos, cards) and adds `.lv-in-view` when they enter the viewport.
 * Re-scans on route changes and DOM mutations so dynamically added content
 * also animates.
 */
const SELECTOR = [
  "main h1", "main h2", "main h3",
  "section h1", "section h2", "section h3",
  "section > p", "section p.section-subtext",
  'section img:not([aria-hidden="true"])',
  "section video",
  ".lv-card",
].join(",");

const ScrollAnimator = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Stagger siblings slightly for a smoother feel
            const parent = el.parentElement;
            if (parent) {
              const siblings = Array.from(parent.children).filter((c) =>
                (c as HTMLElement).matches(SELECTOR)
              );
              const idx = siblings.indexOf(el);
              if (idx > 0) el.style.animationDelay = `${Math.min(idx * 80, 400)}ms`;
            }
            el.classList.add("lv-in-view");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (!el.classList.contains("lv-in-view")) observer.observe(el);
      });
    };

    observeAll();

    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default ScrollAnimator;
