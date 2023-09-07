import React from "react";
import { Link } from "react-router-dom";
import { handleLink } from './HelperFunctions';

const TileWithoutImage = (props) => {
  return (
    <Link to={`/${props.genre.toLowerCase()}/${props.id}`} onClick={handleLink}>
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
    </Link>
  );
};

export default TileWithoutImage;
