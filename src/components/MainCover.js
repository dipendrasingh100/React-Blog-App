import React from "react";

const MainCover = (props) => {
  return (
    <div
      className="main-img"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="cover-title-conatiner">
        <div className="cover-subheading">{props.title}</div>
      </div>
      <div className="tile-foot fcover">
        <span>{props.genre}</span> / {props.p_date}
      </div>
    </div>
  );
};

export default MainCover;
