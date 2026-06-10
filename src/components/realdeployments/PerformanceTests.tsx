import { useState } from "react";

const PerformanceTests = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const smallTests = [
    { id: "1", title: "Retail Store Test", video: "/assets/videos/fog-bandit-demo.mp4" },
    { id: "2", title: "Warehouse Test", video: "/assets/videos/domestic-demo.mp4" },
    { id: "3", title: "Automotive Workshop", video: "/assets/videos/right-first-video.mp4" },
    { id: "4", title: "Small Footprint Test", video: "/assets/videos/deployment-3.mov" },
    { id: "5", title: "Enterprise Test", video: "/assets/videos/deployment-2.mp4" },
    { id: "6", title: "Narrow Space Test", video: "/assets/videos/left-second-video.mp4" },
  ];

  const featuredTest = {
    id: "featured",
    title: "Jewellery Store Test",
    subtitle: "Full Sequence: Detection to Obscuration (2:45)",
    video: "/assets/videos/central-video.mp4",
  };

  const handlePlayClick = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  const handleVideoPause = () => {
    setPlayingVideo(null);
  };

  return (
    <section className="pt-[100px] lg:pt-[120px] pb-0 bg-[#FFFFFF]">
      <div className="!max-w-[1240px] mx-auto px-4 sm:px-6 lg:!px-8">
        <div className="mb-8 lg:hidden text-left">
          <h2 className="section-heading">
            Real-Time Performance Tests
          </h2>
          <p className="font-dm-sans text-foreground text-[16px]">
            Rigorous field testing across various vertical markets to ensure maximum protection effectiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-end">
          <div className="hidden lg:block text-left">
            <div className="mb-12">
              <h2 className="section-heading">
                Real-Time Performance Tests
              </h2>
              <p className="font-dm-sans text-foreground text-[16px]">
                Rigorous field testing across various vertical markets to ensure maximum protection effectiveness.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-[29px]">
              {smallTests.map((test) => (
                <div key={test.id} className="flex flex-col">
                  <div className="relative overflow-hidden rounded-[16px] h-[167.44px] group cursor-pointer">
                    {playingVideo === test.id ? (
                      <video
                        src={test.video}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        onEnded={() => setPlayingVideo(null)}
                        onPause={handleVideoPause}
                        preload="auto"
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <>
                        <video
                          src={test.video}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          preload="metadata"
                          loading="lazy"
                        />
                        <button
                          onClick={() => handlePlayClick(test.id)}
                          className="absolute inset-0 flex items-center justify-center transition-transform duration-200 hover:scale-110"
                          aria-label={`Play ${test.title}`}
                        >
                          <img src="/assets/play-icon.svg" alt="Play" className="w-12 h-12" loading="lazy" />
                        </button>
                      </>
                    )}
                  </div>
                  <h3 className="font-dm-sans text-foreground font-semibold text-[13px] mt-2 leading-tight">
                    {test.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[20px] group cursor-pointer h-[232px] lg:h-[617.71px]">
              {playingVideo === featuredTest.id ? (
                <video
                  src={featuredTest.video}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  onEnded={() => setPlayingVideo(null)}
                  onPause={handleVideoPause}
                  preload="auto"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  <video
                    src={featuredTest.video}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                    loading="lazy"
                  />
                  <button
                    onClick={() => handlePlayClick(featuredTest.id)}
                    className="absolute inset-0"
                    aria-label={`Play ${featuredTest.title}`}
                  />
                  <div className="absolute bottom-6 left-6 pointer-events-none">
                    <div className="flex items-center gap-2 mb-1">
                      <img src="/assets/play-icon.svg" alt="" className="w-8 h-8" loading="lazy" />
                      <h3 className="font-dm-sans text-white font-semibold text-[16px]">
                        {featuredTest.title}
                      </h3>
                    </div>
                    <p className="font-dm-sans text-white/80 text-[13px] ml-10">
                      {featuredTest.subtitle}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceTests;
