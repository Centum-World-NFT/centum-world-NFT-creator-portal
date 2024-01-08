import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { revAndSubs } from "../apis/revenueAndSubscriber";

export const  allRevAndSubs = createAsyncThunk("revandsub", async () => {
    try{
        const response = await revAndSubs();
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})