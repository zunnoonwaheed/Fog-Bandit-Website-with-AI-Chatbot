import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 6, label: "States & Territories", target: 6, decimals: 0, suffix: "", percent: 100 },
  { value: 15, label: "Certified Partners", target: 15, decimals: 0, suffix: "+", percent: 100 },
  { value: 100, label: "Australia Coverage", target: 100, decimals: 0, suffix: "%", percent: 100 },
  { value: 24, label: "Partner Support", target: 24, decimals: 0, suffix: "/7", percent: 100 },
];

const RADIUS = 42;
const circumference = 2 * Math.PI * RADIUS;

const StatCircle = ({
  percent,
  target,
  decimals,
  suffix,
  label,
  size = 100,
}: {
  percent: number;
  target: number;
  decimals: number;
  suffix: string;
  label: string;
  size?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(percent / 100);
      setDisplay(target.toFixed(decimals));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const duration = 1600;
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setProgress((percent / 100) * eased);
              setDisplay((target * eased).toFixed(decimals));
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(target.toFixed(decimals));
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [percent, target, decimals]);

  const offset = circumference * (1 - progress);

  return (
    <div ref={ref} className="text-center">
      <div className="mx-auto relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 80ms linear" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[20px] md:text-[24px] font-bold text-foreground tabular-nums">
          {display}{suffix}
        </span>
      </div>
      <p className="text-[12px] md:text-[13px] text-muted-foreground font-medium mt-3">{label}</p>
    </div>
  );
};

const PartnersStats = () => {
  return (
    <section className="pb-10 md:pb-14">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-background border border-border rounded-2xl p-6 md:p-10">
            <div className="hidden sm:flex flex-wrap justify-around items-start gap-8 lg:gap-12">
              {stats.map((s) => (
                <StatCircle key={s.label} {...s} size={100} />
              ))}
            </div>

            <div className="sm:hidden flex flex-col items-center gap-8">
              {stats.map((s) => (
                <StatCircle key={s.label} {...s} size={100} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersStats;
