import { useState } from "react";

const categories = ["All", "Security Awareness", "Theft Prevention", "Product Updates", "Industry Knowledge"];

const BlogHero = () => {
  const [active, setActive] = useState("All");

  return (
    <section className="page-hero pt-32 pb-8 md:pt-[168px] md:pb-10 lg:pt-[210px] lg:pb-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-inter text-[28px] md:text-[36px] lg:text-[42px] font-semibold tracking-[-0.035em] text-foreground leading-[1.12] mb-4 md:mb-5 max-w-4xl mx-auto">
          <span className="text-primary">Security Insights</span> From People Who Stop Theft For A Living
        </h1>
        <p className="font-dm-sans text-muted-foreground text-[14px] md:text-[18px] font-medium leading-relaxed mb-5 md:mb-6 max-w-3xl mx-auto">
          Explore practical guidance, real-world prevention strategies, and expert security insights from the Fog Bandit team, built to help you protect your business before incidents happen.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 border ${
                active === cat
                  ? "bg-[hsl(225,65%,22%)] text-white border-[hsl(225,65%,22%)]"
                  : "bg-background text-muted-foreground border-border shadow-sm hover:-translate-y-0.5 hover:border-foreground/20 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
