import React, { useState } from "react";
import {
  SectionNumber,
  VideoDescription,
  VideoTitle,
} from "./CreatorVideosStyle";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Popover,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addCard, addToPlaylist } from "../../../redux/slices/playlist";
import { addToPlaylistAPI } from "../../../redux/apis/playlistVideo";

const CreatorVideos = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const creatorVideos = useSelector((state) => state.fetchVideo);

  const videos = creatorVideos.data || [];

  const handleAddToPlaylist = (videoId) => {
    const selectedVideo = videos.find((video) => video._id === videoId);
    const finalVideos = videos.find((video) => video.isSelected === true);
    console.log(finalVideos);
    if (selectedVideo) {
      dispatch(addToPlaylist(selectedVideo._id));
      if (finalVideos) dispatch(addCard(finalVideos));
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
      <SectionNumber>Step 2 &#10629;Select Videos&#10630;</SectionNumber>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          mt: "1rem",
          pb: "20px",
        }}
      >
        {videos.map((item, index) => {
          return (
            <Box key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="190"
                    image={item.thumbnail}
                    alt="video-thumbnail"
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                  />
                  <CardContent>
                    <VideoTitle>{item.title}</VideoTitle>
                    <VideoDescription color="text.secondary">
                      {item.description}
                    </VideoDescription>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleAddToPlaylist(item._id)}
                  >
                    Add to Playlist
                  </Button>
                </CardActions>
              </Card>
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <video src={item.video} height={240} controls autoPlay />
              </Popover>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CreatorVideos;
