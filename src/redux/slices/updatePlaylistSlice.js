import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updatePlaylist } from "../apis/updatePlaylistApi";

export const  updatePlaylistFuc = createAsyncThunk("updatePlaylist", async (payload) => {
    try{
        const response = await updatePlaylist(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})