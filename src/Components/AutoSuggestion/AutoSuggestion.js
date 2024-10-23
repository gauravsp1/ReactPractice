import React, { useState } from "react";
import "./AutoSuggestion.css";

function AutoSuggestion() {
  const [searchValue, setSearchValue] = useState("");
  const suggestedValues = [
    "test",
    "test2sefs3",
    "test",
    "test23df",
    "test2sdf3",
    "test",
    "test23sdf23resdf",
  ];
  const getHighlitedText = (text) => {
    const res = text.split(new RegExp(`(${searchValue})`, "gi"));
    console.log("res", res);

    const rest = res.map((part, index) =>
      part.toLowerCase() === searchValue.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    );
    console.log("rest", rest);
    return rest;
  };
  return (
    <div className="base" style={{ flexDirection: "column" }}>
      <input
        style={{ width: "200px" }}
        type="search"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <div className="search-container">
        {suggestedValues
          ?.filter((item) => {
            return item.includes(searchValue);
          })
          .map((item) => {
            return <div>{getHighlitedText(item)}</div>;
          })}
      </div>
    </div>
  );
}

export default AutoSuggestion;
