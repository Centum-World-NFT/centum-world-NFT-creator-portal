
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCommentForCreatorApi } from "../apis/getCommentApi";

export const fetchComment = createAsyncThunk("comment", async (payload) => {
    try{
        const response = await getCommentForCreatorApi(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})