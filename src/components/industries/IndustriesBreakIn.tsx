import teamImg from "@/assets/industries-team.png";
import operationalImg from "@/assets/industries-operational.png";
import brandImg from "@/assets/industries-brand.png";
import iconStorefront from "@/assets/icon-storefront.svg";
import iconClock from "@/assets/icon-clock-rotate.svg";
import iconBadge from "@/assets/icon-badge-check.svg";

const items = [
  {
    icon: iconStorefront,
    title: "Protect your team, not just your assets",
    desc: "Ensure staff peace of mind with a system that responds instantly. Fog Bandit effectively neutralises threats, even during hours.",
    image: teamImg,
    imageAlt: "Office workers protected by Fog Bandit",
    reverse: false,
  },
  {
    icon: iconClock,
    title: "Stay open. Stay operational.",
    desc: "A single break-in can shut down operations for days. Fog Bandit stops the incident before damage occurs — so your business can continue without interruption.",
    image: operationalImg,
    imageAlt: "Bicycle warehouse stay operational",
    reverse: true,
  },
  {
    icon: iconBadge,
    title: "Protect the brand you've built",
    desc: "Avoid the visible damage and negative perception that follows a break-in. Fog Bandit helps maintain your reputation by preventing incidents before they happen.",
    image: brandImg,
    imageAlt: "Car showroom protected by Fog Bandit",
    reverse: false,
  },
];

const IndustriesBreakIn = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-7 md:mb-10">
          <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2 leading-snug">
            A break-in costs more than what's stolen
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground leading-relaxed max-w-xl mx-auto">
            The real cost of theft goes beyond inventory — it impacts staff safety, operations, and your brand reputation. Fog Bandit prevents the incident entirely, eliminating downstream losses.
          </p>
        </div>

        <div className="space-y-4 md:space-y-5 max-w-[1200px] mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-2xl p-4 md:p-8"
            >
              <div className={`grid grid-cols-1 md:grid-cols-[561px_1fr] gap-5 md:gap-10 items-center ${item.reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full md:w-[561px] md:h-[350px] h-auto object-cover aspect-[561/350]"
                    loading="lazy"
                  />
                </div>
                <div>
                  <img src={item.icon} alt="" className="h-7 w-7 md:h-8 md:w-8 mb-3 md:mb-4" />
                  <h3 className="font-inter text-[18px] md:text-[22px] font-bold text-foreground mb-2 md:mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-dm-sans text-[13px] md:text-[15px] text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesBreakIn;
