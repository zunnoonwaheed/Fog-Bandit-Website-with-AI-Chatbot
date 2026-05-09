import productsLineup from "@/assets/products-lineup.png";
import iconStopwatchRed from "@/assets/icon-stopwatch-red.svg";
import iconShieldRed from "@/assets/icon-shield-red.svg";

const ActiveDefense = () => {
  return (
    <section className="pb-14 md:pb-[100px]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-inter text-[24px] md:text-[32px] font-bold text-[#111827] mb-3">
            The Active Defense Advantage
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[16px] text-[#6B7280] leading-[1.6] max-w-2xl mx-auto">
            Conventional alarms tell you that you're being robbed. Fog Bandit prevents the theft from actually happening.
          </p>
        </div>

        {/* Large image */}
        <div className="relative rounded-[20px] overflow-hidden mb-6 md:mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/20 via-transparent to-[#EF4444]/20"></div>
          <img
            src={productsLineup}
            alt="Fog Bandit product lineup"
            className="w-full h-[280px] md:h-[400px] object-cover relative z-10"
            loading="lazy"
          />
        </div>

        {/* Feature cards + stat */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
          {/* Zero Visibility - spans 2 cols on desktop */}
          <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 md:p-7 flex flex-col items-start md:col-span-2 shadow-sm">
            <div className="w-12 h-12 rounded-[10px] bg-[#FEE2E2] flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#DC2626]">
                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-inter text-[17px] md:text-[19px] font-bold text-[#111827] mb-2.5">
              Zero Visibility in Under 10 Seconds
            </h3>
            <p className="font-dm-sans text-[13px] md:text-[14px] text-[#4B5563] leading-[1.6] mb-5">
              Intruders cannot steal what they cannot see. Our high-pressure technology deploys fog at a speed that creates total disorientation before criminals can react.
            </p>
            <div className="flex gap-2.5 flex-wrap mt-auto">
              <span className="bg-[#F3F4F6] rounded-[8px] px-3.5 py-2 text-[12px] font-medium text-[#374151]">
                Patented Nozzle
              </span>
              <span className="bg-[#F3F4F6] rounded-[8px] px-3.5 py-2 text-[12px] font-medium text-[#374151]">
                Fast-Reaction Sensors
              </span>
            </div>
          </div>

          {/* Safe & Clean */}
          <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 md:p-7 flex flex-col items-start shadow-sm">
            <div className="w-12 h-12 rounded-[10px] bg-[#FEE2E2] flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#DC2626]">
                <path d="M9 12L11 14L15 10M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-inter text-[17px] md:text-[19px] font-bold text-[#111827] mb-2.5">
              Safe & Clean
            </h3>
            <p className="font-dm-sans text-[13px] md:text-[14px] text-[#4B5563] leading-[1.6]">
              The fog is composed of a food- grade glycol mixture. It is completely harmless to humans, animals, electronics, and delicate fabrics.
            </p>
          </div>

          {/* 99% Stat - desktop only */}
          <div className="hidden md:flex bg-white border border-[#E5E7EB] rounded-[16px] p-6 md:p-7 flex-col items-center justify-center text-center shadow-sm">
            <span className="font-inter text-[64px] md:text-[72px] font-bold text-[#021373] leading-none mb-2">99%</span>
            <span className="font-dm-sans text-[14px] md:text-[15px] font-semibold text-[#021373]">Theft Prevention Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveDefense;
