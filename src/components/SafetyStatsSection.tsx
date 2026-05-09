import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "99.9%", label: "Harmless To Human", percent: 99.9, target: 99.9, decimals: 1, suffix: "%" },
  { value: "99.9%", label: "Harmless To Pets", percent: 99.9, target: 99.9, decimals: 1, suffix: "%" },
  { value: "99.9%", label: "Harmless To Electronics", percent: 99.9, target: 99.9, decimals: 1, suffix: "%" },
  { value: "100%", label: "Doesn't Catch Fire", percent: 100, target: 100, decimals: 0, suffix: "%" },
  { value: "95%", label: "Left No Residue", percent: 95, target: 95, decimals: 0, suffix: "%" },
];

const RADIUS = 32;
const circumference = 2 * Math.PI * RADIUS;

const StatCircle = ({
  percent,
  target,
  decimals,
  suffix,
  label,
  size = 76,
}: {
  percent: number;
  target: number;
  decimals: number;
  suffix: string;
  label: string;
  size?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0..1
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
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={RADIUS} fill="none" stroke="hsl(var(--border))" strokeWidth="3" />
          <circle
            cx="40"
            cy="40"
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
        <span className="absolute inset-0 flex items-center justify-center text-[14px] font-bold text-secondary tabular-nums">
          {display}{suffix}
        </span>
      </div>
      <p className="text-[13px] text-secondary font-medium mt-3">{label}</p>
    </div>
  );
};

const SafetyStatsSection = () => {
  return (
    <section className="pb-14 lg:pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl lg:max-w-4xl mx-auto">
          <h2 className="text-[20px] md:text-[28px] font-bold text-secondary leading-snug">
            When seconds matter, businesses choose certainty
          </h2>
          <p className="mt-3 text-[13px] md:text-[15px] text-muted-foreground leading-relaxed">
            Across Australia and New Zealand, retailers, warehouses, and high-risk facilities rely on Fog Bandit to
            stop theft in real time — not just record it after the damage is done.
          </p>
        </div>

        <div className="mt-8 md:mt-10 bg-background border border-border rounded-2xl p-6 md:p-10">
          <div className="hidden sm:flex flex-wrap justify-around items-start gap-8 lg:gap-12">
            {stats.map((s) => (
              <StatCircle key={s.label} {...s} />
            ))}
          </div>

          <div className="sm:hidden flex flex-col items-center gap-7">
            {stats.map((s) => (
              <StatCircle key={s.label} {...s} size={80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyStatsSection;
