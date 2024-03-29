import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateProfileApi } from "../apis/updateprofileApi";
import toast from "react-hot-toast";

export const updateProfile = createAsyncThunk(
  "updateprofile",
  async (payload) => {
    try {
      console.log(payload);
      const response = await updateProfileApi(payload);
      toast.success(response.data.message);
      return response.data.data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Session expired! Please log in again.");
      } else {
        toast.error(error.response.data.message);
      }
    }
  }
);
