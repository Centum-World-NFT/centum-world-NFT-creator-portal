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

const FirstForm = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [tag, setTag] = React.useState("");

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUploadedImage(URL.createObjectURL(file));
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    setUploadedVideo(URL.createObjectURL(file));
  };
  return (
    <>
      <Wrapper>
        <UploadContainer>
          {uploadedImage && <img src={uploadedImage} />}
          <Button
            component="label"
            variant="outlined"
            startIcon={<UploadFileRounded />}
            sx={{
              textTransform: "inherit"
            }}
          >
            Upload Thumbnail
            <VisuallyHiddenInput
              type="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </Button>
          {uploadedVideo && (
            <video src={uploadedVideo} alt="Uploaded Thumbnail" controls />
          )}
          <Button
            component="label"
            variant="contained"
            startIcon={<UploadFileRounded />}
            sx={{
              textTransform: "inherit"
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
          <TextField fullWidth id="fullWidth" placeholder="Title Goes Here" />
          <Typography>Description</Typography>
          <TextField
            multiline
            id="fullWidth"
            placeholder="Discription"
            sx={{ width: "100%" }}
          />
          <FormControl sx={{mt: "1rem",  width: "30%"}}>
          <Typography>Select a tag</Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tag}
              onChange={handleChange}
            >
              <MenuItem value="aws">#aws</MenuItem>
              <MenuItem value="react">#react</MenuItem>
              <MenuItem value="web3">#web3.0</MenuItem>
              <MenuItem value="angular">#angular</MenuItem>
            </Select>
          </FormControl>
        </DescriptionBox>
      </Wrapper>
    </>
  );
};

export default FirstForm;
