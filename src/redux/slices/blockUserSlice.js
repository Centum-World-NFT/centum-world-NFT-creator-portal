import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blockUserApi } from "../apis/userblock";

export const  blockUser = createAsyncThunk("block", async (payload) => {
    try{
        const response = await blockUserApi(payload);
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
  const blockuserSlice = createSlice({
    name: "block",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(blockUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      });
      builder.addCase(blockUser.pending, (state, action) => {
        state.isLoading = true;
        state.data = null;
        state.isError = false;
      });
      builder.addCase(blockUser.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error", action.error.message);
        state.isError = true;
      });
    },
  });
  
  export default blockuserSlice.reducer;