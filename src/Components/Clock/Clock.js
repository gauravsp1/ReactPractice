import React, { useEffect, useState } from "react";

function Clock() {
  const [displayDate, setDisplayDate] = useState();
  console.log("displayDate", displayDate);
  const [start, setStart] = useState(false);
  const newDate = () => {
    const hours = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    return `${hours}:${min}:${sec}`;
  };

  useEffect(() => {
    let timer = setInterval(() => {
      if (start) {
        setDisplayDate(newDate());
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [start]);
  return (
    <div className="container">
      <div>Clock</div>
      <div className="button-container">
        <div
          className="submit-button"
          onClick={() => setStart((previous) => !previous)}
        >
          {start ? "Pause" : "Start"}
        </div>
      </div>

      <div className="content"> {displayDate}</div>
    </div>
  );
}

export default Clock;
