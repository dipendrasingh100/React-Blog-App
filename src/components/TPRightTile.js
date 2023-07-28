import React from 'react'

const TPRightTile = (props) => {
  return (
    <div className={`rs-sub-cont ${props.cls}`}>
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
  )
}

export default TPRightTile
