import React, { useState, useRef } from "react";
import MainWrapper from "../../commonComponents/MainWrapper";
import { pageTopLeftIntro, getCrew } from "../../space-data";
import "./Crew.css";

function Crew() {
  const crew = getCrew();
  const [focusContent, setFocusContent] = useState(crew[0]);

  return (
    <main className="crew">
      <MainWrapper text={pageTopLeftIntro.crew}>
        <div>
          <img
            className="crew__picture-panel"
            src={require(`../../assets${focusContent.images.png}`).default}
            alt={focusContent.name}
          />
        </div>
        <div className="crew__text-panel">
          <h5 className="text--highlight">{focusContent.role}</h5>
          <h4 className="text--highlight text--highlight--crew"> {focusContent.name}</h4>
          <p className="text--last-p">{focusContent.bio}</p>
        </div>
      </MainWrapper>
    </main>
  );
}

export default Crew;
