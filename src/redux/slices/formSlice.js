import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    thumbnail: null,
    video: null,
    title: "",
    description: "",
    pdf: null,
  },
  reducers: {
    setUploadThumbnail: (state, action) => {
      state.thumbnail = action.payload;
    },
    setUploadVideo: (state, action) => {
      state.video = action.payload;
    },
    setVideoTitle: (state, action) => {
      state.title = action.payload;
    },
    setVideoDescription: (state, action) => {
      state.description = action.payload;
    },
    setUploadPdf: (state, action) => {
      state.pdf = action.payload;
    },
    setCourseId : (state, action) => {
      state.courseId = action.payload;
    }
  },
});

export const {
  setUploadThumbnail,
  setUploadVideo,
  setVideoTitle,
  setVideoDescription,
  setUploadPdf,
  setCourseId,
} = formSlice.actions;
export default formSlice.reducer;
