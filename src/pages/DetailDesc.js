import React, { useContext } from "react";
import "../css/detail_desc.css";
import rythm from "../assets/rythm.svg";
import share from "../assets/share.svg";
import avtar from "../assets/Mask Group 16.png";
import { Link, useLocation} from "react-router-dom";
import { ContextData } from "../components/ContextData";
import Suggestion from "../components/Suggestion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquareTwitter, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";

const DetailDesc = () => {
  const [ , path, id ] = useLocation().pathname.split("/")
  const data = useContext(ContextData).filter(item => (item.id === parseInt(id)))[0]
  const para = data.detail.split("  ")
  return (
    <>
      <div className="dd-flex-container">
        <div className="dd-left">
          <div className="like-box">
            <img src={rythm} alt="not found" />
            <span>9.3K</span>
          </div>
          <div className="share-box">
            <img src={share} alt="not found" />
            <span>Share this article</span>
          </div>
        </div>
        <div className="dd_content">
          <div className="heading">{data.title}</div>
          <div className="post_header">
            <div className="author_box">
              <div className="profile">
                <img src={avtar} alt="not found" />
              </div>
              <div className="writer-desc">
                <div className="written_by">WRITTEN BY</div>
                <div className="author">Dmitry Nozhenko</div>
                <div className="date_time">Jan 28 2019 - 10 min read</div>
              </div>
            </div>
            <div className="social-icons">
              <FontAwesomeIcon icon={faSquareFacebook} size="xl" style={{ color: "#b3b3b3", }} />
              <FontAwesomeIcon icon={faSquareTwitter} size="xl" style={{ color: "#b3b3b3", }} />
              <FontAwesomeIcon icon={faSquareInstagram} size="xl" style={{ color: "#b3b3b3", }} />
              <FontAwesomeIcon icon={faSquareYoutube} size="xl" style={{ color: "#b3b3b3", }} />
            </div>
          </div>
          <div className="post_thumbnail">
            <img src={data.thumb} alt="not found" />
          </div>

          <div className="post_desc">
            {para.map((item, index) => (
              <p key={index}>
                {item}
              </p>
            ))}
          </div>
          <div className="tag_block">
            <span>React</span>
            <span>JavaScript</span>
            <span>Animation</span>
          </div>
          <div className="like-box claps">
            <img src={rythm} alt="not found" />
            <span>9.3K claps</span>
          </div>
          <div className="post_footer">
            <div className="profile">
              <img src={avtar} alt="not found" />
            </div>
            <div className="writer-desc">
              <div className="written_by">WRITTEN BY</div>
              <div className="author">Dmitry Nozhenko</div>
              <div className="date_time">Jan 28 2019 - 10 min read</div>
            </div>
          </div>
          <div className="back-btn">
            <Link to={'/'+path}>
            <button className="css-button-sliding-to-left--black">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="dd-bottom-container">
        <div className="dd-bottom-heading">More From Siren</div>
        <Suggestion image={data.thumb} category={data.genre}/>
      </div>
    </>
  );
};

export default DetailDesc;
