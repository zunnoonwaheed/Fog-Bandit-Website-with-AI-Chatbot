import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import iconSpeed from "@/assets/icon-speed.svg";
import iconDensity from "@/assets/icon-density.svg";
import iconSafety from "@/assets/icon-safety.svg";

interface ProductCardProps {
  image: string;
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle: string;
  description: string;
  speed: string;
  density: string;
  safety: string;
  large?: boolean;
}

const ProductCard = ({
  image,
  badge,
  badgeColor = "bg-accent",
  title,
  subtitle,
  description,
  speed,
  density,
  safety,
  large = false,
}: ProductCardProps) => {
  return (
    <div className="flex h-[672px] flex-col md:h-auto">
      {/* Image */}
      <div className={`relative rounded-2xl overflow-hidden mb-4 h-[300px] flex-none md:h-auto ${large ? "md:aspect-[16/10]" : "md:aspect-[4/3]"}`}>
        {badge && (
          <span className={`absolute top-3 left-3 z-10 ${badgeColor} text-[10px] md:text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-md text-white`}>
            {badge}
          </span>
        )}
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Content */}
      <h3 className="text-[16px] md:text-[17px] font-bold text-foreground leading-snug mb-0.5">
        {title}
      </h3>
      <p className="text-[12px] md:text-[13px] text-muted-foreground mb-1">{subtitle}</p>
      <p className="text-[12px] md:text-[13px] text-muted-foreground leading-relaxed mb-3">
        {description}
      </p>

      {/* Specs */}
      <div className="space-y-2.5 mb-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[13px] font-semibold text-foreground block mb-0.5">Speed</span>
            <p className="text-[12px] text-muted-foreground leading-relaxed">{speed}</p>
          </div>
          <img src={iconSpeed} alt="" className="h-4 w-4 object-contain flex-shrink-0 mt-0.5" />
        </div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[13px] font-semibold text-foreground block mb-0.5">Density</span>
            <p className="text-[12px] text-muted-foreground leading-relaxed">{density}</p>
          </div>
          <img src={iconDensity} alt="" className="h-4 w-4 object-contain flex-shrink-0 mt-0.5" />
        </div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[13px] font-semibold text-foreground block mb-0.5">Safety</span>
            <p className="text-[12px] text-muted-foreground leading-relaxed">{safety}</p>
          </div>
          <img src={iconSafety} alt="" className="h-4 w-4 object-contain flex-shrink-0 mt-0.5" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between gap-3 md:mt-auto">
        <a href="#" className="text-[13px] font-semibold text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
          Details <ArrowRight className="hidden md:inline-block h-3.5 w-3.5" />
        </a>
        <Button className="bg-[#FFDDE3] text-primary hover:bg-[#FFDDE3]/80 rounded-lg px-4 h-9 text-[12px] md:text-[13px] font-semibold shadow-none">
          Get a Quote
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
