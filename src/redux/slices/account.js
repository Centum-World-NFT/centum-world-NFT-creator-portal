import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { accountAPI } from "../apis/account";

export const accounts = createAsyncThunk("account", async (payload) => {
  console.log(payload);
  try {
    const response = await accountAPI(payload);
    return response.data;
  } catch (error) {
    console.log(error.message);
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
    builder.addCase(accounts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
      localStorage.setItem("access_token", action.payload.token);
    });
    builder.addCase(accounts.pending, (state, action) => {
      state.isLoading = true;
      state.data = null;
      state.isError = false;
    });
    builder.addCase(accounts.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error", action.error.message);
      state.isError = true;
    });

    // login
  },
});

export default accountSlice.reducer;
