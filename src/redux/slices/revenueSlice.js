import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { allRevenueApi } from "../apis/revenueApi";

export const  allRenvenueData = createAsyncThunk("revenu", async () => {
    try{
        const response = await allRevenueApi();
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})