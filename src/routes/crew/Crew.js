import React, { useState, useRef, useCallback } from "react";
import MainWrapper from "../../commonComponents/MainWrapper";
import { pageTopLeftIntro, getCrew } from "../../space-data";
import "./Crew.css";
// import $ from "jquery";

//TODO consider add swipe event
function Crew() {
  const crew = getCrew();
  const [focusContent, setFocusContent] = useState(crew[0]);
  const controlRef = useRef(null);

  const _handleClick = useCallback((e, idx) => {
    setFocusContent(crew[idx]);
    // remove .active to classList
    if (controlRef) {
      controlRef.current.childNodes.forEach((node, i) => {
        if (node.classList.contains("active") && idx !== i) {
          node.classList.remove("active");
        }
      });
    }
    e.target.classList.add("active");
  }, []);

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
          <div className="crew__control-panel" ref={controlRef}>
            {crew.map((ele, idx) => {
              return (
                <button
                  key={crew.name}
                  onClick={(e) => _handleClick(e, idx)}
                  className={`crew__control-dot ${idx == 0 ? "active" : ""}`}
                ></button>
              );
            })}
          </div>
          <div className="crew__text-panel">
            <h5 className="text--highlight">{focusContent.role}</h5>
            <h4 className="text--highlight text--highlight--crew"> {focusContent.name}</h4>
            <p className="text--last-p">{focusContent.bio}</p>
          </div>
        </div>
      </MainWrapper>
    </main>
  );
}

export default Crew;
