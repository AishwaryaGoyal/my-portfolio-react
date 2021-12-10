import React from "react";
import Explanation1 from "./ExplanationWork1";
import Explanation2 from "./ExplanationWork2";
import Explanation3 from "./ExplanationWork3";
import childVideo from "../../videos/child.mp4";
import moonVideo from "../../videos/moon.mp4";
import flowersVideo from "../../videos/flowers.mp4";

function Work() {
  return (
    <>
      <div className="work">
        <div className="video-container">
          <video controls loop preload="auto" height="450px">
            <source src={childVideo} type="video/mp4" />
          </video>
        </div>
        <Explanation1 />
      </div>
      <div className="work">
        <div className="video-container">
          <video controls loop preload="auto" height="450px">
            <source src={moonVideo} type="video/mp4" />
          </video>
        </div>
        <Explanation2 />
      </div>
      <div className="work">
        <div className="video-container">
          <video controls loop preload="auto" height="450px">
            <source src={flowersVideo} type="video/mp4" />
          </video>
        </div>
        <Explanation3 />
      </div>
    </>
  );
}

export default Work;
