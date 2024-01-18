import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commentApiForCreator } from "../apis/commentApi";

export const commentInVideo = createAsyncThunk("comment", async (payload) => {
    try{
        const response = await commentApiForCreator(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})