import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../../api";

const initialState = {
  currentUser: null,
  successLogin: false,
  successRegister: false,
  loading: false,
};

export const registerUser = createAsyncThunk(
  "register",
  async (data, thunkAPI) => {
    try {
      const result = await api.post("/api/v1/user/register", data);
      toast.dismiss();
      if (result.data.success) {
        toast.success(result.data.message);
        return true;
      }
      toast.error(result.data.message);
      return false;
    } catch (error) {
      return thunkAPI.rejectWithValue("Register fail!");
    }
  }
);

export const login = createAsyncThunk("login", async (data, thunkAPI) => {
  try {
    const result = await api.post("/api/v1/user/login", data);
    toast.dismiss();
    if (result.data.success) {
      toast.success(result.data.message);
      return result.data.user;
    }
    toast.error(result.data.message);
    return null;
  } catch (error) {
    return thunkAPI.rejectWithValue("Login fail!");
  }
});

const authSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state, action) => {
      state.currentUser = null;
      state.successLogin = false;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.successRegister = false;
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      if (action.payload) {
        state.successRegister = true;
      } else state.successRegister = false;
      state.loading = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.successRegister = false;
      state.loading = false;
    },
    [login.pending]: (state, action) => {
      state.successLogin = false;
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      if (action.payload) {
        state.successLogin = true;
        state.currentUser = action.payload;
      } else state.successLogin = false;
      state.loading = false;
    },
    [login.rejected]: (state, action) => {
      state.successLogin = false;
      state.loading = false;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
