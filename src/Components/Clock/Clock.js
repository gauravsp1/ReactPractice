import React, { useEffect, useState } from "react";

function Clock() {
  const [displayDate, setDisplayDate] = useState();
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value); // Update state with the new value
  };

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
      <input
        type="range"
        id="slider"
        min="0"
        max="100"
        value={value}
        step="10"
        onChange={handleChange} // Update value as the user slides
      />{" "}
      <span>{value}</span>
    </div>
  );
}

export default Clock;
