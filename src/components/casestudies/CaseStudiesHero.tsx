const CaseStudiesHero = () => {
  return (
    <section className="page-hero pt-28 pb-10 md:pt-[140px] lg:pt-[210px] md:pb-14">
      <div className="container mx-auto px-4 text-center">
        <p className="font-dm-sans text-[11px] md:text-[12px] font-semibold text-primary/70 tracking-[0.15em] uppercase mb-3 md:mb-4">
          The world leader in security fogging
        </p>
        <h1 className="font-inter text-[28px] md:text-[36px] lg:text-[42px] font-semibold tracking-[-0.035em] text-foreground leading-[1.12] mb-4 md:mb-5 max-w-4xl mx-auto">
          Real break-ins. Real outcomes. <span className="text-primary">Real protection.</span>
        </h1>
        <p className="font-dm-sans text-muted-foreground text-[14px] md:text-[18px] font-medium leading-relaxed max-w-3xl mx-auto">
          See how businesses across Australia and New Zealand stopped theft, protected staff, and avoided costly downtime using Fog Bandit's instant-response security systems.
        </p>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
