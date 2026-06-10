import { useState } from "react";

interface VideoItem {
  id: string;
  title: string;
  src: string;
  duration?: string;
}

const VideoGrid = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videos: VideoItem[] = [
    {
      id: "1",
      title: "Fog Bandit Protection",
      src: "/assets/videos/left-second-video.mp4",
      duration: "2:00",
    },
    {
      id: "2",
      title: "Real Deployment",
      src: "/assets/videos/left-first-video.mov",
      duration: "2:00",
    },
    {
      id: "3",
      title: "Fog Bandit in Action",
      src: "/assets/videos/central-video.mp4",
      duration: "2:00",
    },
    {
      id: "4",
      title: "Security Demo",
      src: "/assets/videos/right-first-video.mp4",
      duration: "2:00",
    },
    {
      id: "5",
      title: "Live Activation",
      src: "/assets/videos/right-second-video.mp4",
      duration: "2:00",
    },
  ];

  const handlePlayClick = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  const handleVideoPause = () => {
    setPlayingVideo(null);
  };

  return (
    <section className="pb-0 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        {/* Desktop: 5 videos in a row with center one larger */}
        <div className="hidden lg:flex items-center justify-center gap-6 max-w-[1400px] mx-auto">
          {videos.map((video, index) => {
            // Heights: outer (0,4) = 312px, middle (1,3) = 416px, center (2) = 552px
            const heights = {
              0: "h-[312px] w-[234px]",
              1: "h-[416px] w-[312px]",
              2: "h-[552px] w-[414px]",
              3: "h-[416px] w-[312px]",
              4: "h-[312px] w-[234px]",
            };
            return (
              <div
                key={video.id}
                className={`relative group overflow-hidden rounded-[20px] ${heights[index as keyof typeof heights]}`}
              >
                {playingVideo === video.id ? (
                  <video
                    src={video.src}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                    onPause={handleVideoPause}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <>
                    <video
                      src={video.src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                    />

                    <button
                      onClick={() => handlePlayClick(video.id)}
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label={`Play ${video.title}`}
                    >
                      <img
                        src="/assets/play-icon.svg"
                        alt="Play"
                        className={`${
                          index === 2 ? "w-[72px] h-[72px]" : index === 1 || index === 3 ? "w-[64px] h-[64px]" : "w-[56px] h-[56px]"
                        }`}
                      />
                    </button>

                    <div className="absolute bottom-3 left-3">
                      <span className="text-white font-dm-sans font-medium text-[13px] px-1.5 py-0.5">
                        {video.duration}
                      </span>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Tablet: 3 columns grid - only 3 videos with center larger */}
        <div className="hidden md:flex lg:hidden items-center justify-center gap-4 max-w-4xl mx-auto">
          {videos.slice(0, 3).map((video, index) => {
            const tabletStyles = [
              { width: '180px', height: '240px' },
              { width: '240px', height: '320px' },
              { width: '180px', height: '240px' }
            ];
            return (
              <div
                key={video.id}
                style={tabletStyles[index]}
                className="relative group overflow-hidden rounded-[20px] flex-shrink-0"
              >
              {playingVideo === video.id ? (
                <video
                  src={video.src}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                  onEnded={() => setPlayingVideo(null)}
                  onPause={handleVideoPause}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />

                  <button
                    onClick={() => handlePlayClick(video.id)}
                    className="absolute inset-0 flex items-center justify-center transition-transform duration-200 hover:scale-105"
                    aria-label={`Play ${video.title}`}
                  >
                    <img
                      src="/assets/play-icon.svg"
                      alt="Play"
                      className="w-[68px] h-[68px]"
                    />
                  </button>

                  <div className="absolute bottom-3 left-3">
                    <span className="text-white font-dm-sans font-medium text-[13px] px-1.5 py-0.5">
                      {video.duration}
                    </span>
                  </div>
                </>
              )}
            </div>
          );
        })}
        </div>

        {/* Mobile: EXACT heights 289.35/218.06, center full, sides half visible */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex items-center justify-center gap-3 pb-4">
            {videos.slice(0, 3).map((video, index) => {
              // EXACT HEIGHTS: center=289.35px, sides=218.06px - sides cut off
              const getStyle = (idx: number): React.CSSProperties => {
                if (idx === 0 || idx === 2) {
                  return { width: '163.55px', height: '218.06px', minHeight: '218.06px', maxHeight: '218.06px', flexShrink: 0, flexGrow: 0 };
                }
                return { width: '217px', height: '289.35px', minHeight: '289.35px', maxHeight: '289.35px', flexShrink: 0, flexGrow: 0 };
              };
              return (
                <div
                  key={video.id}
                  style={getStyle(index)}
                  className="relative overflow-hidden rounded-[16px]"
                >
                  {playingVideo === video.id ? (
                    <video
                      src={video.src}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                      onEnded={() => setPlayingVideo(null)}
                      onPause={handleVideoPause}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <video
                        src={video.src}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                      />
                      <button
                        onClick={() => handlePlayClick(video.id)}
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label={`Play ${video.title}`}
                      >
                        <img
                          src="/assets/play-icon.svg"
                          alt="Play"
                          className={index === 1 ? "w-[60px] h-[60px]" : "w-[48px] h-[48px]"}
                        />
                      </button>
                      <div className="absolute bottom-2 left-2">
                        <span className="text-white font-dm-sans font-medium text-xs px-1.5 py-0.5">
                          {video.duration}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGrid;
