import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/Auth/authSlice";
import postReducer from "./components/Content/CreatePost/PostSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
export default store;
