import React from "react";
import "../css/home.css" 

const Cover = (props) => {
  return (
    <div className={`cover ${props.cls === "img1" ? "img1" : "img2"}`}>
      <h2>
        The sound cloud <br /> You loved is doom
      </h2>
      <div className="tile-foot fcover">
        <span>Travel</span> / August 21 2017
      </div>
    </div>
  );
};

export default Cover;
