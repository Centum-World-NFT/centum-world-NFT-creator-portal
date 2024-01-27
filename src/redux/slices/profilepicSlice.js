import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { profilepicAPI } from "../apis/profilePicApi";
import toast from "react-hot-toast";

export const profilepicUpload = createAsyncThunk(
  "profilepic",
  async (payload) => {
    try {
      console.log(payload);
      const response = await profilepicAPI(payload);
      return response.data.data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Session expired! Please log in again.");
      } else {
        Toast.error(error.response.data.message);
      }
    }
  }
);
