import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCommentForCreatorApi } from "../apis/getCommentApi";
import toast from "react-hot-toast";

export const fetchComment = createAsyncThunk("comment", async (payload) => {
  try {
    const response = await getCommentForCreatorApi(payload);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Session expired! Please log in again.");
    } else {
      toast.error(error.response.data.message);
    }
  }
});
