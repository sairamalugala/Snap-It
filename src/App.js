import { useState } from "react";
import CodeMirrorComp from "./CodeMirror/CodeMirrorComp";
import Controls from "./Controls/Controls";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

import "./styles.css";

export default function App() {
  const [colors, setColors] = useState({
    color1: "#059fff",
    color2: "#0d17a0"
  });
  const [options, setOptions] = useState({
    theme: "cobalt",
    keyMap: "sublime",
    mode: "javascript",
    lineNumbers: false,
    lineWrapping: true
  });
  const [title, setTitle] = useState("JS map function");
  const { color1, color2 } = colors;
  const changeColor = (event) => {
    const target = event.target;
    setColors({
      ...colors,
      [target.name]: target.value
    });
  };
  const updateOptions = (event) => {
    const target = event.target;
    setOptions({
      ...options,
      [target.name]: target.value
    });
  };
  const downloadSnippet = () => {
    let snap = document.querySelector("#editor");
    htmlToImage.toPng(snap, { quality: 1 }).then(function (dataUrl) {
      download(dataUrl, "snap-it.png");
    });
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="App">
      <div style={{
        textAlign: "center",
        marginBottom: "30px",
        fontWeight: "bold",
        fontSize:"30px",
        marginTop:"20px"
      }}>Snap-It</div>
      <div
        id="editor"
        className="gradient-box"
        style={{
          backgroundImage: `linear-gradient(120deg, ${color1}, ${color2})`
        }}
      >
        <div id="code-wrapper">
          <div id="bar">
            <div id="red"></div>
            <div id="yellow"></div>
            <div id="green"></div>
            <div id="name">
              <input name="title" value={title} onChange={onTitleChange} title="Click here to change the title" />
            </div>
          </div>
          <div className="screen">
            <CodeMirrorComp options={options} />
            <div className="codemirrror-wrapper"></div>
          </div>
        </div>
      </div>
      <Controls
        downloadSnippet={downloadSnippet}
        changecolor={changeColor}
        optionChanged={updateOptions}
        colors={colors}
        options={options}
      />
    </div>
  );
}
