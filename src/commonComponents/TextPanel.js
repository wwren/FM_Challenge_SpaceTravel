import React from "react";
import "./TextPanel.css";
function TextBox({ subheader, header, paragraph }) {
  return (
    <div className="text-panel">
      <h5 className="text--highlight">{subheader}</h5>
      <h4 className="text--highlight text--highlight--common"> {header}</h4>
      <p className="text--last-p text-box">{paragraph}</p>
    </div>
  );
}

export default TextBox;
