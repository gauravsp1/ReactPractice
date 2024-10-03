import React, { useEffect, useState } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);
  const [lap, setLap] = useState([]);
  const [start, setStart] = useState(false);

  const displayValue = () => {
    let returnValue = "";
    if (count < 60) {
      returnValue = `${count} sec`;
    } else {
      returnValue = `${Math.floor(count / 60)} min : ${count % 60} sec`;
    }

    return returnValue;
  };
  const displayLapValue = (itemValue) => {
    let returnValue = "";
    if (itemValue < 60) {
      returnValue = `${itemValue} sec`;
    } else {
      returnValue = `${Math.floor(itemValue / 60)} min : ${itemValue % 60} sec`;
    }

    return returnValue;
  };

  useEffect(() => {
    let timer = setInterval(() => {
      if (start) {
        setCount((previous) => {
          return previous + 1;
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [start, count]);

  return (
    <div className="container">
      <div>StopWatch</div>
      <div className="button-container">
        <div
          className="submit-button"
          onClick={() => setStart((previous) => !previous)}
        >
          {start ? "Pause" : "Start"}
        </div>
        <div
          className="submit-button"
          onClick={() =>
            setLap((previous) => {
              return [...previous, count];
            })
          }
        >
          Lap
        </div>
        <div
          className="submit-button"
          onClick={() => {
            setCount(0);
            setStart(false);
          }}
        >
          Stop
        </div>
      </div>
      <div className="content">{displayValue()}</div>
      <div className="lap-container">
        {lap?.map((itemValue, index) => {
          return <div>{`${index + 1}]  ${displayLapValue(itemValue)}`}</div>;
        })}
      </div>
    </div>
  );
}

export default StopWatch;
