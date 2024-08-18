import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    commentData: [
      {
        id: 1,
        author: "Gaurav",
        comment: "hello!!!",
        replies: [],
      },
      {
        id: 2,
        author: "Ankita",
        comment: "hello!!!",
        replies: [],
      },
      {
        id: 3,
        author: "Gaurav",
        comment: "hello!!!",
        replies: [
          {
            id: 15,
            author: "Gaurav",
            comment: "hello!!!",
            replies: [],
            parentId: 3,
          },
          {
            id: 31,
            author: "Gaurav",
            comment: "hello!!!",
            replies: [],
            parentId: 3,
          },
          {
            id: 21,
            author: "Gaurav",
            comment: "hello!!!",
            replies: [],
            parentId: 3,
          },
        ],
      },
      {
        id: 4,
        author: "Gaurav",
        comment: "hello!!!",
        replies: [],
      },
    ],
  },
  reducers: {
    addCommentReply: (state, action) => {
      const addReplyToComment = (comments, parentId, reply) => {
        for (let comment of comments) {
          if (comment.id === parentId) {
            comment.replies.push(reply);
            return true;
          } else if (comment?.replies?.length > 0) {
            const found = addReplyToComment(comment.replies, parentId, reply);
            if (found) {
              return true;
            }
          }
        }
        return false;
      };
      addReplyToComment(
        state.commentData,
        action.payload.parentId,
        action.payload
      );
    },
  },
});
export const { addCommentReply } = commentSlice.actions;
export default commentSlice.reducer;
