import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { playlistFetchAPI } from "../apis/fetchPlaylistApi";

export const  fetchPlaylistDetails = createAsyncThunk("playlistData", async (payload) => {
    try{
        const response = await playlistFetchAPI(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})