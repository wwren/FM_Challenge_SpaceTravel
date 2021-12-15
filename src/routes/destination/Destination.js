import React from "react";
import MainWrapper from "../../commonComponents/MainWrapper";
import { pageTopLeftIntro, distanceBottomTitle } from "../../space-data";
import "./Destination.css";

const exp = {
  name: "Moon",
  images: {
    png: "/destination/image-moon.png",
    webp: "/destination/image-moon.webp",
  },
  description:
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  distance: "384,400 km",
  travel: "3 days",
};

function Destination() {
  return (
    <main className="destination">
      <MainWrapper text={pageTopLeftIntro.destinations}>
        <img
          className="destination__left-panel"
          src={require(`../../assets${exp.images.png}`).default}
          alt={exp.name}
        />
        <div className="destination__right-panel">
          <h3 className="text--highlight text--highlight--destination">{exp.name}</h3>
          <p className="text--last-p"> {exp.description}</p>
          <div className="destination__bottom-panel">
            <div>
              <h4>{distanceBottomTitle.title1}</h4>
              <p>{exp.distance}</p>
            </div>
            <div>
              <h4>{distanceBottomTitle.title2}</h4>
              <p>{exp.travel}</p>
            </div>
          </div>
        </div>
      </MainWrapper>
    </main>
  );
}

export default Destination;
