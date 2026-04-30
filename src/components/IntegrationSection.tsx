import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import alarmImg from "@/assets/alarm-integration.png";
import policeImg from "@/assets/police-dispatch.png";
import appImg from "@/assets/app-notifications.png";
import iconAlarm from "@/assets/icon-alarm.png";
import iconPolice from "@/assets/icon-police.png";
import iconBell from "@/assets/icon-bell.png";

const integrations = [
  {
    img: alarmImg,
    title: "Alarm Integration",
    description: "Connects directly with your alarm system to trigger instant fog deployment.",
    icon: iconAlarm,
  },
  {
    img: policeImg,
    title: "Police Dispatch",
    description: "Triggers alerts to monitoring services and authorities while the fog secures the space.",
    icon: iconPolice,
  },
  {
    img: appImg,
    title: "App Notifications",
    description: "Stay informed with real-time alerts and system updates directly on your device.",
    icon: iconBell,
  },
];

const IntegrationSection = () => {
  return (
    <section className="pb-14 md:pb-[120px]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-3 md:mb-4 leading-snug">
          Works with the systems you already trust
        </h2>
        <p className="font-dm-sans text-[14px] md:text-[20px] font-medium text-muted-foreground max-w-2xl mx-auto mb-7 md:mb-8 leading-relaxed">
          Fog Bandit integrates effortlessly into your existing security setup, enhancing your protection without replacing your infrastructure.
        </p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 md:px-8 h-11 md:h-12 text-[14px] md:text-[15px] font-semibold gap-2 mb-10 md:mb-12">
          <Link to="/products">
            See compatible systems <ArrowDown className="h-4 w-4" />
          </Link>
        </Button>

        {/* Mobile: horizontal snap carousel — one card per view with L/R inset */}
        <div className="md:hidden -mx-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">
          <div className="flex gap-4 px-6 pb-2">
            {integrations.map((item, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[calc(100vw-3rem)] bg-background rounded-2xl overflow-hidden border border-border p-3 text-left"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 object-cover rounded-xl mb-4"
                  loading="lazy"
                />
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-foreground text-[16px]">{item.title}</h3>
                  <img src={item.icon} alt="" className="w-8 h-8 flex-shrink-0" />
                </div>
                <p className="text-[13px] text-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {integrations.map((item, i) => (
            <div key={i} className="bg-background rounded-2xl overflow-hidden border border-border p-4 text-left">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover rounded-xl mb-4"
                loading="lazy"
              />
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-foreground text-[18px]">{item.title}</h3>
                <img src={item.icon} alt="" className="w-9 h-9 flex-shrink-0" />
              </div>
              <p className="text-[14px] text-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
