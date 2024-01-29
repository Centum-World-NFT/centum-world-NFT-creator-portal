import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteReplyApi } from "../apis/deleteRepliesApi";

export const deletRepiesForCreator = createAsyncThunk("comment", async (payload) => {
    try{
        const response = await deleteReplyApi(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})