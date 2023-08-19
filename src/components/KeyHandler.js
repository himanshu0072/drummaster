import React, { useState, useEffect } from "react";
import "./KeyHandler.css";
import soundA from "./sounds/A.mp3";
import soundS from "./sounds/S.mp3";
// ... import other sound files

function KeyHandler() {
  const handleKeyPress = (event) => {
    switch (event.key) {
      case "a":
        new Audio(soundA).play();
        break;
      case "A":
        new Audio(soundA).play();
        break;
      case "S":
        new Audio(soundS).play();
        break;
      case "s":
        new Audio(soundS).play();
        break;
      // Add cases for other keys and corresponding sounds
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="key_groups">
      <div className="buttons">
        <div className="button" id="button1">
          <button>A</button>
        </div>
        <div className="button" id="button2">
          <button>S</button>
        </div>
        <div className="button" id="button2">
          <button>D</button>
        </div>
        <div className="button" id="button2">
          <button>F</button>
        </div>
        <div className="button" id="button2">
          <button>G</button>
        </div>
        <div className="button" id="button2">
          <button>H</button>
        </div>
        <div className="button" id="button2">
          <button>J</button>
        </div>
        <div className="button" id="button2">
          <button>K</button>
        </div>
        <div className="button" id="button2">
          <button>L</button>
        </div>
      </div>
    </div>
  );
}

export default KeyHandler;
