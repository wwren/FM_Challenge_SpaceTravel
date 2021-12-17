import React, { useState, useRef, useCallback } from "react";
import MainWrapper from "../../commonComponents/MainWrapper";
import { pageTopLeftIntro, distanceBottomTitle, getDestination } from "../../space-data";
import ControlPanel from "../../commonComponents/ControlPanel";
import "./Destination.css";

function Destination() {
  const destination = getDestination();
  const [focusContent, setFocusContent] = useState(destination[0]);

  return (
    <main className="destination">
      <MainWrapper text={pageTopLeftIntro.destinations}>
        <img
          className="destination__left-panel"
          src={require(`../../assets${focusContent.images.png}`).default}
          alt={focusContent.name}
        />
        <div className="destination__right-panel">
          <ControlPanel content={destination} setContent={setFocusContent} hasButtonText={true} hasButtonIdx={false} />
          <h3 className="text--highlight text--highlight--destination">{focusContent.name}</h3>
          <p className="text--last-p"> {focusContent.description}</p>
          <div className="destination__bottom-panel">
            <div>
              <h4>{distanceBottomTitle.title1}</h4>
              <p>{focusContent.distance}</p>
            </div>
            <div>
              <h4>{distanceBottomTitle.title2}</h4>
              <p>{focusContent.travel}</p>
            </div>
          </div>
        </div>
      </MainWrapper>
    </main>
  );
}

export default Destination;
