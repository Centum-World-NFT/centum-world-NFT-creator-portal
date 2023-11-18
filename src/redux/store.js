import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/account";
import formReducer from "./slices/accountSlice"

export const store = configureStore({
  reducer: {
    account: accountReducer,
    form: formReducer
  },
});
