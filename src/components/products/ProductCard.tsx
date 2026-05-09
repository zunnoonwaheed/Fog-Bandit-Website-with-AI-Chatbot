import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  applications?: string[];
  specifications?: string[];
  large?: boolean;
}

const ProductCard = ({
  image,
  title,
  description,
  features,
  applications,
  specifications,
  large = false,
}: ProductCardProps) => {
  const [activeTab, setActiveTab] = useState<"features" | "applications" | "specifications">("features");

  const tabs = [
    { id: "features" as const, label: "Features", content: features },
    ...(applications ? [{ id: "applications" as const, label: "Applications", content: applications }] : []),
    ...(specifications ? [{ id: "specifications" as const, label: "Specifications", content: specifications }] : []),
  ];

  const activeContent = activeTab === "features" ? features : activeTab === "applications" ? applications : specifications;

  return (
    <div className={`flex h-full flex-col bg-white rounded-[16px] overflow-hidden border border-[#E5E7EB] shadow-sm ${large ? "min-h-[600px] md:min-h-[700px]" : "min-h-[550px]"}`}>
      {/* Image */}
      <div className={`relative overflow-hidden h-[280px] flex-none ${large ? "md:h-[320px]" : "md:h-[240px]"}`}>
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <h3 className="text-[16px] md:text-[17px] font-bold text-[#111827] leading-snug mb-1.5">
          {title}
        </h3>
        <p className="text-[12px] md:text-[13px] text-[#6B7280] leading-relaxed mb-4">
          {description}
        </p>

        {/* Tabs */}
        <div className="flex items-center gap-5 border-b border-[#E5E7EB] mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2.5 text-[12px] md:text-[13px] font-semibold transition-colors relative ${
                activeTab === tab.id
                  ? "text-[#021373]"
                  : "text-[#6B7280] hover:text-[#111827]"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#021373]" />
              )}
            </button>
          ))}
        </div>

        {/* Content List */}
        <div className="space-y-2.5 mb-5 flex-1">
          {activeContent?.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="w-[18px] h-[18px] rounded-full bg-[#021373] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-[11px] w-[11px] text-white" strokeWidth={3} />
              </div>
              <p className="text-[12px] md:text-[13px] text-[#374151] leading-[1.6] flex-1">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <Button asChild className="w-auto self-start bg-[#FFE4E9] text-[#DC2626] hover:bg-[#FFDDE3] rounded-[8px] h-9 px-4 text-[12px] md:text-[13px] font-semibold shadow-none border-0">
          <Link to="/contact">Get a Quote</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
