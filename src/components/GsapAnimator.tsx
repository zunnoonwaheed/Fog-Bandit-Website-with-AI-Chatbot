import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide GSAP animation layer with a polished, professional feel.
 *  - Headings: smooth clip + rise (line-mask style)
 *  - Paragraphs / list items: soft stagger fade-up
 *  - Images / videos: smooth zoom-in (no harsh blur) + gentle parallax
 *  - Card grids: refined stagger pop-in
 *  - Buttons / links: subtle magnetic lift on hover
 *  - Respects prefers-reduced-motion
 */
const GsapAnimator = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      const skipGsapReveal = (el: Element) =>
        !!el.closest("nav, header, [data-no-animate], [data-gsap-done], [data-hero-home]");

      // ---------- Headings: clip-mask rise ----------
      const headings = gsap.utils
        .toArray<HTMLElement>(
          "section h1, section h2, section h3, main h1, main h2, main h3"
        )
        .filter((el) => !skipGsapReveal(el));

      headings.forEach((el) => {
        el.setAttribute("data-gsap-done", "1");
        // Wrap in a clip mask for the line-reveal feel
        if (!el.dataset.gsapWrapped) {
          el.dataset.gsapWrapped = "1";
          const prevDisplay = window.getComputedStyle(el).display;
          el.style.overflow = "hidden";
          el.style.display = prevDisplay === "inline" ? "inline-block" : prevDisplay;
        }
        gsap.fromTo(
          el,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
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

      // ---------- Paragraphs + small headings: soft stagger ----------
      const paras = gsap.utils
        .toArray<HTMLElement>(
          "section p, section h4, section h5, section li"
        )
        .filter((el) => !skipGsapReveal(el));

      paras.forEach((el) => {
        el.setAttribute("data-gsap-done", "1");
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
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

      // ---------- Images & videos: smooth zoom-in + gentle parallax ----------
      const media = gsap.utils
        .toArray<HTMLElement>(
          'section img:not([aria-hidden="true"]):not([data-no-animate]), section video:not([data-no-animate])'
        )
        .filter((el) => !skipGsapReveal(el));

      media.forEach((el) => {
        el.setAttribute("data-gsap-done", "1");
        gsap.fromTo(
          el,
          { opacity: 0, scale: 1.05, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );

        const cs = window.getComputedStyle(el);
        if (cs.position !== "absolute" && cs.position !== "fixed") {
          gsap.fromTo(
            el,
            { yPercent: 4 },
            {
              yPercent: -4,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        }
      });

      // ---------- Card-like grid items: refined pop-in stagger ----------
      const grids = gsap.utils.toArray<HTMLElement>(
        'section [class*="grid-cols"], section [class*="flex"]'
      );
      const seen = new Set<HTMLElement>();
      grids.forEach((grid) => {
        if (grid.closest("[data-hero-home]")) return;

        const cards = Array.from(grid.children).filter(
          (c) => c instanceof HTMLElement && /rounded/.test(c.className)
        ) as HTMLElement[];
        if (cards.length < 2) return;
        cards.forEach((c) => {
          if (seen.has(c)) return;
          seen.add(c);
          c.setAttribute("data-gsap-done", "1");
        });
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.09,
            scrollTrigger: {
              trigger: grid,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      ScrollTrigger.refresh();
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 600);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      ctx.revert();
    };
  }, [location.pathname]);

  // Magnetic / lift hover on buttons & links
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const handler = (e: Event) => {
      const t = e.target as Node | null;
      if (!t || !(t instanceof Element)) return;
      const target = t.closest("button, a") as HTMLElement | null;
      if (!target) return;
      if (target.closest("nav, header, [data-no-animate]")) return;
      gsap.to(target, { scale: 1.04, duration: 0.25, ease: "power2.out" });
      const leave = () => {
        gsap.to(target, { scale: 1, duration: 0.35, ease: "power2.out" });
        target.removeEventListener("mouseleave", leave);
      };
      target.addEventListener("mouseleave", leave);
    };
    document.addEventListener("mouseover", handler, true);
    return () => document.removeEventListener("mouseover", handler, true);
  }, []);

  return null;
};

export default GsapAnimator;
