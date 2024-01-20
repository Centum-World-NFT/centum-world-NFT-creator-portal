import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSingleVideo } from "../apis/fetchSingleVideoApi";

export const  singleVideo = createAsyncThunk("singleVidoe", async (payload) => {
    try{
        const response = await fetchSingleVideo(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})