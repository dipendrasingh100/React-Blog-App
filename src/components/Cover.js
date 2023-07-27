import React from "react";
import "../css/home.css";

const Cover = (props) => {
  return (
    <div
      className={`cover ${props.cls === "img1" ? "img1" : "img2"}`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="cover-title-conatiner">
        <div className="cover-subheading">{props.title}</div>
      </div>
      <div className="tile-foot fcover">
        <span>{props.genre}</span> / {props.p_date}
      </div>
      <div className="bottom-line-cover"></div>
    </div>
  );
};

export default Cover;
