import { Box, Divider, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { PlaylistTitle, SectionNumber } from "./FormPreviewStyle";

const FormPreview = () => {
  const playlistFormdata = useSelector((state) => state.playlist);

  const description = playlistFormdata.playlistDescription
    ? playlistFormdata.playlistDescription.substring(0, 100)
    : "";

  return (
    <>
      <SectionNumber>Step 3 &#10629;Final Preview&#10630;</SectionNumber>
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
