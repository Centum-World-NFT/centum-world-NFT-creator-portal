import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteCommentApi } from "../apis/deleteCommentApi";

export const deletCommentForCreator = createAsyncThunk("comment", async (payload) => {
    try{
        const response = await deleteCommentApi(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})