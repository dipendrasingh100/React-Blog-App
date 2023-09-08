import React, { useContext } from "react";
import "../css/home.css";
import Cover from "../components/Cover";
import Subtitle from "../components/Subtitle";
import TileWithImage from "../components/TileWithImage";
import { ContextDataProvider } from "../components/ContextData";
import LeftTile from "../components/LeftTile";
import MainCover2 from "../components/MainCover2";
import TileWithoutImage from "../components/TileWithoutImage";
import TPRightTile from "../components/TPRightTile";
import downArrow from "../assets/arrow.svg";
import rightArrow from "../assets/arrow-1.svg";
import ImageSlider from "../components/ImageSlider";
import Advertise from "../components/Advertise";
import { generateRandomNumbers } from "../components/HelperFunctions";

const Home = () => {
  const data = useContext(ContextDataProvider);

  //array of random indexes
  const first3_cover = generateRandomNumbers(3, data.length);
  const latest_tile = generateRandomNumbers(3, data.length);
  const latest_articles = generateRandomNumbers(4, data.length);

  return (
    <>
      <div className="thumb-cont">
        {first3_cover.map(
          (value, index) =>
          (
            <Cover
              key={index}
              ind={index}
              id={data[value].id}
              title={data[value].title}
              p_date={data[value].post_date}
              image={data[value].thumb}
              genre={data[value].genre}
            />
          )
        )}
      </div>
      <div className="image-slider-cont">
        <ImageSlider slides={first3_cover} />
      </div>

      <Subtitle title="The Latest" />

      <div className="himgs-container">
        {latest_tile.map((value, index) => (
          <TileWithImage
            key={index}
            id={data[value].id}
            title={data[value].title}
            image={data[value].thumb}
            desc={data[value].description}
            p_date={data[value].post_date}
            genre={data[value].genre}
          />
        ))}
      </div>

      <Subtitle title={"Latest Articles"} />

      <div className="ls-container">
        {latest_articles.map((value, index) =>
        (
          <LeftTile
            key={index}
            idx={index}
            id={data[value].id}
            title={data[value].title}
            image={data[value].thumb}
            desc={data[value].description}
            p_date={data[value].post_date}
            genre={data[value].genre}
          />
        )
        )}
        <div className="more">
          <img src={downArrow} alt="not found" /> <p>LOAD MORE</p>
        </div>
      </div>

      <Advertise />
      <div className="rs-tposts-container">
        <Subtitle title={"Top Posts"} />
        {latest_articles.map((value, index) =>
        (
          <TPRightTile
            key={index}
            idx={index}
            id={data[value].id}
            title={data[value].title}
            image={data[value].thumb}
            p_date={data[value].post_date}
            genre={data[value].genre}
          />
        )
        )}
      </div>
      <div className="ls-img-container">
        <MainCover2
          id={data[first3_cover[0]].id}
          title={data[first3_cover[0]].title}
          p_date={data[first3_cover[0]].post_date}
          image={data[first3_cover[0]].thumb}
          genre={data[first3_cover[0]].genre}
        />
      </div>

      <Subtitle title={"Latest Stories"} />

      <div className="htext-container">
        {first3_cover.map((value, index) => (
          <TileWithoutImage
            key={index}
            id={data[value].id}
            title={data[value].title}
            desc={data[value].description}
            p_date={data[value].post_date}
            genre={data[value].genre}
          />
        ))}
      </div>

      <div className="more">
        <p>VIEW MORE</p><img src={rightArrow} alt="not found" />
      </div>
    </>
  );
};

export default Home;