import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { KnowSubscriber } from "../apis/knowYourSubscriberApi";

export const  khowYourSubscriber = createAsyncThunk("know", async (payload) => {
    try{
        const response = await KnowSubscriber(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})