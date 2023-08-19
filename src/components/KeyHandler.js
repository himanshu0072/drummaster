import React from "react";
import "./KeyHandler.css";

function KeyHandler() {
  return (
    <div className="key_groups">
      <div className="buttons">
        <div className="button" id="button1">
          <p>A</p>
        </div>
        <div className="button" id="button2">
          <p>S</p>
        </div>
        <div className="button" id="button3">
          <p>D</p>
        </div>
        <div className="button" id="button4">
          <p>F</p>
        </div>
        <div className="button" id="button5">
          <p>G</p>
        </div>
        <div className="button" id="button6">
          <p>H</p>
        </div>
        <div className="button" id="button7">
          <p>J</p>
        </div>
        <div className="button" id="button8">
          <p>K</p>
        </div>
        <div className="button" id="button9">
          <p>L</p>
        </div>
      </div>
    </div>
  );
}

export default KeyHandler;
