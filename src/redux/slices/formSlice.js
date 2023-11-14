import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    uploadThumbnail: null,
    uploadVideo: null,
    videoTitle: "",
    videoDescription: "",
  },
  reducers: {
    setUploadThumbnail: (state, action) => {
      state.uploadThumbnail = action.payload;
    },

    setUploadVideo: (state, action) => {
      state.uploadVideo = action.payload;
    },
    setVideoTitle: (state, action) => {
      state.videoTitle = action.payload;
    },
    setVideoDescription: (state, action) => {
      state.videoDescription = action.payload;
    },
  },
});

export const {
  setUploadThumbnail,
  setUploadVideo,
  setVideoTitle,
  setVideoDescription,
} = formSlice.actions;
export default formSlice.reducer;
