import { PageTitle, VideoContainer, Wrapper } from "./UploadVideoStyle";
import StepForm from "../../components/templates/stepform/StepForm";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { VisuallyHiddenInput } from "../../components/forms/playlistform/PlaylistFormStyle";
import { useState } from "react";
import { BackArrow, UploadIcon } from "../../utils/icons";
import { publishVideo } from "../../redux/slices/videoSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const UploadVideo = () => {
  const dispatch = useDispatch();
  const [uploadVideo, setVideoContent] = useState({
    title: "",
    description: "",
    course_id: "",
    thumbnail: null,
    video: null,
    pdf: null,
    creatorId: localStorage.getItem("userID"),
  });
  const [spin, setSpin] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleUploadContent = (event) => {
    const { name, value } = event.target;
    setVideoContent((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleThumbnailInput = (event) => {
    const file = event.target.files[0];
    setVideoContent((previous) => ({
      ...previous,
      thumbnail: file,
    }));
  };

  const handleUploadVideo = (event) => {
    const file = event.target.files[0];
    setVideoContent((previous) => ({
      ...previous,
      video: file,
    }));
  };

  const handleUploadPdf = (event) => {
    const file = event.target.files[0];
    setVideoContent((previous) => ({
      ...previous,
      pdf: file,
    }));
  };

  const submitVideoContent = async () => {
    setSpin(true);
    try {
      const response = await dispatch(publishVideo(uploadVideo));
      console.log(response);
      if (response.payload.status) {
        setSpin(false);
        toast.success(response.payload.message);
      } else {
        setSpin(false);
      }
    } catch (error) {
      setSpin(false);
    }
  };

  const previewHandle = () => {
    setShowPreview(true);
  };

  const backUploadForm = () => {
    setShowPreview(false);
  };

  return (
    // <Wrapper>
    //   <VideoContainer>
    //     <PageTitle>Upload Your Content</PageTitle>
    //     <Box sx={{width: ['100%', '80%'], margin: "10px auto 0px auto"}}>
    //       <StepForm />
    //     </Box>
    //   </VideoContainer>
    // </Wrapper>
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        {!showPreview ? (
          <Box
            sx={{
              marginTop: "10px",
              display: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              padding: "20px",
              width: { xs: "80%", md: "50%" },
              gap: "10px",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px" }}
            >
              Upload Your Content
            </Typography>
            <TextField
              sx={{ width: "100%", marginBottom: "10px" }}
              placeholder="Video Title"
              value={uploadVideo.title}
              onChange={handleUploadContent}
              name="title"
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px" }}
              placeholder="Course ID"
              value={uploadVideo.course_id}
              onChange={handleUploadContent}
              name="course_id"
            />
            <TextField
              sx={{ width: "100%", marginBottom: "10px" }}
              placeholder="Description"
              value={uploadVideo.description}
              onChange={handleUploadContent}
              name="description"
            />
            <Button
              component="label"
              variant="outlined"
              startIcon={<UploadIcon />}
              sx={{
                textTransform: "inherit",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              Upload Thumbnail
              <VisuallyHiddenInput
                type="file"
                onChange={handleThumbnailInput}
              />
            </Button>
            <Button
              component="label"
              variant="outlined"
              startIcon={<UploadIcon />}
              sx={{
                textTransform: "inherit",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              Upload video
              <VisuallyHiddenInput type="file" onChange={handleUploadVideo} />
            </Button>
            <Button
              component="label"
              variant="outlined"
              startIcon={<UploadIcon />}
              sx={{
                textTransform: "inherit",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              Upload PDF
              <VisuallyHiddenInput type="file" onChange={handleUploadPdf} />
            </Button>

            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{ width: "100%" }}
            >
              <Button sx={{ width: "50%" }} onClick={previewHandle}>
                Preview
              </Button>
              <Button sx={{ width: "50%" }} onClick={submitVideoContent}>
                {spin ? (
                  <>
                    <CircularProgress
                      style={{ height: "15px", width: "15px" }}
                    />
                    Publishing...
                  </>
                ) : (
                  "Publish"
                )}
              </Button>
            </ButtonGroup>
          </Box>
        ) : (
          <Box
            sx={{
              marginTop: "10px",
              display: "column",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              padding: "20px",
              width: { xs: "80%", md: "50%" },
              gap: "10px",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                cursor: "pointer",
                alignItems: "center",
                fontSize: "24px",
                fontWeight: "700",
                marginBottom: "15px",
              }}
              onClick={backUploadForm}
            >
              <BackArrow />
              &nbsp;&nbsp; Preview
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "900",
                  color: "#909090",
                  fontFamily: "Calibri",
                  fontSize: "18px",
                  width: "30%",
                }}
              >
                Title
              </Typography>
              <Typography
                sx={{
                  fontWeight: "900",
                  fontFamily: "Calibri",
                  fontSize: "20px",
                  width: "70%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                {uploadVideo.title}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "900",
                  color: "#909090",
                  fontFamily: "Calibri",
                  fontSize: "18px",
                  width: "30%",
                }}
              >
                Course ID
              </Typography>
              <Typography
                sx={{
                  fontWeight: "900",
                  fontFamily: "Calibri",
                  fontSize: "20px",
                  width: "70%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                {uploadVideo.course_id}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "900",
                  color: "#909090",
                  fontFamily: "Calibri",
                  fontSize: "18px",
                  width: "30%",
                }}
              >
                Descripton
              </Typography>
              <Typography
                sx={{
                  fontWeight: "900",
                  fontFamily: "Calibri",
                  fontSize: "20px",
                  width: "70%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                {uploadVideo.description}
              </Typography>
            </Box>
            <hr />
            {uploadVideo.thumbnail && (
              <div>
                <Typography variant="h6">Thumbnail image:</Typography>
                {uploadVideo.thumbnail.type.startsWith("image/") ? (
                  <img
                    width="100%"
                    height="auto"
                    src={URL.createObjectURL(uploadVideo.thumbnail)}
                  />
                ) : (
                  <Typography>
                    Unsupported file format. Please select a thumbnail.
                  </Typography>
                )}
              </div>
            )}

            {uploadVideo.video && (
              <div>
                <Typography variant="h6">Video file:</Typography>
                {uploadVideo.video.type.startsWith("video/") ? (
                  <video
                    controls
                    width="100%"
                    height="auto"
                    src={URL.createObjectURL(uploadVideo.video)}
                  />
                ) : (
                  <Typography>
                    Unsupported file format. Please select a video.
                  </Typography>
                )}
              </div>
            )}

            {uploadVideo.pdf && (
              <div>
                <Typography variant="h6">PDF file:</Typography>
                {uploadVideo.pdf.type === "application/pdf" ? (
                  <iframe
                    title="PDF Preview"
                    width="100%"
                    height="500px"
                    src={URL.createObjectURL(uploadVideo.pdf)}
                  />
                ) : (
                  <Typography>
                    Unsupported file format. Please select a PDF.
                  </Typography>
                )}
              </div>
            )}

            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{ width: "100%" }}
            >
              <Button sx={{ width: "50%" }} onClick={backUploadForm}>
                Back
              </Button>
              <Button sx={{ width: "50%" }} onClick={submitVideoContent}>
                {spin ? (
                  <>
                    <CircularProgress
                      style={{ height: "15px", width: "15px" }}
                    />
                    Publishing...
                  </>
                ) : (
                  "Publish"
                )}
              </Button>
            </ButtonGroup>
          </Box>
        )}
      </Box>
    </>
  );
};

export default UploadVideo;
