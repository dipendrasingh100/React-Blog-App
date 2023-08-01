import React from "react";
import { Link } from "react-router-dom";

const MainCover2 = (props) => {
  return (
    <div>
      <Link to={`/${props.genre.toLowerCase()}/${props.id}`}>
        <div
          className="main-img2"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div className="cover-title-conatiner2">
            <div className="cover-subheading2">{props.title}</div>
          </div>
          <div className="tile-foot fcover2">
            <span>{props.genre}</span> / {props.p_date}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainCover2;
