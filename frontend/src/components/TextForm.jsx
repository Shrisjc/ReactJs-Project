import React, { useState } from "react";

export default function TextForm(props) {
  const handleUPClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleCapitalizeClick = () => {
    let newText = text
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setText(newText);
  };
  const handleReverseClick = () => {
    let Ntext = text
      .split("")
      .map((char) => {
        return char === char.toUpperCase()
          ? char.toLowerCase()
          : char.toUpperCase();
      })
      .join("");

    setText(Ntext);
  };
  const handleAlternatingClick = () => {
    let newText = text
      .split("")
      .map((char, i) => {
        return i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      })
      .join("");

    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const ClearText = () => {
    if (text.trim().length === 0) {
      alert("Please enter some value to clear");
    } else {
      setText("");
    }
  };
  const RemoveExtraSpace = () => {
    var str = "";
    str = text.split(/[  ]+/).join(" ");
    setText(str);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => alert("Copied!"));
  };
  const DownloadText = () => {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", "output.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const changeTheColor = () => {
    const color = [
      "aliceblue",
      "pink",
      "aqua",
      "antiquewhite",
      "aquamarine",
      "azure",
      "beige",
      "bisque",
      "blanchedalmond",
      "blueviolet",
      "brown",
      "burlywood",
      "cadetblue",
    ];
    document.querySelector("textarea").style.backgroundColor =
      color[Math.floor(Math.random() * 4)];
  };
  const changeColor = () => {
    const colors = [
      "black",
      "pink",
      "red",
      "aqua",
      "green",
      "blueviolet",
      "#8B4513",
      "#FFD700",
      "#FFA07A",
      "#ADD8E6",
      "#9ACD32",
      "#F0FFFF",
      "#FFFACD",
      "#DA70D6",
    ];
    document.querySelector("textarea").style.color =
      colors[Math.floor(Math.random() * 3)];
  };

  const countSpecial = (text) => {
    const punct = "~`!@#$%^&*+=-[]\\';,/{}|\":<>?";
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (!punct.includes(text[i])) {
        continue;
      }
      count++;
    }
    return count;
  };

  const UniqueWord = () => {
    let count = 0;
    var wordsArray = text.split(/\s+/);
    let uniqueArr = [];
    for (var word of wordsArray) {
      if (!uniqueArr.includes(word)) {
        count++;
      }
    }
    return count;
  };
  const [text, setText] = useState("");
  // text = "new text" // wrong way to change the state
  //setText("shri"); // correct way to change state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUPClick}>
          Conver to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowerClick}
        >
          Conver to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleCapitalizeClick}
        >
          Conver to Capitalize
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleReverseClick}
        >
          InReverse
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleAlternatingClick}
        >
          AlTeRnAtInG Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          CopyText
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={changeTheColor}>
          Change Background Color
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={changeColor}>
          Change Color
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={DownloadText}>
          Download Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={RemoveExtraSpace}
        >
          Remove Extra space
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={ClearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p style={{ color: "aqua" }}>
          <b>
            {text.trim().split(/\s+/).length} words {text.length} Characters
            <br />
            {text.trim().split(/\s+/).join("").length} characters (without
            spaces)
          </b>
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read this Text</p>
        <p id="resultDiv">
          <b> {UniqueWord(text)} Unique Word in above text</b>
        </p>
        <p> {countSpecial(text)} Special Character in text</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
