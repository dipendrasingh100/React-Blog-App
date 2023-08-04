import React from "react";
import "../css/home.css"
const Advertise = () => {
  return (
    <div className="rs-ad-container">
      <div className="ad-title" style={{ height: '100%' }}>
        <iframe src="https://www.youtube.com/embed/tCCY31XxN_Y?autoplay=1&mute=1&loop=1&playlist=tCCY31XxN_Y"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="ad" style={{ border: "none", height: "100%", width: "328px" }} className="ad">
        </iframe>
      </div>
    </div>
  );
};

export default Advertise;
