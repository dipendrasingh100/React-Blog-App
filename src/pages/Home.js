import React, { useContext } from "react";
import "../css/home.css";
import Cover from "../components/Cover";
import Subtitle from "../components/Subtitle";
import TileWithImage from "../components/TileWithImage";
import { ContextData } from "../components/ContextData";
import MainCover from "../components/MainCover";

function generateRandomNumbers(n) {
  const min = 1;
  const max = 35;
  const randomNumbers = [];

  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}

const Home = () => {
  const data = useContext(ContextData);
  const first3_cover = generateRandomNumbers(3);
  const latest_tile = generateRandomNumbers(3);

  return (
    <>
      <div className="thumb-cont">
        <MainCover
          title={data[first3_cover[0]].title}
          p_date={data[first3_cover[0]].post_date}
          image={data[first3_cover[0]].thumb}
          genre={data[first3_cover[0]].genre}
        />
        <Cover
          cls="img1"
          title={data[first3_cover[1]].title}
          p_date={data[first3_cover[1]].post_date}
          image={data[first3_cover[1]].thumb}
          genre={data[first3_cover[1]].genre}
        />
        <Cover
          cls="img2"
          title={data[first3_cover[2]].title}
          p_date={data[first3_cover[2]].post_date}
          image={data[first3_cover[2]].thumb}
          genre={data[first3_cover[2]].genre}
        />
      </div>

      <Subtitle title="The Latest" />

      <div className="himgs-container">
        <TileWithImage
          title={data[latest_tile[0]].title}
          image={data[latest_tile[0]].thumb}
          desc={data[latest_tile[0]].description}
          p_date={data[latest_tile[0]].post_date}
          genre={data[latest_tile[0]].genre}
        />

        <TileWithImage
          title={data[latest_tile[1]].title}
          image={data[latest_tile[1]].thumb}
          desc={data[latest_tile[1]].description}
          p_date={data[latest_tile[1]].post_date}
          genre={data[latest_tile[1]].genre}
        />

        <TileWithImage
          title={data[latest_tile[2]].title}
          image={data[latest_tile[2]].thumb}
          desc={data[latest_tile[2]].description}
          p_date={data[latest_tile[2]].post_date}
          genre={data[latest_tile[2]].genre}
        />
      </div>

      <Subtitle title={"Latest Articles"} />

      <div className="ls-container">
        <div className="ls-sub-cont-first">
          <div className="ls-sub-img-first"></div>
          <div className="ls-sub-text-cont"></div>
        </div>
        <div className="ls-sub-cont">
          <div className="ls-sub-img"></div>
          <div className="ls-sub-text-cont"></div>
        </div>
        <div className="ls-sub-cont">
          <div className="ls-sub-img"></div>
          <div className="ls-sub-text-cont"></div>
        </div>
        <div className="ls-sub-cont">
          <div className="ls-sub-img"></div>
          <div className="ls-sub-text-cont"></div>
        </div>
      </div>
      <div className="rs-ad-container">
        <div className="ad-title">Advertisement</div>
      </div>
      <div className="rs-tposts-container"></div>
      <div className="ls-img-container"></div>

      <Subtitle title={"Latest Stories"} />

      <div className="htext-container">
        <div className="text-cont2">
          <div className="subheading">Catch waves with an advanture guide</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            animi, iure soluta asperiores sapiente libero illo deserunt dolore
            dolores quas fugit molestiae aliquam eius!
          </p>
          <div className="tile-foot2">
            <span>TECH</span> / TODAY AT 11:54
          </div>
        </div>
        <div className="text-cont2">
          <div className="subheading">Catch waves with an advanture guide</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            animi, iure soluta asperiores sapiente libero illo deserunt dolore
            dolores quas fugit molestiae aliquam eius!
          </p>
          <div className="tile-foot2">
            <span>STYLE</span> / August 21 2017
          </div>
        </div>
        <div className="text-cont2">
          <div className="subheading">Catch waves with an advanture guide</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            animi, iure soluta asperiores sapiente libero illo deserunt dolore
            dolores quas fugit molestiae aliquam eius!
          </p>
          <div className="tile-foot2">
            <span>TECH</span> / August 21 2017
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
