import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { addToPlaylistAPI, publishPlaylistAPI } from "../apis/playlistVideo";
import toast from "react-hot-toast";

export const addToPlaylist = createAsyncThunk(
  "playlist/addToPlaylist",
  async (videoId) => {
    try {
      const response = await addToPlaylistAPI(videoId);
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

export const publishPlaylist = createAsyncThunk(
  "playlist/publicPlaylist",
  async (payload) => {
    try {
      console.log(payload);
      // const formData = new FormData();
      // formData.append("playlist_thumbnail", playlistThumbnail);
      // formData.append("preview_video", playlistPreviewVideo);
      // formData.append("playlist_title", playlistTitle);
      // formData.append("playlist_description", playlistDescription);
      // formData.append("price", Number(price));
      // formData.append("creatorId", localStorage.getItem("userID"));
      // formData.append("course_id",courseId)
      const response = await publishPlaylistAPI(payload);
      return response;
    } catch (error) {
      return error.response;
    }
  }
);

export const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    playlistTitle: "",
    playlistThumbnail: null,
    playlistPreviewVideo: null,
    price: "",
    playlistDescription: "",
    courseId: "",
  },
  reducers: {
    setPlaylistTitle: (state, action) => {
      state.playlistTitle = action.payload;
    },
    setPlaylistDescription: (state, action) => {
      state.playlistDescription = action.payload;
    },
    setPlaylistPrice: (state, action) => {
      state.price = action.payload;
    },
    setPlaylistThumbnail: (state, action) => {
      state.playlistThumbnail = action.payload;
    },
    setPlaylistPreviewVideo: (state, action) => {
      state.playlistPreviewVideo = action.payload;
    },
    setPlaylistCourseId: (state, action) => {
      state.courseId = action.payload;
    },
  },
});

const cardsSlice = createSlice({
  name: "cards",
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      return [...state, action.payload];
    },
    removeCard: (state) => {
      return state.slice(0, -1);
    },
  },
});

const rootReducer = combineReducers({
  playlist: playlistSlice.reducer,
  cards: cardsSlice.reducer,
});

export const { addCard, removeCard } = cardsSlice.actions;

export const {
  setPlaylistTitle,
  setPlaylistDescription,
  setPlaylistPrice,
  setPlaylistThumbnail,
  setPlaylistPreviewVideo,
  setPlaylistCourseId,
} = playlistSlice.actions;

export default rootReducer;
