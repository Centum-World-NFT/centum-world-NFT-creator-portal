import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { accountApi } from "../apis/account";

export const  accountDetails = createAsyncThunk("account", async (payload) => {
    console.log(payload)
    try{
        const response = await accountApi(payload);
        console.log(response.data)
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
  const accountSlice = createSlice({
    name: "account",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(accountDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      });
      builder.addCase(accountDetails.pending, (state, action) => {
        state.isLoading = true;
        state.data = null;
        state.isError = false;
      });
      builder.addCase(accountDetails.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error", action.error.message);
        state.isError = true;
      });
    },
  });
  
  export default accountSlice.reducer;
  

