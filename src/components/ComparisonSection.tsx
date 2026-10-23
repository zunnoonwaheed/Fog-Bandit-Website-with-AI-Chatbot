import { useEffect, useRef, useState } from "react";

const traditionalItems = [
  "Records footage after an incident",
  "Evidence comes after a loss",
  "Does not disrupt a robbery in progress",
];

const fogBanditItems = [
  "Activates as an attempted robbery unfolds",
  "Fills the area with dense fog in seconds",
  "Disrupts the attempt before offenders can reach stock",
];

function RedXCircle() {
  return (
    <img
      src="/assets/icon-cross-red.png"
      alt=""
      className="w-5 h-5 shrink-0"
      aria-hidden
    />
  );
}

function WhiteCheckCircle() {
  return (
    <img
      src="/assets/icon-check-white.png"
      alt=""
      className="w-5 h-5 shrink-0"
      aria-hidden
    />
  );
}

type VideoTileProps = {
  id: string;
  title: string;
  src: string;
  poster: string;
  playingId: string | null;
  onPlay: (id: string) => void;
  onEnd: () => void;
};

function VideoTile({ id, title, src, poster, playingId, onPlay, onEnd }: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPlaying = playingId === id;

  // Set thumbnail when not playing
  useEffect(() => {
    const video = videoRef.current;
    if (!video || isPlaying) return;

    const setThumb = () => {
      video.currentTime = Math.min(2, Math.max(0, video.duration - 0.1));
      video.pause();
    };

    if (video.readyState >= 2) {
      setThumb();
    } else {
      video.addEventListener("loadeddata", setThumb, { once: true });
      return () => video.removeEventListener("loadeddata", setThumb);
    }
  }, [isPlaying]);

  const handleVideoPause = () => {
    onEnd();
  };

  return (
    <div className="relative overflow-hidden rounded-[20px] group cursor-pointer aspect-[627/450]">
      {isPlaying ? (
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          muted
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          onEnded={onEnd}
          onPause={handleVideoPause}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="absolute inset-0 w-full h-full object-contain"
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <button
            type="button"
            onClick={() => onPlay(id)}
            className="absolute inset-0 w-full h-full cursor-pointer"
            aria-label={`Play ${title}`}
          />
        </>
      )}
    </div>
  );
}

const ComparisonSection = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section className="pt-[100px] lg:pt-[120px] pb-0">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-2 md:pt-0">
          <h2 className="section-heading">
            Real Robbery Attempts Interrupted in Progress
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[16px] text-[#666666] font-medium leading-relaxed mt-3 md:mt-4 max-w-[720px] mx-auto">
            See real break-in footage where Fog Bandit fog disrupted robbery attempts before offenders could reach the stock.
          </p>
        </div>

        {/* Desktop: 2 columns grid */}
        <div className="hidden md:grid mt-10 md:mt-12 grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white rounded-2xl p-7 md:p-9 border border-[#E8E8E8] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <h3 className="font-inter text-[18px] md:text-[20px] font-semibold text-[#1A1A1A] mb-6 md:mb-7">
              Traditional Security
            </h3>
            <ul className="space-y-4 md:space-y-5">
              {traditionalItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <RedXCircle />
                  <span className="font-dm-sans text-[14px] md:text-[15px] text-[#444444] leading-snug pt-0.5">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#021373] rounded-2xl p-7 md:p-9">
            <h3 className="font-inter text-[18px] md:text-[20px] font-semibold text-white mb-6 md:mb-7">
              Fog Bandit
            </h3>
            <ul className="space-y-4 md:space-y-5">
              {fogBanditItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <WhiteCheckCircle />
                  <span className="font-dm-sans text-[14px] md:text-[15px] text-white leading-snug pt-0.5">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden mt-10 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 snap-x snap-mandatory">
            <div className="bg-white rounded-2xl p-7 border border-[#E8E8E8] shadow-[0_1px_3px_rgba(0,0,0,0.04)] min-w-[90vw] snap-center">
              <h3 className="font-inter text-[18px] font-semibold text-[#1A1A1A] mb-6">
                Traditional Security
              </h3>
              <ul className="space-y-4">
                {traditionalItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <RedXCircle />
                    <span className="font-dm-sans text-[14px] text-[#444444] leading-snug pt-0.5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#021373] rounded-2xl p-7 min-w-[90vw] snap-center mr-8">
              <h3 className="font-inter text-[18px] font-semibold text-white mb-6">
                Fog Bandit
              </h3>
              <ul className="space-y-4">
                {fogBanditItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <WhiteCheckCircle />
                    <span className="font-dm-sans text-[14px] text-white leading-snug pt-0.5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop: Videos in grid */}
        <div className="hidden md:grid mt-4 md:mt-6 grid-cols-2 gap-4 md:gap-6">
          <VideoTile
            id="before"
            title="Dispensary Break-In Attempt Foiled"
            src="/assets/videos/YTDown.com_YouTube_Media_4SNGiXt1yfw_Dispensary-Break-In-Attempt-Foiled-by-BANDIT-Fog-Barrier_001_1080p.mp4"
            poster="/assets/before-fog-bandit.png"
            playingId={playingId}
            onPlay={setPlayingId}
            onEnd={() => setPlayingId(null)}
          />
          <VideoTile
            id="after"
            title="CCTV Robbery Attempt Foiled"
            src="/assets/videos/YTDown.com_YouTube_Media_demI-X6j4rQ_Real-CCTV-Robbery-Attempt-Foiled-by-BANDIT-Active-Fog-Security_001_360p.mp4"
            poster="/assets/after-fog-bandit.png"
            playingId={playingId}
            onPlay={setPlayingId}
            onEnd={() => setPlayingId(null)}
          />
        </div>

        {/* Mobile: Videos in horizontal scroll */}
        <div className="md:hidden mt-4 overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 snap-x snap-mandatory">
            <div className="min-w-[90vw] snap-center">
              <VideoTile
                id="before"
                title="Dispensary Break-In Attempt Foiled"
                src="/assets/videos/YTDown.com_YouTube_Media_4SNGiXt1yfw_Dispensary-Break-In-Attempt-Foiled-by-BANDIT-Fog-Barrier_001_1080p.mp4"
                poster="/assets/before-fog-bandit.png"
                playingId={playingId}
                onPlay={setPlayingId}
                onEnd={() => setPlayingId(null)}
              />
            </div>
            <div className="min-w-[90vw] snap-center mr-8">
              <VideoTile
                id="after"
                title="CCTV Robbery Attempt Foiled"
                src="/assets/videos/YTDown.com_YouTube_Media_demI-X6j4rQ_Real-CCTV-Robbery-Attempt-Foiled-by-BANDIT-Active-Fog-Security_001_360p.mp4"
                poster="/assets/after-fog-bandit.png"
                playingId={playingId}
                onPlay={setPlayingId}
                onEnd={() => setPlayingId(null)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
