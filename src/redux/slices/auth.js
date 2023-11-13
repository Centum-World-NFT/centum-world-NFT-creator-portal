import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk("auth", async (payload) => {
  console.log(payload);
  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/creator/signup-creator",
      payload
    );
    return response.data
  } catch (error) {
    console.log(error.message);
  }
});

const initialState = {
  isLoading: true,
  data: null,
  isError: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
      localStorage.setItem("access_token", action.payload.token)
    });
    builder.addCase(signUp.pending, (state, action) => {
      state.isLoading = true;
      state.data = null;
      state.isError = false;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error", action.error.message);
      state.isError = true;
    });
  },
});

export default authSlice.reducer;
