import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <div className="Block">
        <div className="Exit-Button">
          <div className="text">X</div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
