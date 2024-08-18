import React, { useState } from "react";
import AccordianCard from "./AccordianCard";
import "./Accordian.css";

function Accordian() {
  const [showDetails, setShowDetails] = useState([1]);
  const sampleData = [
    {
      id: 1,
      title: "Test1",
      description: `lorem tesefsd sdfgfvfd sssssssssssss ssssssssssssssss ssscxdfhbgbnfghmh,jmhnfxbnv ghjmvngbfxzdgrh tjmj vcxfhvnhb cgthhvn vvxhmjb`,
    },
    {
      id: 2,
      title: "Test1",
      description: `lorem tesefsd sdfgfvfd sssssssssssss ssssssssssssssss ssscxdfhbgbnfghmh,jmhnfxbnv ghjmvngbfxzdgrh tjmj vcxfhvnhb cgthhvn vvxhmjb`,
    },
    {
      id: 3,
      title: "Test1",
      description: `lorem tesefsd sdfgfvfd sssssssssssss ssssssssssssssss ssscxdfhbgbnfghmh,jmhnfxbnv ghjmvngbfxzdgrh tjmj vcxfhvnhb cgthhvn vvxhmjb`,
    },
    {
      id: 4,
      title: "Test1",
      description: `lorem tesefsd sdfgfvfd sssssssssssss ssssssssssssssss ssscxdfhbgbnfghmh,jmhnfxbnv ghjmvngbfxzdgrh tjmj vcxfhvnhb cgthhvn vvxhmjb`,
    },
  ];
  return (
    <div className="accordian-container">
      {sampleData?.map((item) => {
        return (
          <AccordianCard
            cardData={item}
            showDetails={showDetails.includes(item?.id)}
            handleCardClick={() => {
              showDetails.includes(item?.id)
                ? setShowDetails((previous) => {
                    return previous.filter((itemFilter) => {
                      return itemFilter !== item?.id;
                    });
                  })
                : setShowDetails((previous) => {
                    return [...previous, item?.id];
                  });
            }}
          />
        );
      })}
    </div>
  );
}

export default Accordian;
