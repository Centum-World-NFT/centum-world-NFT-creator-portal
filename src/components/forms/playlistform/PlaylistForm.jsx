import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

import {
  ButtonContainer,
  FieldContainer,
  SectionNumber,
  VisuallyHiddenInput,
  Wrapper,
} from "./PlaylistFormStyle";
import { UploadIcon } from "../../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  setPlaylistCourseId,
  setPlaylistDescription,
  setPlaylistPreviewVideo,
  setPlaylistPrice,
  setPlaylistThumbnail,
  setPlaylistTitle,
} from "../../../redux/slices/playlist";

const PlaylistForm = () => {
  const dispatch = useDispatch();
  const playistFormData = useSelector((state) => state.playlist.playlist);


  const thumbnailURL = playistFormData.playlistThumbnail
    ? URL.createObjectURL(playistFormData.playlistThumbnail)
    : "";

  const videoURL = playistFormData.playlistPreviewVideo
    ? URL.createObjectURL(playistFormData.playlistPreviewVideo)
    : "";

  const handlePlaylistTitleChange = (event) => {
    dispatch(setPlaylistTitle(event.target.value));
  };

  const handleDescriptionChange = (event) => {
    dispatch(setPlaylistDescription(event.target.value));
  };

  const handlePriceChange = (event) => {
    dispatch(setPlaylistPrice(event.target.value));
  };

  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    dispatch(setPlaylistThumbnail(file));
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    dispatch(setPlaylistPreviewVideo(file));
  };

  const handleCourseIDChange = (event) =>{
    console.log(event.target.value)
    dispatch(setPlaylistCourseId(event.target.value))
  }

  return (
    <>
      <SectionNumber>Step 1&#10629;Playlist Value&#10630;</SectionNumber>
      <Divider />
      <Wrapper>
        <FieldContainer>
          <TextField
            placeholder="Course name"
            onChange={handlePlaylistTitleChange}
            value={playistFormData.playlistTitle}
          />
          <TextField
            placeholder="Playlist Description"
            multiline
            maxRows={4}
            fullWidth
            onChange={handleDescriptionChange}
            value={playistFormData.playlistDescription}
          />
          <TextField
            placeholder="Playlist Price"
            type="phone"
            onChange={handlePriceChange}
            value={playistFormData.price}
          />
        </FieldContainer>
        <ButtonContainer>
          {playistFormData.playlistThumbnail && (
            <>
              <Typography>Thumbnail Preview</Typography>
              <img src={thumbnailURL} width={400} alt="playlist Thumbnail" />
            </>
          )}
          <Button
            component="label"
            variant="standard"
            startIcon={<UploadIcon />}
            sx={{ textTransform: "inherit" }}
          >
            Upload Playlist Thumbnail
            <VisuallyHiddenInput type="file" onChange={handleThumbnailChange} />
          </Button>
          {playistFormData.playlistPreviewVideo && (
            <>
              <Typography>Video Preview</Typography>
              <video src={videoURL} width={400} controls></video>
            </>
          )}
          <Button
            component="label"
            variant="outlined"
            startIcon={<UploadIcon />}
            sx={{ textTransform: "inherit" }}
          >
            Upload Preview Video
            <VisuallyHiddenInput type="file" onChange={handleVideoChange} />
          </Button>
          <TextField
            placeholder="Course ID"
            onChange={handleCourseIDChange}
            value={playistFormData.courseId}
          />
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

export default PlaylistForm;
