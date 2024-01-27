import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commentApiForCreator } from "../apis/commentApi";
import toast from "react-hot-toast";

export const commentInVideo = createAsyncThunk("comment", async (payload) => {
  try {
    const response = await commentApiForCreator(payload);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Session expired! Please log in again.");
    } else {
      toast.error(error.response.data.message);
    }
  }
});
