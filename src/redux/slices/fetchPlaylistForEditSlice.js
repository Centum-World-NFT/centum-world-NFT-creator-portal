import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPlaylistEditAPI } from "../apis/fetchPlaylistForEditApi";

export const  fetchPlaylistForEditApiFuc = createAsyncThunk("editPlaylist", async (payload) => {
    try{
        const response = await fetchPlaylistEditAPI(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})