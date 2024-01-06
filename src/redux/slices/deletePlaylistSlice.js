import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteplaylistApi } from "../apis/deletePlaylist";

export const  deletePlaylist = createAsyncThunk("delete", async (payload) => {
    try{
        const response = await deleteplaylistApi(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})