import React, { useState, useEffect } from "react";

function BackgroundVideo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    width: "100%", 
    height: isMobile ? "100vh" : "100vh",
    overflow: "hidden", 
    position: "relative",
    margin: 0, 
    padding: 0, 
  };

  const videoStyle = {
    width: "100%", 
    height: isMobile ? "50%" : "100%",
    objectFit: "cover",
    position: "absolute",
    top: isMobile ? "15%" : "0",
    left: "50%",
    transform: "translateX(-50%)",
  };

  return (
    <div style={containerStyle}>
      <video style={videoStyle} autoPlay loop muted playsInline>
        <source src="/src/assets/backgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;