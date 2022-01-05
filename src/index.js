import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  cursor: "wait",
  border: "1px solid black"
};
ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello World!</h1>
    <p>
      <q id="c">
        This is a <q>quote</q> inside a quote.
      </q>
    </p>
  </div>,
  document.getElementById("root")
);
