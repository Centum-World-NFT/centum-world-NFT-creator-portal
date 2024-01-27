import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updatePlaylist } from "../apis/updatePlaylistApi";
import toast from "react-hot-toast";

export const updatePlaylistFuc = createAsyncThunk(
  "updatePlaylist",
  async (payload) => {
    try {
      const response = await updatePlaylist(payload);
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
