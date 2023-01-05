import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../../../api";

const initialState = {
  author: "",
  loading: false,
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
  },
});

export default postSlice.reducer;
