import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import api from "../../api";

const initialState = {
  loadingSentInv: false,
  loadingAccInv: false,
  suggestions: [],
  sentInvitations: [],
  requests: [],
  list: [],
};

export const sentInvitations = createAsyncThunk(
  "sentInvitations",
  async (data, thunkAPI) => {
    try {
      toast.dismiss();
      const result = await api.put(
        `/api/v1/friends/sendInvitations/${data.id}`,
        {
          idNewFriends: data.idNewFriends,
        }
      );
      if (result.data.success) toast.success(result.data.message);
      else toast.error(result.data.message);
    } catch (error) {
      return thunkAPI.rejectWithValue("Add friends fail!");
    }
  }
);

export const accInvitations = createAsyncThunk(
  "accInvitations",
  async (data, thunkAPI) => {
    try {
      toast.dismiss();
      const result = await api.put(
        `/api/v1/friends/accInvitations/${data.id}`,
        {
          idNewFriends: data.idNewFriends,
        }
      );
      if (result.data.success) toast.success(result.data.message);
      else toast.error(result.data.message);
    } catch (error) {
      return thunkAPI.rejectWithValue("Add friends fail!");
    }
  }
);

export const getSuggestions = createAsyncThunk(
  "getSuggestions",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/friends/getSuggestions");

      return result.data.suggestions;
    } catch (error) {
      return thunkAPI.rejectWithValue("Get suggestions fail!");
    }
  }
);

export const getSentInvitations = createAsyncThunk(
  "getSentInvitations",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/friends/getSentInv");
      return result.data.sentInvitations;
    } catch (error) {
      return thunkAPI.rejectWithValue("Get SentInvitations fail!");
    }
  }
);

export const getRequests = createAsyncThunk(
  "getRequests",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/friends/getRequests");

      return result.data.requests;
    } catch (error) {
      return thunkAPI.rejectWithValue("Get requests fail!");
    }
  }
);
export const getListFriends = createAsyncThunk(
  "getList",
  async (data, thunkAPI) => {
    try {
      const result = await api.get("/api/v1/friends/getList");

      return result.data.list;
    } catch (error) {
      return thunkAPI.rejectWithValue("Get get listFriends fail!");
    }
  }
);

const friendsSlice = createSlice({
  name: "friends",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [sentInvitations.pending]: (state, action) => {
      state.loadingSentInv = true;
    },
    [sentInvitations.fulfilled]: (state, action) => {
      state.loadingSentInv = false;
    },
    [sentInvitations.rejected]: (state, action) => {
      state.loadingSentInv = false;
    },
    [accInvitations.pending]: (state, action) => {
      state.loadingAccInv = true;
    },
    [accInvitations.fulfilled]: (state, action) => {
      state.loadingAccInv = false;
    },
    [accInvitations.rejected]: (state, action) => {
      state.loadingAccInv = false;
    },
    [getSuggestions.fulfilled]: (state, action) => {
      state.suggestions = action.payload;
    },
    [getSentInvitations.fulfilled]: (state, action) => {
      state.sentInvitations = action.payload;
    },
    [getRequests.fulfilled]: (state, action) => {
      state.requests = action.payload;
    },
    [getListFriends.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
  },
});

export default friendsSlice.reducer;
