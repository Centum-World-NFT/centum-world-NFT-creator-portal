import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPlaylistVideoAPI } from "../apis/fetchAllVideoApi";
import toast from "react-hot-toast";

export const fetchPlaylistAllVideo = createAsyncThunk(
  "playlistData",
  async (payload) => {
    try {
      const response = await fetchPlaylistVideoAPI(payload);
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
