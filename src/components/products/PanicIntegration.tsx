import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPanicAlert from "@/assets/icon-panic-alert.svg";
import iconStopwatch from "@/assets/icon-stopwatch.svg";

const PanicIntegration = () => {
  return (
    <section className="pb-14 md:pb-[80px]">
      <div className="container mx-auto px-4">
        <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-5 md:gap-8 shadow-sm">
          <div className="flex items-start gap-4 md:gap-5 flex-1">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-[12px] bg-[#FEE2E2] flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#DC2626]">
                <path d="M12 9V13M12 17H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0377 2.66667 10.2679 4L3.33975 16C2.56995 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-inter text-[17px] md:text-[19px] font-bold text-[#111827] mb-2.5">
                Immediate Tactical Defense: Panic Integration
              </h3>
              <p className="font-dm-sans text-[13px] md:text-[14px] text-[#4B5563] leading-[1.6] mb-3">
                Fog Bandit devices are not just for after-hours. Integrated with discreet panic buttons, our systems provide immediate defense during trading hours, creating an impenetrable visual barrier in seconds to protect your staff and assets from aggressive robberies.
              </p>
              <div className="inline-flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-3 py-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-[#021373]">
                  <path d="M8 3.5V8L10.5 9.5M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-dm-sans text-[12px] md:text-[13px] font-semibold text-[#021373]">Certified 0.1s Response Time</span>
              </div>
            </div>
          </div>
          <Button asChild className="bg-[#111827] text-white hover:bg-[#1F2937] rounded-[10px] px-6 h-11 text-[13px] md:text-[14px] font-semibold whitespace-nowrap flex-shrink-0 w-full md:w-auto shadow-none">
            <Link to="/case-studies">
              Explore Case Studies
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PanicIntegration;
