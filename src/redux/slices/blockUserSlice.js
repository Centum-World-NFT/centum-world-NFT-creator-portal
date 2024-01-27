import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blockUserApi } from "../apis/userblock";
import toast from "react-hot-toast";

export const blockUser = createAsyncThunk("block", async (payload) => {
  try {
    const response = await blockUserApi(payload);
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
