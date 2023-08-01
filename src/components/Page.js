import React, { useContext } from "react";
import "../css/home.css";
import Subtitle from "./Subtitle";
import TPRightTile from "./TPRightTile";
import { ContextData } from "./ContextData";
import LeftTile from "./LeftTile";
import downArrow from "../assets/arrow.svg";
import Advertise from "./Advertise";
import { shuffleArray } from "./HelperFunctions";

const Page = (props) => {
  const cdata = useContext(ContextData)
    .filter((item) => item.genre === props.category)
    .slice(0, 7);
  let data = shuffleArray(cdata)

  const top_posts = cdata.slice(0, 4).sort((a, b) => {
    // Convert date strings to Date objects
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Compare the Date objects
    return dateA - dateB;
  });

  return (
    <>
      <div className="ls-container">
        <Subtitle title={props.category} />
        <LeftTile
          cls={"ls-first"}
          id={data[0].id}
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
                id={value.id}
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
      <div className="rs-tposts-container" style={{ marginTop: "1.5%" }}>
        <Subtitle title={"Top Posts"} />
        <TPRightTile
          cls={"tp-first"}
          id={top_posts[0].id}
          title={top_posts[0].title}
          image={top_posts[0].thumb}
          p_date={top_posts[0].post_date}
          genre={top_posts[0].genre}
        />
        {top_posts.map(
          (value, index) =>
            index !== 0 && (
              <TPRightTile
                key={index}
                id={value.id}
                title={value.title}
                image={value.thumb}
                p_date={value.post_date}
                genre={value.genre}
              />
            )
        )}
      </div>
      <Advertise />
    </>
  );
};

export default Page;
