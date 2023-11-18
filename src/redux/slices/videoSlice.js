import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createVideoAPI } from "../apis/createVideo";

export const publishVideo = createAsyncThunk(
  "video",
  async (payload) => {
    try {
      const response = await createVideoAPI(payload)
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  isLoading: true,
  data: null,
  isError: false,
};
const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(publishVideo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(publishVideo.pending, (state, action) => {
      state.isLoading = true;
      state.data = null;
      state.isError = false;
    });
    builder.addCase(publishVideo.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error", action.error.message);
      state.isError = true;
    });
  },
});

export default videoSlice.reducer;
