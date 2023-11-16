import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    uploadThumbnail: null,
    uploadVideo: null,
    videoTitle: "",
    videoDescription: "",
    uploadPdf: null,
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
    setUploadPdf: (state, action) => {
      state.uploadPdf = action.payload;
    },
  },
});

export const {
  setUploadThumbnail,
  setUploadVideo,
  setVideoTitle,
  setVideoDescription,
  setUploadPdf,
} = formSlice.actions;
export default formSlice.reducer;
