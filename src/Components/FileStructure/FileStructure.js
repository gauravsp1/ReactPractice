import React, { useState } from "react";
import "./FileStructure.css";
import NestedComponent from "./NestedComponent";
import { fileData } from "./constant";

function FileStructure() {
  const [sampleData, setSampleData] = useState(fileData);

  const handleNewData = (jsonObj) => {
    const data = { ...sampleData };

    function insertData(inputData) {
      if (inputData?.id === jsonObj?.parentId) {
        return {
          ...inputData,
          children: [...inputData.children, jsonObj], // Add new child immutably
        };
      } else if (inputData?.children?.length > 0) {
        const updatedChildren = inputData?.children.map((items) => {
          return insertData(items);
        });

        return { ...inputData, children: updatedChildren };
      }
      return inputData;
    }

    const resultData = insertData(data);

    setSampleData(resultData);
  };

  return (
    <div className="base">
      <NestedComponent sampleData={sampleData} handleNewData={handleNewData} />
    </div>
  );
}

export default FileStructure;
