import React, { useState } from "react";
import "./ParentComment.css";
import { sampleData } from "./constant";
import Comment from "./Comment";
function ParentComment() {
  const [data, setData] = useState(sampleData);

  const handleAddReply = (commentObj, parentId) => {
    const newData = [...data];

    function deepCheck(inputData) {
      if (inputData?.id === parentId) {
        return { ...inputData, replies: [...inputData?.replies, commentObj] };
      } else if (inputData?.replies?.length > 0) {
        const replyData = inputData?.replies.map((replyItem) => {
          return deepCheck(replyItem);
        });
        return { ...inputData, replies: replyData };
      }
      return inputData;
    }

    const result = newData.map((item) => {
      return deepCheck(item);
    });

    setData(result);
  };

  const handleDeleteReply = (commentId) => {
    const newData = [...data];
    function deepCheck(inputData) {
      if (inputData?.id === commentId) {
        return {};
      } else if (inputData?.replies?.length > 0) {
        const updatedData = inputData?.replies.map((replyItem) => {
          return deepCheck(replyItem);
        });
        return { ...inputData, replies: updatedData };
      }
      return inputData;
    }
    const result = newData.map((item) => {
      return deepCheck(item);
    });
    console.log("res", result);

    setData(result);
  };

  const handleEditReply = (commentObj) => {
    const newData = [...data];
    function deepData(inputData) {
      if (inputData?.id === commentObj?.id) {
        return { ...inputData, comment: commentObj?.comment };
      } else if (inputData?.replies.length > 0) {
        const updatedReplies = inputData.replies.map((replyItem) => {
          return deepData(replyItem);
        });
        return { ...inputData, replies: updatedReplies };
      }
      return inputData;
    }

    const result = newData.map((item) => {
      return deepData(item);
    });
    setData(result);
  };

  return (
    <div className="base" style={{ flexDirection: "column", gap: "20px" }}>
      {data.map((cardData) => {
        return (
          <Comment
            key={cardData?.id}
            cardData={cardData}
            handleAddReply={handleAddReply}
            handleDeleteReply={handleDeleteReply}
            handleEditReply={handleEditReply}
          />
        );
      })}
    </div>
  );
}

export default ParentComment;
