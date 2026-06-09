import { useEffect, useRef } from 'react';

export const useVideoControl = (isPlaying: boolean) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isPlaying) {
      video.pause();
      video.muted = true;
      video.volume = 0;
    }
  }, [isPlaying]);

  const handlePause = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.volume = 0;
    }
  };

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1;
    }
  };

  return {
    videoRef,
    handlePause,
    handlePlay,
  };
};
