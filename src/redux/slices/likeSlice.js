
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { likeVideoApi } from "../apis/likeApi";

export const likeVideoForCreator = createAsyncThunk("comment", async (payload) => {
    try{
        const response = await likeVideoApi(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})