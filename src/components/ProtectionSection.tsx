import { useEffect, useRef, useState } from "react";
import { Shield } from "lucide-react";

const traditionalItems = [
  "Only records the incident",
  "Evidence provided after loss",
  "Zero deterrent for masked intruders",
];

const fogBanditItems = [
  "Activates instantly on trigger",
  "Removes visibility in seconds",
  "Stops the attempt immediately",
];

const DEMO_VIDEO = "/assets/videos/office-protection-demo.mp4";
const SEQUENCE_SUBTITLE = "Full Sequence: Detection to Obscuration (2:45)";

function RedXCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0" aria-hidden>
      <circle cx="10" cy="10" r="10" fill="#F20530" />
      <path d="M7 7L13 13M13 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function WhiteCheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0" aria-hidden>
      <path
        d="M7.96875 15L16.9688 6L15.5625 4.54688L7.96875 12.1406L4.40625 8.57812L3 9.98438L7.96875 15ZM2.92969 2.92969C4.88281 0.976562 7.23438 0 9.98438 0C12.7344 0 15.0859 0.976562 17.0391 2.92969C18.9922 4.88281 19.9688 7.23438 19.9688 9.98438C19.9688 12.7344 18.9922 15.0859 17.0391 17.0391C15.0859 18.9922 12.7344 19.9688 9.98438 19.9688C7.23438 19.9688 4.88281 18.9922 2.92969 17.0391C0.976562 15.0859 0 12.7344 0 9.98438C0 7.23438 0.976562 4.88281 2.92969 2.92969Z"
        fill="white"
      />
    </svg>
  );
}

type VideoTileProps = {
  id: string;
  title: string;
  poster: string;
  thumbTime?: number;
  playingId: string | null;
  onPlay: (id: string) => void;
  onEnd: () => void;
};

function VideoTile({ id, title, poster, thumbTime = 0, playingId, onPlay, onEnd }: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPlaying = playingId === id;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || isPlaying) return;

    const setThumb = () => {
      video.currentTime = thumbTime;
      video.pause();
    };

    if (video.readyState >= 2) {
      setThumb();
    } else {
      video.addEventListener("loadeddata", setThumb, { once: true });
      return () => video.removeEventListener("loadeddata", setThumb);
    }
  }, [thumbTime, isPlaying]);

  const handleVideoPause = () => {
    onEnd();
  };

  return (
    <div className="relative overflow-hidden rounded-[20px] aspect-[16/10] sm:aspect-[604/350] group cursor-pointer">
      {isPlaying ? (
        <video
          ref={videoRef}
          src={DEMO_VIDEO}
          controls
          autoPlay
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          onEnded={onEnd}
          onPause={handleVideoPause}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <>
          {thumbTime > 0 ? (
            <video
              ref={videoRef}
              src={DEMO_VIDEO}
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden
            />
          ) : (
            <img
              src={poster}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <button
            type="button"
            onClick={() => onPlay(id)}
            className="absolute inset-0 text-left"
            aria-label={`Play ${title}`}
          >
            <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
              <div className="flex items-center gap-2.5 mb-1">
                <img src="/assets/play-icon.svg" alt="" className="w-8 h-8 md:w-9 md:h-9" />
                <h3 className="font-dm-sans text-white font-semibold text-[15px] md:text-[16px]">
                  {title}
                </h3>
              </div>
              <p className="font-dm-sans text-white/80 text-[12px] md:text-[13px] ml-[42px] md:ml-[46px]">
                {SEQUENCE_SUBTITLE}
              </p>
            </div>
          </button>
        </>
      )}
    </div>
  );
}

const ProtectionSection = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section id="solutions" className="pb-14 lg:pb-[120px]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-2 md:pt-0">
          <h2 className="font-inter text-[24px] md:text-[32px] font-semibold text-black leading-tight tracking-tight">
            The Difference Between Watching and Stopping
          </h2>
          <p className="font-dm-sans text-[14px] md:text-[16px] text-[#666666] font-medium leading-relaxed mt-3 md:mt-4 max-w-[720px] mx-auto">
            Passive security records the crime. Active security ends it.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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

          <div className="relative bg-[#021373] rounded-2xl p-7 md:p-9 overflow-hidden">
            <Shield
              className="absolute top-6 right-6 w-24 h-24 md:w-28 md:h-28 text-white/[0.08] pointer-events-none"
              strokeWidth={1.25}
              aria-hidden
            />
            <h3 className="font-inter text-[18px] md:text-[20px] font-semibold text-white mb-6 md:mb-7 relative">
              Fog Bandit
            </h3>
            <ul className="space-y-4 md:space-y-5 relative">
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

        <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <VideoTile
            id="before"
            title="Before Fog Bandit"
            poster="/assets/demo-background-desktop.png"
            playingId={playingId}
            onPlay={setPlayingId}
            onEnd={() => setPlayingId(null)}
          />
          <VideoTile
            id="after"
            title="After Fog Bandit"
            poster="/assets/demo-background-desktop.png"
            thumbTime={95}
            playingId={playingId}
            onPlay={setPlayingId}
            onEnd={() => setPlayingId(null)}
          />
        </div>
      </div>
    </section>
  );
};

export default ProtectionSection;
