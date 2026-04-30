import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import retailImg from "@/assets/casestudy-retail.jpg";
import warehouseImg from "@/assets/casestudy-warehouse.jpg";
import jewelleryImg from "@/assets/casestudy-jewellery.jpg";
import hospitalityImg from "@/assets/casestudy-hospitality.jpg";
import officeImg from "@/assets/casestudy-office.jpg";
import multisiteImg from "@/assets/casestudy-multisite.jpg";
import avatarJames from "@/assets/avatar-james.png";
import avatarOliver from "@/assets/avatar-oliver.png";
import avatarLiam from "@/assets/avatar-liam.png";
import avatarEthan from "@/assets/avatar-ethan.png";
import avatarNoah from "@/assets/avatar-noah.png";
import avatarLucas from "@/assets/avatar-lucas.png";

const caseStudies = [
  {
    img: retailImg,
    category: "Warehousing",
    catColor: "bg-[hsl(220,60%,20%)]",
    title: "Retail Theft Stopped",
    desc: "Fog quickly stopped a smash-and-grab attempt before stock was reached.",
    assetsSaved: "$80K",
    attemptsStopped: "2",
    itemsStolen: "0",
    author: "James R.",
    authorRole: "Ops Manager, FastFreight",
    avatar: avatarJames,
  },
  {
    img: warehouseImg,
    category: "Healthcare",
    catColor: "bg-[hsl(220,60%,20%)]",
    title: "Warehouse Intrusion Prevented",
    desc: "After-hours entry was neutralised as visibility dropped to zero.",
    assetsSaved: "$80K",
    attemptsStopped: "2",
    itemsStolen: "0",
    author: "Oliver T.",
    authorRole: "Ops Manager, FastFreight",
    avatar: avatarOliver,
  },
  {
    img: jewelleryImg,
    category: "Finance",
    catColor: "bg-[hsl(220,60%,20%)]",
    title: "Jewellery Store Protected",
    desc: "Inventory stayed safe after Fog Bandit halted intruders.",
    assetsSaved: "$80K",
    attemptsStopped: "2",
    itemsStolen: "0",
    author: "Liam S.",
    authorRole: "Ops Manager, FastFreight",
    avatar: avatarLiam,
  },
  {
    img: hospitalityImg,
    category: "Hospitality",
    catColor: "bg-[hsl(220,60%,20%)]",
    title: "Logistics Cargo Secured",
    desc: "Cargo theft attempt was halted, protecting shipments.",
    assetsSaved: "$80K",
    attemptsStopped: "2",
    itemsStolen: "0",
    author: "Ethan J.",
    authorRole: "Ops Manager, FastFreight",
    avatar: avatarEthan,
  },
  {
    img: officeImg,
    category: "Retail",
    catColor: "bg-[hsl(220,60%,20%)]",
    title: "Office Assets Protected",
    desc: "Equipment and documents remained secure after rapid deployment forced intruders to exit.",
    assetsSaved: "$80K",
    attemptsStopped: "2",
    itemsStolen: "0",
    author: "Noah K.",
    authorRole: "Ops Manager, FastFreight",
    avatar: avatarNoah,
  },
  {
    img: multisiteImg,
    category: "Warehousing",
    catColor: "bg-[hsl(220,60%,20%)]",
    title: "Multi-Site Theft Blocked",
    desc: "Break-ins stopped after system rollout across retail.",
    assetsSaved: "$80K",
    attemptsStopped: "2",
    itemsStolen: "0",
    author: "Lucas M.",
    authorRole: "Ops Manager, FastFreight",
    avatar: avatarLucas,
  },
];

const CaseStudiesGrid = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const visible = caseStudies.slice(0, visibleCount);
  const hasMore = visibleCount < caseStudies.length;
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <h2 className="font-inter text-[20px] md:text-[28px] font-semibold text-foreground mb-2 leading-snug">
            <span className="md:hidden">Explore Protection Across Industries</span>
            <span className="hidden md:inline">Explore protection across industries</span>
          </h2>
          <p className="font-dm-sans text-muted-foreground text-[14px] md:text-[18px] font-medium leading-relaxed">
            <span className="md:hidden">See real examples of how Fog Bandit stopped theft in logistics and retail.</span>
            <span className="hidden md:inline">Browse real deployments showing how Fog Bandit prevented theft across logistics, retail, infrastructure, and commercial environments.</span>
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:overflow-visible">
          {visible.map((cs, i) => (
            <article key={i} className="w-[300px] max-w-[calc(100vw-32px)] flex-none snap-start md:w-auto md:max-w-none border border-border rounded-xl overflow-hidden group cursor-pointer bg-background">
              <div className="relative">
                <img
                  src={cs.img}
                  alt={cs.title}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className={`absolute top-3 left-3 ${cs.catColor} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded`}>
                  {cs.category}
                </span>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-bold text-foreground text-[14px] md:text-[15px] mb-1">{cs.title}</h3>
                <p className="text-muted-foreground text-[12px] md:text-[13px] leading-relaxed mb-4">{cs.desc}</p>

                {/* Stats row */}
                <div className="flex items-center gap-6 pb-4 mb-4 border-b border-border">
                  <div>
                    <p className="font-bold text-accent text-[15px] leading-tight">{cs.assetsSaved}</p>
                    <p className="text-muted-foreground text-[10px] mt-0.5">Assets Saved</p>
                  </div>
                  <div>
                    <p className="font-bold text-accent text-[15px] leading-tight">{cs.attemptsStopped}</p>
                    <p className="text-muted-foreground text-[10px] mt-0.5">Attempt Stopped</p>
                  </div>
                  <div>
                    <p className="font-bold text-accent text-[15px] leading-tight">{cs.itemsStolen}</p>
                    <p className="text-muted-foreground text-[10px] mt-0.5">Items Stolen</p>
                  </div>
                </div>

                {/* Author + Read */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={cs.avatar} alt={cs.author} className="w-7 h-7 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="text-foreground text-[12px] font-semibold">{cs.author}</p>
                      <p className="text-muted-foreground text-[10px]">{cs.authorRole}</p>
                    </div>
                  </div>
                  <a href="#contact" className="text-accent text-[12px] font-semibold flex items-center gap-1 hover:underline">
                    Read full case study <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setVisibleCount((c) => Math.min(c + 3, caseStudies.length))}
              variant="outline"
              className="rounded-lg px-6 h-10 text-[13px] font-semibold bg-card border-border text-foreground hover:bg-muted shadow-sm"
            >
              Load More Case Studies
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
