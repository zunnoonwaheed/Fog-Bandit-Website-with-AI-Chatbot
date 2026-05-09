import { ArrowRight } from "lucide-react";
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
    assetsSaved: "$150K",
    attemptsStopped: "3",
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
    assetsSaved: "$1.2M",
    attemptsStopped: "1",
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
    assetsSaved: "$220K",
    attemptsStopped: "4",
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
    assetsSaved: "$95K",
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
    assetsSaved: "$480K",
    attemptsStopped: "7",
    itemsStolen: "0",
    author: "Lucas M.",
    authorRole: "Ops Manager, FastFreight",
    avatar: avatarLucas,
  },
];

const CaseStudiesGrid = () => {
  return (
    <section id="case-studies-grid" className="py-8 md:py-12 scroll-mt-24">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.map((cs, i) => (
            <article key={i} className="border border-border rounded-xl overflow-hidden shadow-sm group cursor-pointer bg-background">
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
                <h3 className="font-bold text-[#021373] text-[14px] md:text-[15px] mb-1">{cs.title}</h3>
                <p className="text-muted-foreground text-[12px] md:text-[13px] leading-relaxed mb-4">{cs.desc}</p>

                {/* Stats row */}
                <div className="flex items-start justify-between gap-3 pb-4 mb-4 border-b border-border sm:gap-4">
                  <div className="min-w-0 flex-1 text-center sm:text-left">
                    <p className="font-inter font-bold tabular-nums text-[#021373] text-[17px] md:text-[18px] leading-none tracking-tight">
                      {cs.assetsSaved}
                    </p>
                    <p className="text-muted-foreground text-[10px] mt-1.5 leading-tight">Assets Saved</p>
                  </div>
                  <div className="min-w-0 flex-1 text-center sm:text-left">
                    <p className="font-inter font-bold tabular-nums text-[#021373] text-[17px] md:text-[18px] leading-none tracking-tight">
                      {cs.attemptsStopped}
                    </p>
                    <p className="text-muted-foreground text-[10px] mt-1.5 leading-tight">Attempt Stopped</p>
                  </div>
                  <div className="min-w-0 flex-1 text-center sm:text-left">
                    <p className="font-inter font-bold tabular-nums text-[#021373] text-[17px] md:text-[18px] leading-none tracking-tight">
                      {cs.itemsStolen}
                    </p>
                    <p className="text-muted-foreground text-[10px] mt-1.5 leading-tight">Items Stolen</p>
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
                  <a
                    href="#contact"
                    className="text-[#021373] text-[12px] font-semibold flex items-center gap-1 shrink-0 hover:underline"
                  >
                    Read <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
