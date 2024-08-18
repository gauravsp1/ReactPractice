import React, { useState } from "react";
import "./NestedComment.css";
import AddComment from "./AddComment";

function Comment({ cardData }) {
  const [showPost, setShowPost] = useState(false);
  const handleShowPost = (val) => {
    setShowPost(val);
  };
  return (
    <>
      <div className="comment-content">
        <div className="top-section">
          <div className="profile-image">
            {cardData?.author.at(0).toUpperCase()}
          </div>
          <div className="title">{cardData?.author}</div>
        </div>
        <div className="comment">{cardData?.comment}</div>
        <div className="reply" onClick={() => handleShowPost(true)}>
          Reply
        </div>
      </div>
      {cardData?.replies?.length > 0 && (
        <div className="comment-replies">
          {cardData?.replies?.map((item) => {
            return <Comment cardData={item} />;
          })}
        </div>
      )}
      {showPost && (
        <AddComment cardData={cardData} handleShowPost={handleShowPost} />
      )}
    </>
  );
}

export default Comment;
