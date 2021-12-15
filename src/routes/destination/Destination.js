import React, { useState, useRef } from "react";
import MainWrapper from "../../commonComponents/MainWrapper";
import { pageTopLeftIntro, distanceBottomTitle, getDestination } from "../../space-data";
import "./Destination.css";

function Destination() {
  const destination = getDestination();
  const [focusContent, setFocusContent] = useState(destination[0]);
  const controlRef = useRef(null);

  const _handleClick = (e, idx) => {
    setFocusContent(destination[idx]);

    // remove .avtive to classList
    if (controlRef) {
      controlRef.current.childNodes.forEach((node, i) => {
        if (node.classList.contains("active") && idx !== i) {
          node.classList.remove("active");
        }
      });
    }
    e.target.classList.add("active");
  };

  return (
    <main className="destination">
      <MainWrapper text={pageTopLeftIntro.destinations}>
        <img
          className="destination__left-panel"
          src={require(`../../assets${focusContent.images.png}`).default}
          alt={focusContent.name}
        />
        <div className="destination__right-panel">
          <div className="control-panel" ref={controlRef}>
            {destination.map((ele, idx) => {
              return (
                <button key={ele.name} onClick={(e) => _handleClick(e, idx)} className={`${idx == 0 ? "active" : ""}`}>
                  {ele.name}
                </button>
              );
            })}
          </div>
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
