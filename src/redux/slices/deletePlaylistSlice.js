import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteplaylistApi } from "../apis/deletePlaylist";
import toast from "react-hot-toast";

export const deletePlaylist = createAsyncThunk("delete", async (payload) => {
  try {
    const response = await deleteplaylistApi(payload);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Session expired! Please log in again.");
    } else {
      toast.error(error.response.data.message);
    }
  }
});
