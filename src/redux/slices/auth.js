import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpAPI } from "../apis/signUp";
import { signInAPI } from "../apis/signUp";
import toast from "react-hot-toast"

export const signUp = createAsyncThunk("auth/signUp", async (payload) => {
  try {
    const response = await signUpAPI(payload);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message)
  }
});

export const signIn = createAsyncThunk("auth/signIn", async (payload) => {
  try {
    const response = await signInAPI(payload);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message)
  }
});

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.isError = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
        localStorage.setItem("access_token", action.payload.token);
        localStorage.setItem("userID", action.payload.data._id);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error", action.error.message);
        state.isError = true;
      })

      // login

      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.isError = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
        localStorage.setItem("access_token", action.payload.token);
        localStorage.setItem("userID", action.payload.data._id);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error", action.error.message);
        state.isError = true;
      });
  },
});

export default authSlice.reducer;
