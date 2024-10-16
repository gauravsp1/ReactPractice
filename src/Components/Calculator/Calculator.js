import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    console.log("Here");
    return () => {
      console.log("In return");
    };
  }, []);
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
