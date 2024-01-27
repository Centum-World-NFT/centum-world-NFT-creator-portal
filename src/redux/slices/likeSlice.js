import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { likeVideoApi } from "../apis/likeApi";
import toast from "react-hot-toast";

export const likeVideoForCreator = createAsyncThunk(
  "comment",
  async (payload) => {
    try {
      const response = await likeVideoApi(payload);
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Session expired! Please log in again.");
      } else {
        toast.error(error.response.data.message);
      }
    }
  }
);
