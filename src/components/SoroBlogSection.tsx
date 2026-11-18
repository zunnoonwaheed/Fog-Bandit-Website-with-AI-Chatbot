import { useEffect } from "react";

const SORO_SCRIPT_SRC =
  "https://app.trysoro.com/api/embed/619c0c44-6ae7-4247-a331-eb7db422ecab";

const SoroBlogSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = SORO_SCRIPT_SRC;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section
      aria-labelledby="soro-blog-heading"
      className="-mt-px bg-gradient-to-b from-[#F9F9F9] via-white to-white pt-12 pb-16 md:pt-16 md:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 font-dm-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Fog Bandit Insights
          </p>
          <h2
            id="soro-blog-heading"
            className="font-inter text-3xl font-semibold tracking-[-0.03em] text-[hsl(220,20%,10%)] md:text-4xl"
          >
            Security insights for your business
          </h2>
          <p className="mt-4 font-dm-sans text-sm leading-relaxed text-[hsl(220,10%,46%)] md:text-base">
            Explore the latest guidance, ideas, and updates from Fog Bandit.
          </p>
        </div>

        <div id="soro-blog" className="min-h-[180px] w-full" />
      </div>
    </section>
  );
};

export default SoroBlogSection;
