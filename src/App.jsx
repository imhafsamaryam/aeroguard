import React, { useEffect } from "react";
import "./App.css";

function App() {
  const handleContactClick = () => {
    window.location.href = "mailto:rfq@aeroguardfz.com";
  };
//sdfsdfklsdjf
  return (
    <div className="bg_clip">
      <div className="align_center">
        <h1 className="text_top">Coming soon</h1>
        <h1 className="bg_clip_text">Exciting Things Are on the Horizon!</h1> 
        <h1 className="text_bottom">
          Your trusted partner in defence and commercial aviation maintenance,
          repair, and overhaul (MRO).
        </h1>
        <button className="btn" onClick={handleContactClick}>Contact Us</button>
      </div>
      <div className="airplane"></div>
    </div>
  );
}

export default App;
