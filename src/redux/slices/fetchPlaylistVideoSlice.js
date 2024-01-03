import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPlaylistVideoAPI } from "../apis/fetchAllVideoApi";

export const  fetchPlaylistAllVideo = createAsyncThunk("playlistData", async (payload) => {
    try{
        const response = await fetchPlaylistVideoAPI(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})