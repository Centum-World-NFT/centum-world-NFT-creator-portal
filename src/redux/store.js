import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import subscribeReducer from "./slices/subscribeSlice"
import formReducer from "./slices/formSlice";
import videoReducer from "./slices/videoSlice";
import thunk from "redux-thunk";

const middleware = [thunk]
export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    subscriber: subscribeReducer,
    video: videoReducer,
  },
  middleware
});
