import enterpriseScene from "@/assets/env-enterprise.jpg";
import infrastructureScene from "@/assets/env-energy.jpg";
import residentialHome from "@/assets/env-residential.jpg";
import iconEnterprise from "@/assets/icon-env-enterprise.png";
import iconEnergy from "@/assets/icon-env-energy.png";
import iconResidential from "@/assets/icon-env-residential.png";

const environments = [
  {
    title: "Enterprise Security",
    desc: "Secure large-scale operations with a system that reacts instantly, preventing loss, downtime, and operational disruption.",
    image: enterpriseScene,
    icon: iconEnterprise,
  },
  {
    title: "Energy & Infrastructure",
    desc: "Protect critical infrastructure and restricted sites with security that eliminates access the moment a threat is detected.",
    image: infrastructureScene,
    icon: iconEnergy,
  },
  {
    title: "Residential Protection",
    desc: "Give your home more than an alarm — give it the ability to actively stop intruders and protect what matters most.",
    image: residentialHome,
    icon: iconResidential,
  },
];

const EnvironmentsSection = () => {
  return (
    <section className="pb-14 lg:pb-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-heading">
            Built For <span className="text-[#021373]">Environments</span> Where Failure Isn't An Option
          </h2>
          <p className="section-subtext mt-4">
            Fog Bandit is designed for one outcome — stopping intruders before they reach your assets, no
            matter the environment.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Enterprise - spans 1 col, 2 rows */}
          <div className="relative rounded-2xl overflow-hidden min-h-[350px] group">
            <img src={environments[0].image} alt={environments[0].title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <img src={environments[0].icon} alt="" className="w-10 h-10 mb-3" />
              <h3 className="font-heading font-bold text-primary-foreground text-xl">{environments[0].title}</h3>
              <p className="text-primary-foreground/70 text-sm mt-1">{environments[0].desc}</p>
            </div>
          </div>

          {/* Right column - stacked */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden min-h-[220px]">
              <img src={environments[1].image} alt={environments[1].title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <img src={environments[1].icon} alt="" className="w-10 h-10 mb-3" />
                <h3 className="font-heading font-bold text-primary-foreground text-lg">{environments[1].title}</h3>
                <p className="text-primary-foreground/70 text-sm mt-1">{environments[1].desc}</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[220px] bg-gray-100">
              <img src={environments[2].image} alt={environments[2].title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <img src={environments[2].icon} alt="" className="w-10 h-10 mb-3" />
                <h3 className="font-heading font-bold text-primary-foreground text-lg">{environments[2].title}</h3>
                <p className="text-primary-foreground/70 text-sm mt-1">{environments[2].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentsSection;
