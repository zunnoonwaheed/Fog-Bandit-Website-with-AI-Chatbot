import { ArrowRight } from "lucide-react";
import iconShield from "@/assets/topic-shield.svg";
import iconLock from "@/assets/topic-lock.svg";
import iconCheck from "@/assets/topic-check.svg";
import iconCap from "@/assets/topic-cap.svg";

const topics = [
  {
    icon: iconShield,
    title: "Security Awareness",
    desc: "Understand how threats are evolving, and why active prevention is replacing traditional detection.",
    link: "Browse awareness guides",
  },
  {
    icon: iconLock,
    title: "Theft Prevention",
    desc: "Learn practical strategies businesses use today to reduce risk and prevent break-ins before they happen.",
    link: "Explore prevention strategies",
  },
  {
    icon: iconCheck,
    title: "Product Updates",
    desc: "Stay informed about new system capabilities, integrations, and performance improvements from Fog Bandit.",
    link: "See what's new",
  },
  {
    icon: iconCap,
    title: "Industry Knowledge",
    desc: "Access expert commentary, compliance insights, and security trends shaping businesses across ANZ.",
    link: "View industry insights",
  },
];

const BlogTopics = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2 leading-snug">
            Explore <span className="text-primary">Security Topics</span> That Matter To Your Business
          </h2>
          <p className="font-dm-sans text-muted-foreground text-[13px] md:text-[15px] leading-relaxed">
            Whether you're reviewing your current setup or planning improvements, start with the insights most relevant to your environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1200px] mx-auto">
          {topics.map((t, i) => (
            <div key={i} className="bg-background border border-border rounded-xl p-5 md:p-6 flex flex-col">
              <img src={t.icon} alt="" className="h-8 w-8 mb-4" />
              <h3 className="font-inter font-bold text-foreground text-[15px] mb-1.5">{t.title}</h3>
              <p className="font-dm-sans text-muted-foreground text-[13px] leading-relaxed mb-4 flex-1">{t.desc}</p>
              <a href="#" className="text-primary text-[13px] font-medium flex items-center gap-1 hover:underline">
                {t.link} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTopics;
