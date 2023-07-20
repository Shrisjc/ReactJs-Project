import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("primary");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("primary");
      document.body.style.backgroundColor = "white";
    } else {
      console.log("shri");
      setMode("dark");
      document.body.style.backgroundColor = "gray";
    }
  };
  return (
    <div className="App">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </div>
  );
}

export default App;
