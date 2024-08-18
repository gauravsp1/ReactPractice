import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./NestedComment.css";
import { addCommentReply } from "../../Redux/Slices/commentSlice";

function AddComment({ cardData, handleShowPost }) {
  const [inputComment, setInputComment] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value } = e.target;
    setInputComment(value);
  };
  const randomNumber = () => {
    return Math.floor(Math.random() * 100000);
  };
  const handlePost = () => {
    // const parentId = cardData?.id;
    const jsonObj = {
      id: randomNumber(),
      author: cardData?.author,
      comment: inputComment,
      replies: [],
      parentId: cardData?.id,
    };
    dispatch(addCommentReply(jsonObj));
    handleShowPost(false);
  };
  return (
    <div className="comment-content" style={{ marginLeft: "100px" }}>
      <div className="top-section">
        <div className="profile-image">
          {cardData?.author.at(0).toUpperCase()}
        </div>
        <div className="title">{cardData?.author}</div>
      </div>
      <div>
        <input
          type="text"
          className="post-box"
          value={inputComment}
          onChange={handleChange}
        />
      </div>
      <div className="reply" onClick={handlePost}>
        Post
      </div>
    </div>
  );
}

export default AddComment;
