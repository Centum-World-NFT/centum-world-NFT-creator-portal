import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { PlaylistTitle } from "./FormPreviewStyle";

const FormPreview = () => {
  const playlistFormdata = useSelector((state) => state.playlist);
  const description = playlistFormdata.playlistDescription.substring(0, 100);
  return (
    <>
      <Typography>Step 3</Typography>
      <Divider />
      <PlaylistTitle>{playlistFormdata.playlistTitle}</PlaylistTitle>
      <Typography>{description && `${description}....`}</Typography>
      <PlaylistTitle>
        {playlistFormdata.price && `Playlist Price ${playlistFormdata.price}/-`}
      </PlaylistTitle>
    </>
  );
};

export default FormPreview;
