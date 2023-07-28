import React from "react";

const TileWithoutImage = (props) => {
  return (
    <div className="text-cont2">
        <div className="bottom-subheading-container">
          <div className="bottom-subheading">{props.title}</div>
        </div>
        <div className="bottom-p-container">
          <p>{props.desc}</p>
        </div>
        <div className="bottom-tile-foot">
          <span>{props.genre}</span> / {props.p_date}
        </div>
      </div>
  );
};

export default TileWithoutImage;
