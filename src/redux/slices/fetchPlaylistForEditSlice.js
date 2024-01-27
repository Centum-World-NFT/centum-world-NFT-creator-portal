import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPlaylistEditAPI } from "../apis/fetchPlaylistForEditApi";
import toast from "react-hot-toast";

export const fetchPlaylistForEditApiFuc = createAsyncThunk(
  "editPlaylist",
  async (payload) => {
    try {
      const response = await fetchPlaylistEditAPI(payload);
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
