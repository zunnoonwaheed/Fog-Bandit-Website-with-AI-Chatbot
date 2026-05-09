import { useState } from "react";

const categories = ["All", "Security Awareness", "Theft Prevention", "Product Updates", "Industry Knowledge"];

const BlogHero = () => {
  const [active, setActive] = useState("All");

  return (
    <section className="pt-32 pb-4 md:pt-[168px] md:pb-8 lg:pt-[228px]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground leading-tight mb-3 md:mb-4 max-w-3xl mx-auto">
          <span className="text-primary">Security Insights</span> From People Who Stop Theft For A Living
        </h1>
        <p className="font-dm-sans text-muted-foreground text-[14px] md:text-[18px] font-medium leading-relaxed mb-5 md:mb-6 max-w-3xl mx-auto">
          Explore practical guidance, real-world prevention strategies, and expert security insights from the Fog Bandit team, built to help you protect your business before incidents happen.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors border ${
                active === cat
                  ? "bg-[hsl(225,65%,22%)] text-white border-[hsl(225,65%,22%)]"
                  : "bg-background text-muted-foreground border-border hover:border-foreground/30"
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
