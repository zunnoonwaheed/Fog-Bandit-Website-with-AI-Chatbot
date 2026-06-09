import { useState, useRef } from "react";

const TradingHoursProtection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const features = [
    {
      icon: "/assets/icon-shield.svg",
      title: "Instant Intervention",
      description: "The fog curtain provides an immediate barrier between staff and aggressors.",
    },
    {
      icon: "/assets/icon-disengagement.svg",
      title: "Safe Disengagement",
      description: "Intruders are disoriented and forced to exit the premises immediately.",
    },
    {
      icon: "/assets/icon-zero-damage.svg",
      title: "Zero Damage Deployment",
      description:
        "Our non-toxic, dry fog leaves no residue, ensuring business operations can resume within minutes of an activation.",
    },
  ];

  return (
    <section className="pb-[100px] lg:pb-[120px] bg-[#FFFFFF]">
      <div className="!max-w-[1240px] mx-auto px-4 sm:px-6 lg:!px-8">
        <div className="lg:hidden">
          <div className="text-center mb-8">
            <h2 className="font-inter text-[24px] md:text-[32px] font-semibold text-black leading-tight tracking-tight">
              Trading Hours Protection
            </h2>
            <p className="font-dm-sans text-[14px] md:text-[16px] text-[#666666] font-medium leading-relaxed mt-3 md:mt-4 max-w-[500px] mx-auto">
              Fog Bandit uses a clean, residue-free security fog designed to protect your home without
              harming people, pets, or belongings.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[20px] cursor-pointer mb-8 h-[206px]">
            {isPlaying ? (
              <video
                ref={videoRef}
                src="/assets/videos/panic-button-demo.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
                playsInline
                onEnded={() => setIsPlaying(false)}
                onPause={handleVideoPause}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="w-full h-full"
                aria-label="Play Panic Button Activation Demo"
              >
                <img
                  src="/Container.png"
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            )}
          </div>

          <div className="space-y-5">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <img src={feature.icon} alt="" className="shrink-0 w-12 h-12" />
                <div>
                  <h3 className="font-inter text-[17px] font-semibold text-[#1A1A1A] leading-snug">
                    {feature.title}
                  </h3>
                  <p className="font-dm-sans text-[14px] text-[#666666] leading-[1.55]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h2 className="font-inter text-[32px] font-semibold text-black leading-tight tracking-tight">
              Trading Hours Protection
            </h2>
            <p className="font-dm-sans text-[16px] text-[#666666] font-medium leading-relaxed mt-4 mb-8">
              Fog Bandit uses a clean, residue-free security fog designed to protect your home without
              harming people, pets, or belongings.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <img src={feature.icon} alt="" className="shrink-0 w-12 h-12" />
                  <div>
                    <h3 className="font-inter text-[18px] font-semibold text-[#1A1A1A] leading-snug">
                      {feature.title}
                    </h3>
                    <p className="font-dm-sans text-[15px] text-[#666666] leading-[1.55]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[20px] cursor-pointer h-[500px]">
            {isPlaying ? (
              <video
                ref={videoRef}
                src="/assets/videos/panic-button-demo.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
                playsInline
                onEnded={() => setIsPlaying(false)}
                onPause={handleVideoPause}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="w-full h-full"
                aria-label="Play Panic Button Activation Demo"
              >
                <img
                  src="/Container (7).png"
                  alt=""
                  className="w-full h-full object-cover"
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

export default TradingHoursProtection;
