import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";

import "./styles.css";

const App = () => (
  <div className="App">
    <h3>Name Tag Generator</h3>
    <NameTag />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
