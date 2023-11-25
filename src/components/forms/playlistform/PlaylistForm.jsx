import { Box, Button, Divider, TextField, Typography } from "@mui/material";
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
  setPlaylistDescription,
  setPlaylistPreviewVideo,
  setPlaylistPrice,
  setPlaylistThumbnail,
  setPlaylistTitle,
} from "../../../redux/slices/playlist";

const PlaylistForm = () => {
  const dispatch = useDispatch();
  const platlistFormData = useSelector((state) => state.playlist);

  const thumbnailURL = platlistFormData.playlistThumbnail
    ? URL.createObjectURL(platlistFormData.playlistThumbnail)
    : "";

    const videoURL = platlistFormData.playlistPreviewVideo
    ? URL.createObjectURL(platlistFormData.playlistPreviewVideo)
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

  return (
    <>
      <SectionNumber>Step 1&#10629;Playlist Value&#10630;</SectionNumber>
      <Divider />
      <Wrapper>
        <ButtonContainer>
          {platlistFormData.playlistThumbnail && (
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
          {platlistFormData.playlistPreviewVideo && (
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
        </ButtonContainer>
        <FieldContainer>
          <TextField
            placeholder="Playlist Title"
            onChange={handlePlaylistTitleChange}
            value={platlistFormData.playlistTitle}
          />
          <TextField
            placeholder="Playlist Description"
            multiline
            maxRows={4}
            fullWidth
            onChange={handleDescriptionChange}
            value={platlistFormData.playlistDescription}
          />
          <TextField
            placeholder="Playlist Price"
            type="phone"
            onChange={handlePriceChange}
            value={platlistFormData.price}
          />
        </FieldContainer>
      </Wrapper>
    </>
  );
};

export default PlaylistForm;
