import React from "react";
import "./Accordian.css";

function AccordianCard({ cardData, showDetails, handleCardClick }) {
  const { title, description } = cardData;
  return (
    <div className="card-container">
      <div
        className="card-header"
        onClick={handleCardClick}
        style={{ borderBottom: showDetails && "1px solid black" }}
      >
        <div> {title} </div>
        <img
          src="/assest/down-arrow.png"
          alt="Logo"
          className={`arrow-image ${showDetails ? "arrow-down" : ""}`}
        />
      </div>

      {showDetails && <div className="card-desc">{description}</div>}
    </div>
  );
}

export default AccordianCard;
