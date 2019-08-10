import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const elemento = (
  <div>
    <h2>Olá Mundo</h2>
  </div>
);
function App() {
  const [i, setI] = useState(1);
  const increment = () => {
    setI(i + 1);
  };
  return (
    <div className="App">
      <h1>Hello Wold contagem {i}</h1>
      <button onClick={increment}> Adicionando </button>
      <h2>Start editing to see some magic happen!</h2>
      {elemento}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
