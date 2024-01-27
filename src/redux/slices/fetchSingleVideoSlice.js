import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSingleVideo } from "../apis/fetchSingleVideoApi";
import toast from "react-hot-toast";

export const singleVideo = createAsyncThunk("singleVidoe", async (payload) => {
  try {
    const response = await fetchSingleVideo(payload);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Session expired! Please log in again.");
    } else {
      toast.error(error.response.data.message);
    }
  }
});
