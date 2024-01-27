import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { revAndSubs } from "../apis/revenueAndSubscriber";
import toast from "react-hot-toast";

export const allRevAndSubs = createAsyncThunk("revandsub", async () => {
  try {
    const response = await revAndSubs();
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Session expired! Please log in again.");
    } else {
      toast.error(error.response.data.message);
    }
  }
});
