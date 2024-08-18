import React from "react";
import "./InfiniteView.css";

function Shimmer() {
  console.log(Array(5).fill(0));
  return (
    <>
      {[...Array(5).keys()].map((item, index) => {
        return (
          <div className="meme-item" key={index}>
            <div
              className="meme-image"
              style={{ height: "300px", backgroundColor: "#dcd5d5" }}
            ></div>
          </div>
        );
      })}
    </>
  );
}

export default Shimmer;
