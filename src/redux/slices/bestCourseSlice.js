import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bestcourseApi } from "../apis/bestCourseApi";
import toast from "react-hot-toast";

export const myBestCourse = createAsyncThunk("playlistData", async () => {
  try {
    const response = await bestcourseApi();
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Session expired! Please log in again.");
    } else {
      toast.error(error.response.data.message);
    }
  }
});
