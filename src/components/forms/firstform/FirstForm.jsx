import {
  DescriptionBox,
  UploadContainer,
  VisuallyHiddenInput,
  Wrapper,
} from "./FirstFormStyle";
import { Button, TextField, Typography } from "@mui/material";
import { UploadFileRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  setUploadThumbnail,
  setUploadVideo,
  setVideoDescription,
  setVideoTitle,
} from "../../../redux/slices/formSlice";
import toast, { Toaster } from "react-hot-toast";

const FirstForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  console.log(form)

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    dispatch(setUploadThumbnail(URL.createObjectURL(file)));
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoElement = document.createElement("video");
      videoElement.src = URL.createObjectURL(file);

      videoElement.onloadedmetadata = () => {
        const { duration } = videoElement;
        // duration >= 60 && duration <= 31 * 60
        if (true) {
          dispatch(setUploadVideo(videoElement.src));
        } else {
          toast("Please upload video length of 28 to 30 minutes", {
            position: "top-right",
            style: {
              border: "1px solid #d90429",
              padding: "16px",
              color: "#d90429",
            },
            iconTheme: {
              primary: "#d90429",
              secondary: "#FFFAEE",
            },
          });
        }
      };
    }
  };

  const handleVideoTitleChange = (event) => {
    dispatch(setVideoTitle(event.target.value));
  };

  const handleVideoDescriptionChange = (event) => {
    dispatch(setVideoDescription(event.target.value));
  };

  return (
    <>
      <Toaster />
      <Wrapper>
        <UploadContainer>
          {form.thumbnail && <img src={form.thumbnail} />}
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
          {form.video && (
            <video src={form.video} alt="Uploaded Thumbnail" controls />
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
            value={form.title}
          />
          <Typography>Description</Typography>
          <TextField
            multiline
            id="fullWidth"
            placeholder="Discription"
            sx={{ width: "100%" }}
            value={form.description}
            onChange={handleVideoDescriptionChange}
          />
        </DescriptionBox>
      </Wrapper>
    </>
  );
};

export default FirstForm;
