import React, { useState } from "react";
import "./styles.css";

const emojibook = {
  "😂": "Tears of Joy",
  "🙂": "Smile",
  "🙃": "Upside-Down Face",
  "😉": "Winking ",
  "😊": "Smiling Eyes",
  "😇": "Smiling  with Halo",
  "🥰": "Smiling  with Hearts",
  "😍": "Heart-Eyes",
  "🤩": "Star-Eyes",
  "😘": "Blowing a Kiss",
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "": ""
};

var emojilist = Object.keys(emojibook);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojiclickhandler(emoji) {
    var meaning = emojibook[emoji];
    setmeaning(meaning);
  }

  function emojiinputhandler(event) {
    var userinput = event.target.value;

    var meaning = emojibook[userinput];

    if (userinput in emojibook) {
      meaning = emojibook[userinput];
    } else {
      meaning = "Sorry,Dont have in Database,Update Soon .";
    }
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>EMOJI INTERPRETER</h1>
      <h2>LET'S PLAY !!</h2>
      <input
        placeholder="enter emoji here .. "
        onChange={emojiinputhandler}
      ></input>

      <div style={{ padding: "1rem" }}> {meaning}</div>

      <div style={{ padding: "1rem" }}>
        {emojilist.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => emojiclickhandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: " 0.5rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
