import { TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const VideoMainContainer = styled("div")({
  width: "100%",
  display: "flex",
  padding: "1rem",
  "@media (max-width: 930px)": {
    flexDirection: "column",
    padding: "0 0 2rem .5rem",
  },
});

export const VideoContainer = styled("div")({
  width: "70%",
  padding: ".5rem",
  "@media (max-width:930px)": {
    width: "100%",
  },

});

export const SideThumbnailVideo = styled("div")({
  width: "30%",
  padding: ".5rem",
  "@media (max-width:930px)": {
    width: "100%",
  },
});
