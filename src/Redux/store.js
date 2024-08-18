import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import commentsReducer from "./Slices/commentSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    comments: commentsReducer,
  },
});

export default store;
