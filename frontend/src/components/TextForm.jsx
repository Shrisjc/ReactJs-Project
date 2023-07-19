import React, { useState } from "react";

export default function TextForm(props) {
  const handleUPClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  // text = "new text" // wrong way to change the state
  //setText("shri"); // correct way to change state
  return (
    <div>
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
    </div>
  );
}
