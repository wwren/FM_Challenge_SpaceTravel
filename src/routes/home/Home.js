import React from "react";
import "./Home.css";
import { getHomeText } from "../../space-data.js";
function Home() {
  const content = getHomeText();
  console.log(content);
  return (
    <main className="home">
      <div className="home__wrapper">
        <div className="home__left-panel">
          <p className="home__text--first-p"> {content.firstParagraph}</p>
          <h1 className="home__text--highlight">{content.highlight}</h1>
          <p className="home__text--last-p"> {content.lastParagraph}</p>
        </div>
        <div className="home__right-panel">
          <button>{content.buttonText}</button>
        </div>
      </div>
    </main>
  );
}

export default Home;
