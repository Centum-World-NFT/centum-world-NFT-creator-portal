import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { setPlaylistTitle, setPlaylistDescription, setPlaylistPrice } =
  playlistSlice.actions;
export default playlistSlice.reducer;
