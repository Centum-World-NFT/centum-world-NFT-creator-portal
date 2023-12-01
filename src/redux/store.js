import { configureStore } from "@reduxjs/toolkit";
import subscribeReducer from "./slices/subscribeSlice"
import videoReducer from "./slices/videoSlice";
import accountReducer from "./slices/accountSlice";
import thunk from "redux-thunk";
import formReducer from "./slices/formSlice"
import playlistReducer  from "./slices/playlist";
import fetchVideoReducer from "./slices/creatorVideos"
import playlistVideos from "./slices/playlist"

const middleware = [thunk]
export const store = configureStore({
  reducer: {
    form: formReducer,
    subscriber: subscribeReducer,
    video: videoReducer,
    playlist: playlistReducer,
    fetchVideo: fetchVideoReducer,
    account: accountReducer,
    playlistVideos: playlistVideos
  },
  middleware
});
