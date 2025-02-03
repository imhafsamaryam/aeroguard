import React, { useState, useEffect, useRef } from "react";
import "./animations.css"; // Import the CSS file for transitions

const VideoPlayer = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      setIsFading(true); // Start fading out
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsFading(false); // Reset fade after transition
      }, 500); // Match the CSS fade duration
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [videos.length]);

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        src={videos[currentVideoIndex]}
        muted={true}
        autoPlay
        className={`video ${
          isFading
            ? "fade-out w-[100vw] h-[100vh] object-cover    rounded-xl"
            : "fade-in w-[100vw] h-[100vh] object-cover    rounded-xl"
        }`}
      ></video>
    </div>
  );
};

export default VideoPlayer;
