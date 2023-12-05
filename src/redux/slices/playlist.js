import { combineReducers, createSlice } from "@reduxjs/toolkit";

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
      state.push(action.payload);
    },
    removeCard: (state, action) => {
      state.pop(action.payload);
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
