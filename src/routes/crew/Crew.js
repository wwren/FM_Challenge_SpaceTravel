import React, { useState, useRef, useCallback } from "react";
import MainWrapper from "../../commonComponents/MainWrapper";
import TextPanel from "../../commonComponents/TextPanel";
import { pageTopLeftIntro, getCrew } from "../../space-data";
import ControlPanel from "../../commonComponents/ControlPanel";
import "./Crew.css";
// import $ from "jquery";

//TODO consider add swipe event
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
        <div className="crew__text-control">
          <ControlPanel content={crew} setContent={setFocusContent} hasButtonText={false} hasButtonIdx={false} />
          <TextPanel subheader={focusContent.role} header={focusContent.name} paragraph={focusContent.bio} />
        </div>
      </MainWrapper>
    </main>
  );
}

export default Crew;
