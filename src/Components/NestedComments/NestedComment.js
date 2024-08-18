import React from "react";
import "./NestedComment.css";
import Comment from "./Comment";
import { useSelector } from "react-redux";

function NestedComment() {
  const commentData = useSelector((state) => state?.comments?.commentData);

  return (
    <div className="comment-container">
      {commentData?.map((item) => {
        return <Comment cardData={item} key={item?.id} />;
      })}
    </div>
  );
}

export default NestedComment;
