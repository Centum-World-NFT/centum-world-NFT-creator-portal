import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { playlistFetchAPI } from "../apis/fetchPlaylistApi";
import toast from "react-hot-toast";

export const fetchPlaylistDetails = createAsyncThunk(
  "playlistData",
  async (payload) => {
    try {
      const response = await playlistFetchAPI(payload);
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
