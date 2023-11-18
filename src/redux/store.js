import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import formReducer from "./slices/formSlice";
import videoReducer from "./slices/videoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    video: videoReducer,
  },
});
