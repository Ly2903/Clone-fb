import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/Auth/authSlice";
import postReducer from "./components/Content/CreatePost/PostSlice";
import friendsSlice from "./pages/Friends/friendsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    friends: friendsSlice,
  },
});
export default store;
