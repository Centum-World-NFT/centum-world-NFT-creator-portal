import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { replyComment } from "../apis/replyCommentApi";

export const replyCommentForCreator = createAsyncThunk("comment", async (payload) => {
    console.log(payload)
    try{
        const response = await replyComment(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})