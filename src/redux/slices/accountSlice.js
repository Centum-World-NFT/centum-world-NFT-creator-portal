import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    firstName: "",
    surName: "",
    email: "",
    phone: "",
    creatorId:""
  },
  reducers: {
    firstName: (state, action) => {
      state.firstName = action.payload;
    },

    surName: (state, action) => {
      state.surName = action.payload;
    },
    email: (state, action) => {
      state.email = action.payload;
    },
    phone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const {
    firstName,
    surName,
    email,
    phone,
    creatorId
} = accountSlice.actions;
export default accountSlice.reducer;
