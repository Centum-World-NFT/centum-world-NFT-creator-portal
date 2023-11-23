import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import subscribeReducer from "./slices/subscribeSlice"
import videoReducer from "./slices/videoSlice";
import thunk from "redux-thunk";
import formReducer from "./slices/formSlice"
import playlistReducer  from "./slices/playlist";
import fetchVideoReducer from "./slices/creatorVideos"

const middleware = [thunk]
export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    subscriber: subscribeReducer,
    video: videoReducer,
    playlist: playlistReducer,
    fetchVideo: fetchVideoReducer
  },
  middleware
});
