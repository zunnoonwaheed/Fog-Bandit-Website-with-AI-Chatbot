import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide GSAP animation layer. Adds prominent scroll-driven animations:
 *  - Section headings: dramatic rise + clip reveal
 *  - Paragraphs: stagger fade-up
 *  - Images / videos: parallax + scale on scroll
 *  - Cards (anything with [class*="rounded"] inside grids): pop-in stagger
 *  - Buttons / links: subtle magnetic hover
 *  - Hero: parallax background drift
 */
const GsapAnimator = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Kill stale triggers on route change
      ScrollTrigger.getAll().forEach((t) => t.kill());

      const inNav = (el: Element) =>
        !!el.closest("nav, header, [data-no-animate], [data-gsap-done]");

      // ---------- Headings: clip + rise ----------
      const headings = gsap.utils.toArray<HTMLElement>(
        "section h1, section h2, section h3, main h1, main h2, main h3"
      ).filter((el) => !inNav(el));

      headings.forEach((el) => {
        el.setAttribute("data-gsap-done", "1");
        gsap.fromTo(
          el,
          { yPercent: 60, opacity: 0, skewY: 4 },
          {
            yPercent: 0,
            opacity: 1,
            skewY: 0,
            duration: 1.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ---------- Paragraphs + small headings: stagger fade-up ----------
      const paras = gsap.utils.toArray<HTMLElement>(
        "section p, section h4, section h5, section li"
      ).filter((el) => !inNav(el));

      paras.forEach((el) => {
        el.setAttribute("data-gsap-done", "1");
        gsap.fromTo(
          el,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ---------- Images & videos: scale-in + parallax ----------
      const media = gsap.utils.toArray<HTMLElement>(
        'section img:not([aria-hidden="true"]):not([data-no-animate]), section video:not([data-no-animate])'
      ).filter((el) => !inNav(el));

      media.forEach((el) => {
        el.setAttribute("data-gsap-done", "1");
        gsap.fromTo(
          el,
          { opacity: 0, scale: 1.08, filter: "blur(10px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );

        // Subtle parallax drift while in viewport (skip fixed-positioned hero items)
        const cs = window.getComputedStyle(el);
        if (cs.position !== "absolute" && cs.position !== "fixed") {
          gsap.to(el, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });

      // ---------- Card-like grid items: pop-in with stagger ----------
      const grids = gsap.utils.toArray<HTMLElement>(
        'section [class*="grid-cols"], section [class*="flex"]'
      );
      const seen = new Set<HTMLElement>();
      grids.forEach((grid) => {
        const cards = Array.from(grid.children).filter(
          (c) => c instanceof HTMLElement && c.className.includes("rounded")
        ) as HTMLElement[];
        if (cards.length < 2) return;
        cards.forEach((c) => {
          if (seen.has(c)) return;
          seen.add(c);
          c.setAttribute("data-gsap-done", "1");
        });
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "back.out(1.4)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: grid,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ---------- Section background subtle zoom ----------
      gsap.utils.toArray<HTMLElement>("section").forEach((sec) => {
        if (inNav(sec)) return;
        gsap.fromTo(
          sec,
          { backgroundPosition: "50% 40%" },
          {
            backgroundPosition: "50% 60%",
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    // Refresh after late-loading images
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 600);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      ctx.revert();
    };
  }, [location.pathname]);

  // Magnetic / lift hover on buttons & links (delegated, runs once)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "button, a"
      ) as HTMLElement | null;
      if (!target) return;
      if (target.closest("nav, header, [data-no-animate]")) return;
      gsap.to(target, { scale: 1.04, duration: 0.25, ease: "power2.out" });
      const leave = () => {
        gsap.to(target, { scale: 1, duration: 0.35, ease: "power2.out" });
        target.removeEventListener("mouseleave", leave);
      };
      target.addEventListener("mouseleave", leave);
    };
    document.addEventListener("mouseenter", handler, true);
    return () => document.removeEventListener("mouseenter", handler, true);
  }, []);

  return null;
};

export default GsapAnimator;
