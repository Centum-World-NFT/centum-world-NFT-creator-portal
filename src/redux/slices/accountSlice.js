import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { accountApi } from "../apis/account";
import toast from "react-hot-toast";

export const accountDetails = createAsyncThunk("account", async (payload) => {
  try {
    const response = await accountApi(payload);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Session expired! Please log in again.");
    } else {
      toast.error(error.response.data.message);
    }
  }
});

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
