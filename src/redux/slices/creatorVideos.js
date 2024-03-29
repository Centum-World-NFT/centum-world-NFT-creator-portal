import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCreatorVideoAPI } from "../apis/fetchVideo";
import toast from "react-hot-toast";

export const fetchCreatorVideo = createAsyncThunk(
  "fetchVideo",
  async (payload) => {
    try {
      const response = await fetchCreatorVideoAPI(payload);
      return response.data.data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Session expired! Please log in again.");
      } else {
        toast.error(error.response.data.message);
      }
    }
  }
);

const initialState = {
  isLoading: true,
  data: null,
  isError: false,
};

const fetchVideoSlice = createSlice({
  name: "fetchVideo",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCreatorVideo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchCreatorVideo.pending, (state, action) => {
      state.isLoading = true;
      state.data = null;
      state.isError = false;
    });
    builder.addCase(fetchCreatorVideo.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error", action.error.message);
      state.isError = true;
    });
  },
});

export default fetchVideoSlice.reducer;
