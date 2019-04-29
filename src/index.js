import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <div className="Block">
        <div className="Exit-Button">
          <svg width="40" height="40">
            <line
              x1={0}
              y1={0}
              x2={40}
              y2={40}
              stroke="black"
              strokeWidth="2.5"
            />
            <line
              x1={0}
              y1={40}
              x2={40}
              y2={0}
              stroke="black"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
