import React from "react";
import { Link } from "react-router-dom";

const LeftTile = (props) => {
  return (
    <div>
      <Link to={`/${props.genre.toLowerCase()}/${props.id}`}>
        <div className={`ls-sub-cont ${props.idx===0 && 'ls-first'}`}>
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
      </Link>
    </div>
  );
};

export default LeftTile;
