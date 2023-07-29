import React, {useContext} from "react";
import "../css/home.css";
import Subtitle from "../components/Subtitle";
import TPRightTile from "../components/TPRightTile";
import { ContextData } from "../components/ContextData";
import LeftTile from "../components/LeftTile";
import downArrow from "../assets/arrow.svg";
import Advertise from "../components/Advertise";

const Technology = () => {
  const data = useContext(ContextData).filter(item=>item.genre==="Technology").slice(0,7);
  const top_posts = data.slice(0,4).sort((a, b) => {
    // Convert date strings to Date objects
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
  
    // Compare the Date objects
    return dateA - dateB;
  })

  return (
    <>
      
      <Subtitle title={"Technology"} />
      <div className="ls-container">
        <LeftTile
          cls={"ls-first"}
          title={data[0].title}
          image={data[0].thumb}
          desc={data[0].description}
          p_date={data[0].post_date}
          genre={data[0].genre}
        />
        {data.map(
          (value, index) =>
            index !== 0 && (
              <LeftTile
                key={index}
                title={value.title}
                image={value.thumb}
                desc={value.description}
                p_date={value.post_date}
                genre={value.genre}
              />
            )
        )}
        <div className="more">
          <img src={downArrow} alt="not found" /> <p>LOAD MORE</p>
        </div>
      </div>
      <div className="rs-tposts-container" style={{marginTop:"3.5%"}}>
        <Subtitle title={"Top Posts"} />
        <TPRightTile
          cls={"tp-first"}
          title={top_posts[0].title}
          image={top_posts[0].thumb}
          p_date={data[0].post_date}
          genre={top_posts[0].genre}
        />
        {top_posts.map(
          (value, index) =>
            index !== 0 && (
              <TPRightTile
                key={index}
                title={value.title}
                image={value.thumb}
                p_date={value.post_date}
                genre={value.genre}
              />
            )
        )}
      </div>
      <Advertise/>
    </>
  );
};

export default Technology;
