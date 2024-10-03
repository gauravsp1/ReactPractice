import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState(null);
  const [display, setDisplay] = useState("");

  const displayItems = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "+",
    "-",
    "*",
    "/",
    "showResult",
    "clear",
  ];
  console.log("display", display);
  console.log("result", eval(result));

  const handleClick = (inputValue) => {
    if (inputValue === "clear") {
      setResult(null);
      setDisplay("");
    } else if (inputValue === "showResult") {
      setResult(display);
      setDisplay("");
    } else {
      setDisplay((previous) => {
        return previous + inputValue;
      });
    }
  };
  return (
    <div className="base">
      <div className="container">
        <div className="result">{eval(result) || display}</div>
        <div className="number-pad">
          {displayItems?.map((item, index) => {
            return (
              <div
                key={index}
                className="items"
                onClick={() => handleClick(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
