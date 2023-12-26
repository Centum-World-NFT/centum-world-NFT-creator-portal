import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { profileFetchAPI } from "../apis/fetchProfileDetails";

export const  fetchProfileDetails = createAsyncThunk("profiledetails", async (payload) => {
    try{
        const response = await profileFetchAPI(payload);
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
  const profiledetailsSlice = createSlice({
    name: "profiledetails",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(fetchProfileDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      });
      builder.addCase(fetchProfileDetails.pending, (state, action) => {
        state.isLoading = true;
        state.data = null;
        state.isError = false;
      });
      builder.addCase(fetchProfileDetails.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error", action.error.message);
        state.isError = true;
      });
    },
  });
  
  export default profiledetailsSlice.reducer;