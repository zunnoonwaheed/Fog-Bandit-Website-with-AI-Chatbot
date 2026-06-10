import { useState, useRef } from "react";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="pt-[100px] lg:pt-[120px] pb-0 bg-[#FFFFFF]">
      <div className="!max-w-[1240px] mx-auto px-4 sm:px-6 lg:!px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">
            How Fog Bandit <span className="text-primary">Works</span>
          </h2>
          <p className="font-dm-sans text-foreground text-[16px] md:text-[18px] font-normal leading-relaxed max-w-[950px] mx-auto">
            Watch a complete demonstration showing how Fog Bandit detects threats and fills a protected area with dense security fog in seconds.
          </p>
        </div>

        <div className="w-full">
          <div
            className="hidden md:block relative overflow-hidden rounded-[20px] cursor-pointer group"
            onClick={handlePlayClick}
          >
            <video
              ref={videoRef}
              src="/assets/videos/office-protection-demo.mp4"
              poster="/assets/video-poster.png"
              className="w-full h-full object-cover"
              playsInline
              preload="none"
              loading="lazy"
              onPause={handleVideoPause}
              onEnded={() => setIsPlaying(false)}
              controls={isPlaying}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div
            className="md:hidden relative overflow-hidden rounded-[20px] cursor-pointer group"
            onClick={handlePlayClick}
          >
            <video
              src="/assets/videos/office-protection-demo.mp4"
              poster="/assets/demo-background-mobile.png"
              className="w-full h-full object-cover"
              playsInline
              preload="none"
              loading="lazy"
              onPause={handleVideoPause}
              onEnded={() => setIsPlaying(false)}
              controls={isPlaying}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
