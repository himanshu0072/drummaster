import React, { useState, useEffect } from "react";
import "./KeyHandler.css";
import soundA from "./sounds/A.mp3";
import soundS from "./sounds/S.mp3";
import soundD from "./sounds/D.mp3";
import soundF from "./sounds/F.mp3";
import soundG from "./sounds/G.mp3";
import soundH from "./sounds/H.mp3";
import soundJ from "./sounds/J.mp3";
import soundK from "./sounds/K.mp3";
import soundL from "./sounds/L.mp3";
import soundQ from "./sounds/Q.mp3";
import soundW from "./sounds/W.mp3";
import soundE from "./sounds/E.mp3";
import soundR from "./sounds/R.mp3";
import soundT from "./sounds/T.mp3";
import soundY from "./sounds/Y.wav";
import soundU from "./sounds/U.mp3";
import soundI from "./sounds/I.mp3";
import soundO from "./sounds/O.mp3";
import soundP from "./sounds/P.mp3";
import soundZ from "./sounds/Z.mp3";
import soundX from "./sounds/X.mp3";
import soundC from "./sounds/C.mp3";
import soundV from "./sounds/V.mp3";
import soundB from "./sounds/B.mp3";
import soundN from "./sounds/N.mp3";
import soundM from "./sounds/M.mp3";

function KeyHandler() {
  // To play the music on click
  const [pressedKey, setPressedKey] = useState(null);

  const playSound = (sound) => {
    new Audio(sound).play();
  };

  // To play the music on key press from keyboard
  const handleKeyPress = (event) => {
    setPressedKey(event.key);
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
      case "D":
        new Audio(soundD).play();
        break;
      case "d":
        new Audio(soundD).play();
        break;
      case "F":
        new Audio(soundF).play();
        break;
      case "f":
        new Audio(soundF).play();
        break;
      case "G":
        new Audio(soundG).play();
        break;
      case "g":
        new Audio(soundG).play();
        break;
      case "H":
        new Audio(soundH).play();
        break;
      case "h":
        new Audio(soundH).play();
        break;
      case "J":
        new Audio(soundJ).play();
        break;
      case "j":
        new Audio(soundJ).play();
        break;
      case "K":
        new Audio(soundK).play();
        break;
      case "k":
        new Audio(soundK).play();
        break;
      case "L":
        new Audio(soundL).play();
        break;
      case "l":
        new Audio(soundL).play();
        break;
      case "Q":
        new Audio(soundQ).play();
        break;
      case "q":
        new Audio(soundQ).play();
        break;
      case "W":
        new Audio(soundW).play();
        break;
      case "w":
        new Audio(soundW).play();
        break;
      case "E":
        new Audio(soundE).play();
        break;
      case "e":
        new Audio(soundE).play();
        break;
      case "R":
        new Audio(soundR).play();
        break;
      case "r":
        new Audio(soundR).play();
        break;
      case "T":
        new Audio(soundT).play();
        break;
      case "t":
        new Audio(soundT).play();
        break;
      case "Y":
        new Audio(soundY).play();
        break;
      case "y":
        new Audio(soundY).play();
        break;
      case "U":
        new Audio(soundU).play();
        break;
      case "u":
        new Audio(soundU).play();
        break;
      case "I":
        new Audio(soundI).play();
        break;
      case "i":
        new Audio(soundI).play();
        break;
      case "O":
        new Audio(soundO).play();
        break;
      case "o":
        new Audio(soundO).play();
        break;
      case "P":
        new Audio(soundP).play();
        break;
      case "p":
        new Audio(soundP).play();
        break;
      case "Z":
        new Audio(soundZ).play();
        break;
      case "z":
        new Audio(soundZ).play();
        break;
      case "X":
        new Audio(soundX).play();
        break;
      case "x":
        new Audio(soundX).play();
        break;
      case "C":
        new Audio(soundC).play();
        break;
      case "c":
        new Audio(soundC).play();
        break;
      case "V":
        new Audio(soundV).play();
        break;
      case "v":
        new Audio(soundV).play();
        break;
      case "B":
        new Audio(soundB).play();
        break;
      case "b":
        new Audio(soundB).play();
        break;
      case "N":
        new Audio(soundN).play();
        break;
      case "n":
        new Audio(soundN).play();
        break;
      case "M":
        new Audio(soundM).play();
        break;
      case "m":
        new Audio(soundM).play();
        break;
      // Add cases for other keys and corresponding sounds
      default:
        break;
    }
  };

  const handleKeyUp = () => {
    setPressedKey(null);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const isKeyPressed = (key) => {
    return (
      pressedKey === key ||
      pressedKey === key.toUpperCase() ||
      pressedKey === key.toLowerCase()
    );
  };

  return (
    <div className="key_groups">
      <div className="b1">
        <div className="buttons1">
          <div className="button" id="button1">
            <button
              className={isKeyPressed("Q") ? "pressed" : ""}
              onClick={() => playSound(soundQ)}
            >
              Q
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("W") ? "pressed" : ""}
              onClick={() => playSound(soundW)}
            >
              W
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("E") ? "pressed" : ""}
              onClick={() => playSound(soundE)}
            >
              E
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("R") ? "pressed" : ""}
              onClick={() => playSound(soundR)}
            >
              R
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("T") ? "pressed" : ""}
              onClick={() => playSound(soundT)}
            >
              T
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("Y") ? "pressed" : ""}
              onClick={() => playSound(soundY)}
            >
              Y
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("U") ? "pressed" : ""}
              onClick={() => playSound(soundU)}
            >
              U
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("I") ? "pressed" : ""}
              onClick={() => playSound(soundI)}
            >
              I
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("O") ? "pressed" : ""}
              onClick={() => playSound(soundO)}
            >
              O
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("P") ? "pressed" : ""}
              onClick={() => playSound(soundP)}
            >
              P
            </button>
          </div>
        </div>
      </div>
      <div className="b2">
        <div className="buttons2">
          <div className="button" id="button1">
            <button
              className={isKeyPressed("A") ? "pressed" : ""}
              onClick={() => playSound(soundA)}
            >
              A
            </button>
          </div>
          <div className="button" id="button2">
            <button
              className={isKeyPressed("S") ? "pressed" : ""}
              onClick={() => playSound(soundS)}
            >
              S
            </button>
          </div>
          <div className="button" id="button2">
            <button
              className={isKeyPressed("D") ? "pressed" : ""}
              onClick={() => playSound(soundD)}
            >
              D
            </button>
          </div>
          <div className="button" id="button2">
            <button
              className={isKeyPressed("F") ? "pressed" : ""}
              onClick={() => playSound(soundF)}
            >
              F
            </button>
          </div>
          <div className="button" id="button2">
            <button
              className={isKeyPressed("G") ? "pressed" : ""}
              onClick={() => playSound(soundG)}
            >
              G
            </button>
          </div>
          <div className="button" id="button2">
            <button
              className={isKeyPressed("H") ? "pressed" : ""}
              onClick={() => playSound(soundH)}
            >
              H
            </button>
          </div>
          <div className="button" id="button2">
            <button
              className={isKeyPressed("J") ? "pressed" : ""}
              onClick={() => playSound(soundJ)}
            >
              J
            </button>
          </div>
          <div className="button" id="button2">
            <button
              className={isKeyPressed("K") ? "pressed" : ""}
              onClick={() => playSound(soundK)}
            >
              K
            </button>
          </div>
          <div className="button" id="button2">
            <button
              className={isKeyPressed("L") ? "pressed" : ""}
              onClick={() => playSound(soundL)}
            >
              L
            </button>
          </div>
        </div>
      </div>
      <div className="b3">
        <div className="buttons3">
          <div className="button" id="button1">
            <button
              className={isKeyPressed("Z") ? "pressed" : ""}
              onClick={() => playSound(soundZ)}
            >
              Z
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("X") ? "pressed" : ""}
              onClick={() => playSound(soundX)}
            >
              X
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("C") ? "pressed" : ""}
              onClick={() => playSound(soundC)}
            >
              C
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("V") ? "pressed" : ""}
              onClick={() => playSound(soundV)}
            >
              V
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("B") ? "pressed" : ""}
              onClick={() => playSound(soundB)}
            >
              B
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("N") ? "pressed" : ""}
              onClick={() => playSound(soundN)}
            >
              N
            </button>
          </div>
          <div className="button" id="button1">
            <button
              className={isKeyPressed("M") ? "pressed" : ""}
              onClick={() => playSound(soundM)}
            >
              M
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyHandler;
