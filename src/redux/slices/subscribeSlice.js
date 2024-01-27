import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { subscriberDerailsApi } from "../apis/subscriberDetail";
import toast from "react-hot-toast";

export const subcriberDetails = createAsyncThunk(
  "subscriber",
  async (payload) => {
    try {
      const response = await subscriberDerailsApi(payload);
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Session expired! Please log in again.");
      } else {
        toast.error(error.response.data.message);
      }
    }
  }
);

const initialState = {
  isLoading: true,
  data: null,
  isError: false,
};
const subscriberSlice = createSlice({
  name: "subscriber",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(subcriberDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(subcriberDetails.pending, (state, action) => {
      state.isLoading = true;
      state.data = null;
      state.isError = false;
    });
    builder.addCase(subcriberDetails.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error", action.error.message);
      state.isError = true;
    });
  },
});

export default subscriberSlice.reducer;
