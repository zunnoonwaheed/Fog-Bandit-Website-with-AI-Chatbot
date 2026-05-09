import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Site-wide scroll reveal. Watches headings, paragraphs, images, videos, and
 * card-like containers, and adds `.lv-in-view` when they enter the viewport.
 * Re-scans on route changes and DOM mutations so dynamically added content
 * also animates smoothly.
 */
const SELECTOR = [
  "main h1", "main h2", "main h3", "main h4",
  "section h1", "section h2", "section h3", "section h4",
  "section p",
  'section img:not([aria-hidden="true"]):not([data-no-animate])',
  "section video:not([data-no-animate])",
].join(",");

const isExcluded = (el: HTMLElement) => {
  // Skip elements inside the navbar / chat / footer-fixed UI
  if (el.closest("nav, header, [data-no-animate], [data-hero-home]")) return true;
  // Skip tiny inline things like icons inside buttons
  if (el.closest("button") && el.tagName === "P") return true;
  return false;
};

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
            const parent = el.parentElement;
            if (parent) {
              const siblings = Array.from(parent.children).filter((c) =>
                (c as HTMLElement).matches(SELECTOR)
              );
              const idx = siblings.indexOf(el);
              if (idx > 0) {
                el.style.animationDelay = `${Math.min(idx * 70, 280)}ms`;
              }
            }
            el.classList.add("lv-in-view");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -80px 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.classList.contains("lv-in-view")) return;
        if (isExcluded(el)) {
          el.style.opacity = "1";
          return;
        }
        observer.observe(el);
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
