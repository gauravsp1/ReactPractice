import React, { useState } from "react";
import "./FileStructure.css";

function NestedComponent({ sampleData, handleNewData }) {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [metaData, setMetaData] = useState({});

  const handleAddFileAndFolder = (type, id) => {
    setShowInput(true);
    setMetaData({ type, id });
  };
  const randomNumber = () => {
    return Date.now();
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const jsonObj = {
        id: randomNumber(),
        type: metaData?.type,
        title: inputValue,
        parentId: metaData?.id,
      };
      if (metaData?.type === "folder") {
        jsonObj.children = [];
      }

      setShowInput(false);
      setInputValue(null);
      handleNewData(jsonObj);
    }
  };

  return (
    <div className="nested-container">
      <div className={`${sampleData?.type === "folder" ? "item-title" : ""}`}>
        {sampleData?.type === "folder" ? <> 📁</> : <>📄</>} {sampleData?.title}
        {sampleData?.type === "folder" && (
          <div>
            <button
              onClick={() => handleAddFileAndFolder("folder", sampleData?.id)}
            >
              Add Folder
            </button>
            <button
              onClick={() => handleAddFileAndFolder("file", sampleData?.id)}
            >
              Add File
            </button>
          </div>
        )}
      </div>
      {showInput && (
        <div>
          <input
            type="text"
            value={inputValue}
            autoFocus
            onBlur={() => {
              setShowInput(false);
            }}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Type something..."
          />
        </div>
      )}
      {sampleData?.children?.length > 0 && (
        <div className="item-container">
          {sampleData?.children?.map((item) => {
            return (
              <NestedComponent
                key={item.id}
                sampleData={item}
                handleNewData={handleNewData}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default NestedComponent;
