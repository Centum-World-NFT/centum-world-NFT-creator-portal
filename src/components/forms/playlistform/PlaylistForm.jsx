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
  setPlaylistPrice,
  setPlaylistTitle,
} from "../../../redux/slices/playlist";

const PlaylistForm = () => {
  const dispatch = useDispatch();
  const platlistFormData = useSelector((state) => state.playlist);

  const handlePlaylistTitleChange = (event) => {
    dispatch(setPlaylistTitle(event.target.value));
  };

  const handleDescriptionChange = (event) => {
    dispatch(setPlaylistDescription(event.target.value));
  };

  const handlePriceChange = (event) => {
    dispatch(setPlaylistPrice(event.target.value));
  };

  return (
    <>
      <SectionNumber>Step 1</SectionNumber>
      <Divider />
      <Wrapper>
        <ButtonContainer>
          <Button
            component="label"
            variant="standard"
            startIcon={<UploadIcon />}
            sx={{ textTransform: "inherit" }}
          >
            Upload Playlist Thumbnail
            <VisuallyHiddenInput type="file" />
          </Button>
          <Button
            component="label"
            variant="outlined"
            startIcon={<UploadIcon />}
            sx={{ textTransform: "inherit" }}
          >
            Upload Preview Video
            <VisuallyHiddenInput type="file" />
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
