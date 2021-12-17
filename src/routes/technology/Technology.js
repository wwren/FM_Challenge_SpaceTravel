import React, { useState, useRef, useCallback } from "react";
import MainWrapper from "../../commonComponents/MainWrapper";
import { pageTopLeftIntro, getTechnology } from "../../space-data";
import TextPanel from "../../commonComponents/TextPanel";
import "./Technology.css";
import ControlPanel from "../../commonComponents/ControlPanel";

function Technology() {
  const technology = getTechnology();
  const [focusContent, setFocusContent] = useState(technology[0]);

  return (
    <main className="technology">
      <MainWrapper text={pageTopLeftIntro.technology}>
        <div>
          <img
            className="crew__picture-panel"
            src={require(`../../assets${focusContent.images.portrait}`).default}
            alt={focusContent.name}
          />
        </div>
        <div className="crew__text-control">
          <ControlPanel content={technology} setContent={setFocusContent} hasButtonText={false} hasButtonIdx={true} />
          <TextPanel subheader="the terminology..." header={focusContent.name} paragraph={focusContent.description} />
        </div>
      </MainWrapper>
    </main>
  );
}

export default Technology;
