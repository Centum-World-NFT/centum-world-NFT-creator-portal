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
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PlaylistTitle,
  SectionNumber,
  VideoDescription,
  VideoTitle,
} from "./FormPreviewStyle";
import { addCard, publishPlaylist, removeCard } from "../../../redux/slices/playlist";

const FormPreview = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const playlistFormdata = useSelector((state) => state.playlist.playlist);
  const videoCard = useSelector((state) => state.playlist.cards);
  const finalData = useSelector((state) => state.playlist.playlist);

  const description = playlistFormdata.playlistDescription
    ? playlistFormdata.playlistDescription.substring(0, 100)
    : "";

  const handleRemoveFromPlaylist = (videoId) => {
    const selectedVideo = videoCard.find((video) => video._id === videoId);
    if (selectedVideo) {
      dispatch(removeCard(selectedVideo));
    }
  };

  const submitPlaylistHandler = () => {
    console.log(finalData)
    dispatch(publishPlaylist(finalData))
  };
  return (
    <>
      <SectionNumber>Step 3 &#10629;Final Preview&#10630;</SectionNumber>
      <Divider />
      <PlaylistTitle>{playlistFormdata.playlistTitle}</PlaylistTitle>
      <Typography>{description && `${description}....`}</Typography>
      <PlaylistTitle>
        {playlistFormdata.price && `Playlist Price ${playlistFormdata.price}/-`}
      </PlaylistTitle>
      <Divider />
      <Typography variant="h6">Selected Videos</Typography>
      <Box display="flex" gap="1rem" flexWrap="wrap" pt="10px" pb="20px">
        {videoCard.map((item, index) => {
          return (
            <>
              <Card sx={{ maxWidth: 345 }} key={index}>
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
                    <VideoTitle>{item.title} </VideoTitle>
                    <VideoDescription color="text.secondary">
                      {item.description}
                    </VideoDescription>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleRemoveFromPlaylist(item._id)}
                  >
                    Remove from Playlist
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
            </>
          );
        })}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outlined" onClick={submitPlaylistHandler}>
          Publish
        </Button>
      </Box>
    </>
  );
};

export default FormPreview;
