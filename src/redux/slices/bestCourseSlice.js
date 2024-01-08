import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bestcourseApi } from "../apis/bestCourseApi";

export const  myBestCourse = createAsyncThunk("playlistData", async () => {
    try{
        const response = await bestcourseApi();
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})