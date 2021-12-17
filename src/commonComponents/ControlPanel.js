import React, { useState, useRef, useCallback } from "react";

function ControlPanel({ content, setContent, hasButtonText, hasButtonIdx }) {
  const controlRef = useRef(null);

  const _handleClick = useCallback((e, idx) => {
    setContent(content[idx]);
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
    <div className="control-panel" ref={controlRef}>
      {content.map((ele, idx) => {
        return (
          <button
            key={ele.name}
            onClick={(e) => _handleClick(e, idx)}
            className={`control-button ${hasButtonText ? "button-text" : hasButtonIdx ? "button-idx" : "button-dot"} ${
              idx == 0 ? "active" : ""
            }`}
          >
            {hasButtonText ? ele.name : hasButtonIdx ? parseInt(idx) + 1 : ""}
          </button>
        );
      })}
    </div>
  );
}

export default ControlPanel;
