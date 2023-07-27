import React from "react";

const TileWithImage = (props) => {
  return (
    <div className="tile">
      <img className="cover2" src={props.image} alt="not found!" />
      <div className="text-cont">
        <div className="subheading-container">
            <div className="subheading">{props.title}</div>
        </div>
        <div className="p-container">
            <p>
              {props.desc}
            </p>
        </div>
      </div>
      <div className="tile-foot-cover2">
        <span>{props.genre}</span> / {props.p_date}
      </div>
    </div>
  );
};

export default TileWithImage;
