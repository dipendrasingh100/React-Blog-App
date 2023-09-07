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
        {data.map(
          (value, index) =>
          (
            <LeftTile
              key={index}
              idx={index}
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
        {top_posts.map(
          (value, index) =>
          (
            <TPRightTile
              key={index}
              idx={index}
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
