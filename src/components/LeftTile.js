import React from "react";

const LeftTile = (props) => {
  return (
    <div className={`ls-sub-cont ${props.cls}`}>
      <div><img className="ls-sub-img" src={props.image} alt="not found" /></div>
      <div className="ls-sub-text-cont">
        <div className="ls-subheading-container">
          <div className="ls-subheading">{props.title}</div>
        </div>
        <div className="ls-p-container">
          <p>{props.desc}</p>
        </div>
        <div className="ls-tile-foot">
          <span>{props.genre}</span> / {props.p_date}
        </div>
      </div>
    </div>
  );
};

export default LeftTile;
