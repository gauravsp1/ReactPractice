import React, { useContext, useEffect, useRef, useState } from "react";
import "./ProgressBar.css";
import { context } from "../../Context/Context";

function ProgressBar() {
  //UseContext
  const contextDataExtract = useContext(context);
  console.log("contextDataExtract", contextDataExtract);
  contextDataExtract.setContextData("test");
  //Progess Bar
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      if (counter < 100) {
        setCounter((previous) => previous + 1);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [counter]);

  //Color Grid
  const [colorChange, setColorChange] = useState([]);
  const [passData, setPassData] = useState(false);

  const handleColorChange = (inputValue) => {
    setColorChange((previous) => {
      return [...previous, inputValue];
    });
  };

  useEffect(() => {
    console.log("colorChange", colorChange);

    if (colorChange.length === 8) {
      setPassData(true);
    } else if (colorChange.length === 0) {
      setPassData(false);
    }
    console.log("passData", passData);

    let timer = setTimeout(() => {
      if (passData) {
        const newData = [...colorChange];
        newData.pop();
        setColorChange(newData);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [colorChange, passData]);

  //Modal
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    console.log("event.target", event.target);
    console.log("modalRef.current", modalRef.current);
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className="bar-container">
        <div
          className="bar"
          style={{
            width: `${counter}%`,
            borderRadius: counter === 100 && "20px",
          }}
        />
        <div className="bar-text">{`${counter}%`}</div>
      </div>
      <div className="main-container">
        {[...Array(9)].map((_, index) => {
          return (
            <div
              key={index}
              className="box"
              onClick={() => {
                handleColorChange(index);
              }}
              style={{
                backgroundColor: colorChange.includes(index) && "red",
                visibility: index === 4 && "hidden",
              }}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      <button onClick={() => setShowModal(true)}>Oen Modal</button>
      {showModal && (
        <div className="modal" ref={modalRef}>
          <div>Test</div>
        </div>
      )}
    </div>
  );
}

export default ProgressBar;
