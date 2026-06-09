const CTASection = () => {
  return (
    <section className="pb-[100px] lg:pb-[120px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden md:block relative rounded-[20px] overflow-hidden">
          <img
            src="/Section - NEWSLETTER (1).png"
            alt=""
            className="w-full h-auto"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <h2 className="font-inter text-[28px] lg:text-[32px] font-semibold text-white leading-tight">
              Ready to See It in Your Environment?
            </h2>
            <p className="font-dm-sans text-[15px] lg:text-[16px] text-white/90 font-medium leading-relaxed mt-4 max-w-[620px]">
              Our team can recommend the right Fog Bandit solution for your business and demonstrate how it integrates with your existing security systems.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-[15px] transition-all hover:opacity-90"
              >
                Get a Quote
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12L12 8L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold text-[15px] transition-all hover:opacity-90"
              >
                Talk to Our Team
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12L12 8L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden relative rounded-[20px] overflow-hidden">
          <img
            src="/Section - NEWSLETTER.png"
            alt=""
            className="w-full h-auto"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="font-inter text-[24px] font-semibold text-white leading-tight">
              Ready to See It in Your Environment?
            </h2>
            <p className="font-dm-sans text-[14px] text-white/90 font-medium leading-relaxed mt-3">
              Our team can recommend the right Fog Bandit solution for your business and demonstrate how it integrates with your existing security systems.
            </p>
            <div className="flex flex-col w-full gap-3 mt-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold text-[15px] transition-all hover:opacity-90 w-full"
              >
                Get a Quote
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12L12 8L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-xl font-semibold text-[15px] transition-all hover:opacity-90 w-full"
              >
                Talk to Our Team
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12L12 8L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
