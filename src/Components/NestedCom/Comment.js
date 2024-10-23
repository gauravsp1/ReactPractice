import React, { useState } from "react";

function Comment({
  cardData,
  handleAddReply,
  handleDeleteReply,
  handleEditReply,
}) {
  const [showInput, setShowInput] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const comment = e.target.value;
      const jsonObj = {
        id: Math.floor(Math.random() * 1000),
        comment: comment,
        author: "Reply Author",
        replies: [],
      };
      const editObj = {
        id: cardData?.id,
        comment: comment,
        // author: cardData?.author,
        // replies: cardData?.replies,
      };
      setInputValue("");
      setShowInput(false);
      if (edit) {
        handleEditReply(editObj);
      } else {
        handleAddReply(jsonObj, cardData?.id);
        setShowReplies((previous) => !previous);
      }
    }
  };

  return (
    cardData?.author && (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div className="comment-base">
          <div>
            <b>Author: </b>
            {cardData?.author}
          </div>
          <div>
            <b>Comment: </b>
            {cardData?.comment}
          </div>
          <div style={{ alignSelf: "end" }}>
            {cardData?.replies?.length > 0 && (
              <button
                onClick={() => {
                  setShowReplies((previous) => !previous);
                }}
              >
                {showReplies ? "Hide Replies" : "Show Replies"}
              </button>
            )}
            <button
              onClick={() => {
                setShowInput(true);
              }}
            >
              Add a Reply
            </button>
            <div
              onClick={() => handleDeleteReply(cardData?.id)}
              style={{
                position: "absolute",
                right: "0",
                top: "0",
                cursor: "pointer",
              }}
            >
              🗑️
            </div>
            {/* <button >
              Delete Comment
            </button> */}
            <button
              onClick={() => {
                setShowInput(true);
                setEdit(true);
              }}
            >
              Edit Comment
            </button>
          </div>
        </div>
        {showInput && (
          <div>
            <input
              autoFocus
              onBlur={() => {
                setShowInput(false);
              }}
              type="text"
              value={inputValue || cardData?.comment}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>
        )}
        {showReplies && (
          <div className="replies-container">
            {cardData?.replies?.length > 0 &&
              cardData?.replies?.map((item) => {
                return (
                  <Comment
                    cardData={item}
                    handleAddReply={handleAddReply}
                    handleDeleteReply={handleDeleteReply}
                    handleEditReply={handleEditReply}
                  />
                );
              })}
          </div>
        )}
      </div>
    )
  );
}

export default Comment;
