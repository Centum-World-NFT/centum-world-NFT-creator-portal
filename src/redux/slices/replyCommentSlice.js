import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { replyComment } from "../apis/replyCommentApi";
import toast from "react-hot-toast";

export const replyCommentForCreator = createAsyncThunk(
  "comment",
  async (payload) => {
    console.log(payload);
    try {
      const response = await replyComment(payload);
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
