const stats = [
  { value: "99.9%", label: "Harmless To Human", percent: 99.9 },
  { value: "99.9%", label: "Harmless To Pets", percent: 99.9 },
  { value: "99.9%", label: "Harmless To Electronics", percent: 99.9 },
  { value: "100%", label: "Doesn't Catch Fire", percent: 100 },
  { value: "95%", label: "Left No Residue", percent: 95 },
];

const RADIUS = 32;
const circumference = 2 * Math.PI * RADIUS;

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
          {/* Desktop / tablet: row */}
          <div className="hidden sm:flex flex-wrap justify-around items-start gap-8 lg:gap-12">
            {stats.map((stat) => {
              const offset = circumference - (stat.percent / 100) * circumference;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-[76px] h-[76px] mx-auto relative">
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
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[14px] font-bold text-secondary">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-[13px] text-secondary font-medium mt-3">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical stack (matches reference) */}
          <div className="sm:hidden flex flex-col items-center gap-7">
            {stats.map((stat) => {
              const offset = circumference - (stat.percent / 100) * circumference;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-[80px] h-[80px] mx-auto relative">
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
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[14px] font-bold text-secondary">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-[13px] text-secondary font-medium mt-3">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyStatsSection;
