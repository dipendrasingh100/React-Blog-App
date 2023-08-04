import React from 'react'
import { Link } from 'react-router-dom'
import { handleLink } from '../pages/Home'

const TPRightTile = (props) => {
  return (
    <Link to={`/${props.genre.toLowerCase()}/${props.id}`}>
      <div className={`rs-sub-cont ${props.cls}`} onClick={handleLink}>
        <img className="rs-sub-img" src={props.image} alt="not found" />
        <div className="rs-sub-text-cont">
          <div className="rs-subheading-container">
            <div className="rs-subheading">{props.title}</div>
          </div>

          <div className="rs-tile-foot">
            <span>{props.genre}</span> / {props.p_date}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TPRightTile
