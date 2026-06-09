import { useState } from "react";

function WhiteCheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0" aria-hidden>
      <path
        d="M7.96875 15L16.9688 6L15.5625 4.54688L7.96875 12.1406L4.40625 8.57812L3 9.98438L7.96875 15ZM2.92969 2.92969C4.88281 0.976562 7.23438 0 9.98438 0C12.7344 0 15.0859 0.976562 17.0391 2.92969C18.9922 4.88281 19.9688 7.23438 19.9688 9.98438C19.9688 12.7344 18.9922 15.0859 17.0391 17.0391C15.0859 18.9922 12.7344 19.9688 9.98438 19.9688C7.23438 19.9688 4.88281 18.9922 2.92969 17.0391C0.976562 15.0859 0 12.7344 0 9.98438C0 7.23438 0.976562 4.88281 2.92969 2.92969Z"
        fill="#021373"
      />
    </svg>
  );
}

const ComparisonSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    "Instant Intervention - The fog curtain provides an immediate barrier between staff and aggressors.",
    "Safe Disengagement - Intruders are disoriented and forced to exit the premises immediately.",
    "Zero Damage Deployment - Our non-toxic, dry fog leaves no residue, ensuring business operations can resume within minutes of an activation.",
  ];

  return (
    <section className="py-14 lg:py-[120px] bg-[#F5F5F5]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-2 md:pt-0">
          <h2 className="font-inter text-[24px] md:text-[32px] font-semibold text-black leading-tight tracking-tight">
            Trading Hours Protection
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[16px] text-[#666666] font-medium leading-relaxed mt-3 md:mt-4 max-w-[720px] mx-auto">
            Fog Bandit uses a clean, residue-free security fog designed to protect your home without harming people, pets, or belongings.
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <div className="bg-white rounded-2xl p-7 md:p-9 border border-[#E8E8E8] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <ul className="space-y-4 md:space-y-5">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <WhiteCheckCircle />
                  <span className="font-dm-sans text-[14px] md:text-[15px] text-[#444444] leading-snug pt-0.5">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 md:mt-6">
          <div className="relative overflow-hidden rounded-[20px] aspect-[16/10] sm:aspect-[604/350] cursor-pointer">
            {isPlaying ? (
              <video
                src="/assets/videos/panic-button-demo.mp4"
                controls
                autoPlay
                className="absolute inset-0 w-full h-full object-cover"
                playsInline
                onEnded={() => setIsPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0"
                aria-label="Play Panic Button Activation Demo"
              >
                <img
                  src="/Container (5).png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
