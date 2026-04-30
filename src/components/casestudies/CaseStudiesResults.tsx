const stats = [
  { value: "99.9%", desc: "Intrusion prevention success rate across deployments" },
  { value: "$0", desc: "Average loss reported after fog activation" },
  { value: "0.1 s", desc: "Time from alarm trigger to fog deployment" },
  { value: "10,000+", desc: "Businesses protected across ANZ and globally" },
];

const CaseStudiesResults = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2 leading-snug">
            Results Across Every Industry
          </h2>
          <p className="font-dm-sans text-muted-foreground text-[14px] md:text-[18px] font-medium leading-relaxed">
            Fog Bandit delivers measurable, documented outcomes — not promises.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="border border-border rounded-xl p-5 md:p-6 text-center">
              <p className="text-[22px] md:text-[28px] font-bold text-foreground mb-1">{s.value}</p>
              <p className="text-muted-foreground text-[11px] md:text-[12px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesResults;
