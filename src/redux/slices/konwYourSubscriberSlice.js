import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { KnowSubscriber } from "../apis/knowYourSubscriberApi";
import toast from "react-hot-toast";

export const khowYourSubscriber = createAsyncThunk("know", async (payload) => {
  try {
    const response = await KnowSubscriber(payload);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Session expired! Please log in again.");
    } else {
      toast.error(error.response.data.message);
    }
  }
});
