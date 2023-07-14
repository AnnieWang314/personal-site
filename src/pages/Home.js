import React from "react";
import "./Home.css"
import myPic from "../reactMyPic.png";

export default function Home() {
    return (
      <div className="home-page">
        <div className = "home-left">
          <div className = "home-name">
            <div id = "first-name">ANNIE</div>
            <div id = "last-name">WANG</div>
          </div>
          <div id = "home-about">Aspiring CSer & Forever Feaster</div>
        </div>
        <div className = "home-right">
          <div className = "homepic-container">
              <img id = "home-me" src={myPic} alt="Picture of me!" />
          </div>
        </div>
      </div>
    );
}