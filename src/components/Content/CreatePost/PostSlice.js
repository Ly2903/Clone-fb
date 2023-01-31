import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../../../api";
import { setHeader } from "../../../api/setHeader";

const initialState = {
  author: "",
  loading: false,
  posts: [],
  allPost: [],
};

export const createPost = createAsyncThunk(
  "createPost",
  async (data, thunkAPI) => {
    try {
      const result = await api.post("/api/v1/post/createPost", data);
      toast.dismiss();
      if (result.data.success) {
        toast.success(result.data.message);
        return true;
      }
      toast.error(result.data.message);
      return false;
    } catch (error) {
      return thunkAPI.rejectWithValue("Create Post fail!");
    }
  }
);

export const getPosts = createAsyncThunk("getPosts", async (data, thunkAPI) => {
  try {
    const result = await api.get("/api/v1/post/getPosts");

    console.log("get post", result);
    return result.data.posts;
  } catch (error) {
    return thunkAPI.rejectWithValue("Get Post fail!");
  }
});

export const getAllPost = createAsyncThunk(
  "getAllPost",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/post/getAllPost");

      console.log("get post", result);
      return result.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue("Get Post fail!");
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [createPost.pending]: (state, action) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.allPost = action.payload;
    },
  },
});

export default postSlice.reducer;
