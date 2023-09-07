import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

const Cover = (props) => {
  return (
    <div
      className={`cover ${props.ind === 0 ? "main-img" : ""}`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <Link to={`/${props.genre.toLowerCase()}/${props.id}`}>
        <div className="cover-title-conatiner">
          <div className="cover-subheading">{props.title}</div>
        </div>
        <div className="tile-foot fcover">
          <span>{props.genre}</span> / {props.p_date}
        </div>
        <div className="bottom-line-cover"></div>
      </Link>
    </div>
  );
};

export default Cover;
