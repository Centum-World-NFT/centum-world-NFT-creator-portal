import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { allRevenueApi } from "../apis/revenueApi";
import toast from "react-hot-toast";

export const allRenvenueData = createAsyncThunk("revenu", async () => {
  try {
    const response = await allRevenueApi();
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Session expired! Please log in again.");
    } else {
      toast.error(error.response.data.message);
    }
  }
});
