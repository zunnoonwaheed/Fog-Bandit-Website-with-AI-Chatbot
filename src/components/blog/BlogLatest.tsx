import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import auditImg from "@/assets/blog-audit.png";
import smashImg from "@/assets/blog-smash.png";
import warehouseImg from "@/assets/blog-warehouse.png";
import tacticsImg from "@/assets/blog-tactics.png";
import retailImg from "@/assets/blog-retail.png";
import upgradeImg from "@/assets/blog-upgrade.png";

const articles = [
  {
    img: auditImg,
    category: "THEFT PREVENTION",
    title: "Security Audit Checklist",
    desc: "Identify gaps in your current security setup before they become costly risks.",
    date: "Jan 30, 2025",
    readTime: "5 min",
  },
  {
    img: smashImg,
    category: "PRODUCT UPDATES",
    title: "Stop Smash-and-Grab",
    desc: "Learn how modern retailers prevent rapid-entry theft before damage occurs.",
    date: "Jan 30, 2025",
    readTime: "5 min",
  },
  {
    img: warehouseImg,
    category: "INDUSTRY KNOWLEDGE",
    title: "Warehouse Risk Control",
    desc: "Protect inventory and operations from after-hours intrusion threats.",
    date: "Jan 30, 2025",
    readTime: "5 min",
  },
  {
    img: tacticsImg,
    category: "SECURITY AWARENESS",
    title: "Modern Theft Tactics",
    desc: "Understand how criminals target businesses today — and how to respond.",
    date: "Jan 30, 2025",
    readTime: "5 min",
  },
  {
    img: retailImg,
    category: "INDUSTRY KNOWLEDGE",
    title: "Retail Protection Strategy",
    desc: "Reduce exposure to high-value product theft with proactive security planning.",
    date: "Jan 30, 2025",
    readTime: "5 min",
  },
  {
    img: upgradeImg,
    category: "THEFT PREVENTION",
    title: "Business Security Upgrade",
    desc: "Know when your current system is no longer enough to stop intrusion.",
    date: "Jan 30, 2025",
    readTime: "5 min",
  },
];

const BlogLatest = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2 leading-snug">
            Latest security insights
          </h2>
          <p className="font-dm-sans text-muted-foreground text-[14px] md:text-[16px] leading-relaxed">
            Stay ahead with practical guidance designed to help you assess risk, strengthen protection, and make confident security decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px] mx-auto">
          {articles.map((a, i) => (
            <article key={i} className="bg-background border border-border rounded-xl overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[hsl(225,65%,22%)] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {a.category}
                </span>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-inter font-bold text-foreground text-[16px] mb-1.5">{a.title}</h3>
                <p className="font-dm-sans text-muted-foreground text-[13px] leading-relaxed mb-4">{a.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-[12px]">{a.date} · {a.readTime}</span>
                  <a href="#" className="text-primary text-[13px] font-medium flex items-center gap-1 hover:underline">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Button
            variant="outline"
            className="rounded-lg px-6 h-11 text-[13px] font-semibold bg-background border-border text-foreground hover:bg-muted"
          >
            Load More Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogLatest;
