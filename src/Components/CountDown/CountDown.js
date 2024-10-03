import React, { useEffect, useState } from "react";
import "./CountDown.css";
function CountDown() {
  const [inputValue, setInputValue] = useState(null);
  const [pause, setPause] = useState(false);
  const [countDown, setCountDown] = useState(0);
  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };
  const startCountDown = () => {
    setCountDown(inputValue * 60);
  };
  const handlePause = () => {
    setPause((previous) => !previous);
  };
  const handleClear = () => {
    setCountDown(0);
  };
  const displayValue = () => {
    let returnValue = "";
    if (countDown < 60) {
      returnValue = `${countDown} sec`;
    } else {
      returnValue = `${Math.floor(countDown / 60)} min : ${countDown % 60} sec`;
    }

    return returnValue;
  };
  useEffect(() => {
    let timer = setInterval(() => {
      if (countDown > 0 && !pause) {
        setCountDown((previous) => {
          return previous - 1;
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [countDown, pause]);
  return (
    <div className="container">
      <div>CountDown</div>
      <input type="number" value={inputValue} onChange={handleChange} />
      <div className="submit-button" onClick={startCountDown}>
        Submit
      </div>
      <div className="submit-button" onClick={handleClear}>
        Clear
      </div>
      {countDown > 0 && (
        <div className="submit-button" onClick={handlePause}>
          {!pause ? "Pause" : "Play"}
        </div>
      )}
      <div className="content">{displayValue()}</div>
    </div>
  );
}

export default CountDown;
