import React, { useContext } from "react";
import "../css/home.css";
import Cover from "../components/Cover";
import Subtitle from "../components/Subtitle";
import TileWithImage from "../components/TileWithImage";
import { ContextData } from "../components/ContextData";
import MainCover from "../components/MainCover";
import LeftTile from "../components/LeftTile";
import MainCover2 from "../components/MainCover2";
import TileWithoutImage from "../components/TileWithoutImage";
import TPRightTile from "../components/TPRightTile";
import downArrow from "../assets/arrow.svg";
import rightArrow from "../assets/arrow-1.svg";
import ImageSlider from "../components/ImageSlider";
import Advertise from "../components/Advertise";

export function generateRandomNumbers(n) {
  const min = 1;
  const max = 60;
  const randomNumbers = [];

  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

export const handleLink = () => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Home = () => {
  const data = useContext(ContextData);
  const first3_cover = generateRandomNumbers(3);
  const latest_tile = generateRandomNumbers(3);
  const latest_articles = generateRandomNumbers(4);

  return (
    <>
      <div className="thumb-cont">
        <MainCover
          id={data[first3_cover[0]].id}
          title={data[first3_cover[0]].title}
          p_date={data[first3_cover[0]].post_date}
          image={data[first3_cover[0]].thumb}
          genre={data[first3_cover[0]].genre}
        />
        {first3_cover.map(
          (value, index) =>
            index !== 0 && (
              <Cover
                key={index}
                cls={`img${index}`}
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
        <ImageSlider slides={data.slice(0,3)} />
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
        <LeftTile
          cls={"ls-first"}
          id={data[latest_articles[0]].id}
          title={data[latest_articles[0]].title}
          image={data[latest_articles[0]].thumb}
          desc={data[latest_articles[0]].description}
          p_date={data[latest_articles[0]].post_date}
          genre={data[latest_articles[0]].genre}
        />
        {latest_articles.map(
          (value, index) =>
            index !== 0 && (
              <LeftTile
                key={index}
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

      <div className="rs-ad-container">
        <Advertise/>
      </div>
      <div className="rs-tposts-container">
        <Subtitle title={"Top Posts"} />
        <TPRightTile
          cls={"tp-first"}
          id={data[latest_articles[0]].id}
          title={data[latest_articles[0]].title}
          image={data[latest_articles[0]].thumb}
          p_date={data[latest_articles[0]].post_date}
          genre={data[latest_articles[0]].genre}
        />
        {latest_articles.map(
          (value, index) =>
            index !== 0 && (
              <TPRightTile
                key={index}
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
