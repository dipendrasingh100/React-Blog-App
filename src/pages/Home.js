import React from "react";
import "../css/home.css";
import Cover from "../components/Cover";

const Home = () => {
  return (
    <>
      <div className="thumb-cont">
        <div className="main-img"></div>
        <Cover cls="img1" />
        <Cover cls="img2" />
      </div>
      <div className="subtitle">
        <span>The Latest</span>
        <div className="bottom-line"></div>
      </div>

      <div className="himgs-container">
        <div className="tile">
          <div className="cover2"></div>
          <div className="text-cont">
            <div className="subheading">Joshua Tree Overnight Adventure</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis animi, iure soluta asperiores sapiente libero illo
              deserunt dolore dolores quas fugit molestiae aliquam eius!
            </p>
          </div>
          <div className="tile-foot">
            <span>Travel</span> / August 21 2017
          </div>
        </div>
        <div className="tile">
          <div className="cover2"></div>
          <div className="text-cont">
            <div className="subheading">Joshua Tree Overnight Adventure</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis animi, iure soluta asperiores sapiente libero illo
              deserunt dolore dolores quas fugit molestiae aliquam eius!
            </p>
          </div>
          <div className="tile-foot">
            <span>Travel</span> / August 21 2017
          </div>
        </div>
        <div className="tile">
          <div className="cover2"></div>
          <div className="text-cont">
            <div className="subheading">Joshua Tree Overnight Adventure</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis animi, iure soluta asperiores sapiente libero illo
              deserunt dolore dolores quas fugit molestiae aliquam eius!
            </p>
          </div>
          <div className="tile-foot">
            <span>Travel</span> / August 21 2017
          </div>
        </div>
      </div>
      <div className="subtitle">
        <span>Latest Articles</span>
        <div className="bottom-line"></div>
      </div>
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

      <div className="subtitle">
        <span>Latest Stories</span>
        <div className="bottom-line"></div>
      </div>
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
