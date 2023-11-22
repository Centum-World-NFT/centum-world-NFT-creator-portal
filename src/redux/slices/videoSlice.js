import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createVideoAPI } from "../apis/createVideo";
import axios from "axios";
import BASE_URL from "../../../baseUrl";
import { useSelector } from "react-redux";

export const publishVideo = createAsyncThunk(
  "video",
  async ({ thumbnail, video, title, description, pdf }) => {
    try {
      const formData = new FormData();
      formData.append("thumbnail", thumbnail);
      formData.append("video", video);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("pdf", pdf);
      formData.append("creatorId", localStorage.getItem("userID"));
      const response = await createVideoAPI(formData);
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
