import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App2() {
  return (
    <div className="App2">
      <button>Menor!</button>
      <button>Acertou!</button>
      <button>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App2 />, rootElement);
