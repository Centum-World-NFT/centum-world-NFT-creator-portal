import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mycourseApi } from "../apis/myCourseApi";

export const  myCourse = createAsyncThunk("mycourse", async (payload) => {
    try{
        const response = await mycourseApi(payload);
        return response.data;
    }catch(error) {
        console.log(error.message)
    }
})

const initialState = {
    isLoading: true,
    data: null,
    isError: false,
  };
  const myCourseSlice = createSlice({
    name: "mycourse",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(myCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      });
      builder.addCase(myCourse.pending, (state, action) => {
        state.isLoading = true;
        state.data = null;
        state.isError = false;
      });
      builder.addCase(myCourse.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error", action.error.message);
        state.isError = true;
      });
    },
  });
  
  export default myCourseSlice.reducer;