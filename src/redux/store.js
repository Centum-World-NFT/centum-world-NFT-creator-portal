import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import formReducer from "./slices/formSlice"; 
import subscribeReducer from "./slices/subscribeSlice"
import videoReducer from "./slices/videoSlice";
import accountReducer from "./slices/accountSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    subscriber: subscribeReducer,
    video: videoReducer,
    account: accountReducer
  },
});
