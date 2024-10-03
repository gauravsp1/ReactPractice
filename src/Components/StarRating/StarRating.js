import React from "react";
import "../ComponentCSS.css";
function StarRating() {
  return (
    <div className="container">
      <div>StarRating</div>
      {/* <img src="/assest/star-regular.svg" alt="Star" />; */}
      <div className="content">
        {[...Array(5).keys()].map((item) => {
          console.log("Here", item);

          return (
            <img
              src="/assest/star-regular.svg"
              key={item}
              alt="Star"
              className="star-rating"
            />
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
