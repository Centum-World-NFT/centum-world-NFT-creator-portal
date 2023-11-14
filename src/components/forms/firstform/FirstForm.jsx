import React, { useState } from "react";
import {
  DescriptionBox,
  UploadContainer,
  VisuallyHiddenInput,
  Wrapper,
} from "./FirstFormStyle";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { UploadFileRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  setUploadThumbnail,
  setUploadVideo,
  setVideoDescription,
  setVideoTitle,
} from "../../../redux/slices/formSlice";

const FirstForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    dispatch(setUploadThumbnail(URL.createObjectURL(file)));
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    dispatch(setUploadVideo(URL.createObjectURL(file)));
  };

  const handleVideoTitleChange = (event) => {
    dispatch(setVideoTitle(event.target.value));
  };

  const handleVideoDescriptionChange = (event) => {
    dispatch(setVideoDescription(event.target.value));
  };

  return (
    <>
      <Wrapper>
        <UploadContainer>
          {form.uploadThumbnail && <img src={form.uploadThumbnail} />}
          <Button
            component="label"
            variant="outlined"
            startIcon={<UploadFileRounded />}
            sx={{
              textTransform: "inherit",
            }}
          >
            Upload Thumbnail
            <VisuallyHiddenInput
              type="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </Button>
          {form.uploadVideo && (
            <video src={form.uploadVideo} alt="Uploaded Thumbnail" controls />
          )}
          <Button
            component="label"
            variant="contained"
            startIcon={<UploadFileRounded />}
            sx={{
              textTransform: "inherit",
            }}
          >
            Upload Video
            <VisuallyHiddenInput
              type="file"
              style={{ display: "none" }}
              onChange={handleVideoChange}
            />
          </Button>
        </UploadContainer>
        <DescriptionBox>
          <Typography>Video Title</Typography>
          <TextField
            fullWidth
            id="fullWidth"
            placeholder="Title Goes Here"
            onChange={handleVideoTitleChange}
            value={form.videoTitle}
          />
          <Typography>Description</Typography>
          <TextField
            multiline
            id="fullWidth"
            placeholder="Discription"
            sx={{ width: "100%" }}
            value={form.videoDescription}
            onChange={handleVideoDescriptionChange}
          />
        </DescriptionBox>
      </Wrapper>
    </>
  );
};

export default FirstForm;
