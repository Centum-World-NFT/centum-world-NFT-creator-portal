import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { addToPlaylistAPI, publishPlaylistAPI } from "../apis/playlistVideo";

export const addToPlaylist = createAsyncThunk(
  "playlist/addToPlaylist",
  async (videoId) => {
    try {
      const response = await addToPlaylistAPI(videoId);
      return response.data;
    } catch (error) {
      console.log("Error");
      console.log(error.message);
    }
  }
);

export const publishPlaylist = createAsyncThunk(
  "playlist/publicPlaylist",
  async ({
    playlistDescription,
    playlistPreviewVideo,
    playlistTitle,
    price,
    playlistThumbnail,
  }) => {
    try {
      const formData = new FormData();
      formData.append("playlist_thumbnail", playlistThumbnail);
      formData.append("preview_video", playlistPreviewVideo);
      formData.append("playlist_title", playlistTitle);
      formData.append("playlist_description", playlistDescription);
      formData.append("price", Number(price));
      formData.append("creatorId", localStorage.getItem("userID"));
      const response = await publishPlaylistAPI(formData);
      return response;
    } catch (error) {
      console.log(error.message);
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
} = playlistSlice.actions;

export default rootReducer;
