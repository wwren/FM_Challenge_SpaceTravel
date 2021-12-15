import React from "react";
import "./Home.css";
import { getHomeText } from "../../space-data.js";
import MainWrapper from "../../commonComponents/MainWrapper";
function Home() {
  const content = getHomeText();
  return (
    <main className="home">
      <MainWrapper>
        <div className="home__left-panel">
          <p className="home__text--first-p"> {content.firstParagraph}</p>
          <h1 className="text--highlight text--highlight--home">{content.highlight}</h1>
          <p className="text--last-p"> {content.lastParagraph}</p>
        </div>
        <div className="home__right-panel">
          <button>{content.buttonText}</button>
        </div>
      </MainWrapper>
    </main>
  );
}

export default Home;
