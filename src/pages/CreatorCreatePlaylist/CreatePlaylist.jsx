import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCreatorVideo } from "../../redux/slices/creatorVideos";
import { BackArrow, UploadIcon } from "../../utils/icons";
import { VisuallyHiddenInput } from "../../components/forms/playlistform/PlaylistFormStyle";
import { publishPlaylist } from "../../redux/slices/playlist";
import toast from "react-hot-toast";

const CreatePlaylist = () => {
  const dispatch = useDispatch();
  const [playlistData, setPlaylistData] = useState({
    playlist_title: "",
    playlist_description: "",
    price: "",
    course_id: "",
    playlist_thumbnail: null,
    preview_video: null,
    creatorid: localStorage.getItem("userID"),
  });
  const [spin, setSpin] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    dispatch(fetchCreatorVideo(localStorage.getItem("userID")));
  }, []);

  const handlePlaylistData = (event) => {
    const { name, value } = event.target;
    setPlaylistData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleThumbnailInput = (event) => {
    const file = event.target.files[0];
    setPlaylistData((previous) => ({
      ...previous,
      playlist_thumbnail: file,
    }));
  };

  const handleShorVideo = (event) => {
    const file = event.target.files[0];
    setPlaylistData((previous) => ({
      ...previous,
      preview_video: file,
    }));
  };

  const submitPlaylistData = async () => {
    const formDataSend = new FormData();
    formDataSend.append("playlist_title", playlistData.playlist_title);
    formDataSend.append("course_id", playlistData.course_id);
    formDataSend.append(
      "playlist_description",
      playlistData.playlist_description
    );
    formDataSend.append("playlist_thumbnail", playlistData.playlist_thumbnail);
    formDataSend.append("preview_video", playlistData.preview_video);
    formDataSend.append("price", playlistData.price);
    formDataSend.append("creatorId", playlistData.creatorid);
    setSpin(true);
    try {
      const response = await dispatch(publishPlaylist(formDataSend));
      console.log(response, "response");
      if (response.payload.data.status) {
        setSpin(false);
        toast.success(response.payload.data.message);
      } else {
        setSpin(false);
        toast.error(response.payload.data.message);
      }
    } catch (error) {
      console.log(error);
      setSpin(false);
    }
    console.log(playlistData);
  };

  const previewHandle = () => {
    setShowPreview(true);
  };

  const backForm = () => {
    setShowPreview(false);
  };

  return (
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
              border: "1px solid #a023cc",
              padding: "20px",
              width: { xs: "70%", md: "50%" },
              gap: "10px",
              borderRadius: "10px",
            }}
          >
            <Typography
              sx={{ fontSize: "24px", fontWeight: "700", marginBottom: "15px" }}
            >
              Create Playlist
            </Typography>
            <TextField
              placeholder="Course name"
              sx={{ width: "100%", marginBottom: "10px" }}
              value={playlistData.playlist_title}
              onChange={handlePlaylistData}
              name="playlist_title"
            />
            <TextField
              placeholder="Course ID"
              sx={{ width: "100%", marginBottom: "10px" }}
              value={playlistData.course_id}
              onChange={handlePlaylistData}
              name="course_id"
            />
            <TextField
              placeholder="Description"
              sx={{ width: "100%", marginBottom: "10px" }}
              value={playlistData.playlist_description}
              onChange={handlePlaylistData}
              name="playlist_description"
            />
            <TextField
              placeholder="Price"
              sx={{ width: "100%", marginBottom: "10px" }}
              value={playlistData.price}
              onChange={handlePlaylistData}
              name="price"
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
              Upload Short video
              <VisuallyHiddenInput type="file" onChange={handleShorVideo} />
            </Button>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{ width: "100%" }}
            >
              <Button sx={{ width: "50%" }} onClick={previewHandle}>
                Preview
              </Button>
              <Button sx={{ width: "50%" }} onClick={submitPlaylistData}>
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
              border: "1px solid #a023cc",
              padding: "20px",
              width: { xs: "70%", md: "50%" },
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
              onClick={backForm}
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
                  "@media (max-width: 600px)": {
                    fontSize: "16px",
                  },
                }}
              >
                Course name
              </Typography>
              <Typography
                sx={{
                  fontWeight: "900",
                  fontFamily: "Calibri",
                  fontSize: "20px",
                  "@media (max-width: 600px)": {
                    fontSize: "16px",
                  },
                }}
              >
                {playlistData.playlist_title}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                "@media (max-width: 600px)": {
                  fontSize: "16px",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "900",
                  color: "#909090",
                  fontFamily: "Calibri",
                  fontSize: "18px",
                  "@media (max-width: 600px)": {
                    fontSize: "16px",
                  },
                }}
              >
                Course ID
              </Typography>
              <Typography
                sx={{
                  fontWeight: "900",
                  fontFamily: "Calibri",
                  fontSize: "20px",
                  "@media (max-width: 600px)": {
                    fontSize: "16px",
                  },
                }}
              >
                {playlistData.course_id}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
                width: "100%",
                "@media (max-width: 600px)": {
                  display: "block",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "900",
                  color: "#909090",
                  fontFamily: "Calibri",
                  fontSize: "18px",
                  width: "20%",
                  "@media (max-width: 600px)": {
                    fontSize: "16px",
                    width: "100%",
                  },
                }}
              >
                Description
              </Typography>
              <Typography
                sx={{
                  fontWeight: "900",
                  fontFamily: "Calibri",
                  fontSize: "20px",
                  width: "80%",
                  textAlign: "end",
                  "@media (max-width: 600px)": {
                    fontSize: "16px",
                    gap: "5px",
                    width: "100%",
                    textAlign: "start",
                  },
                }}
              >
                {playlistData.playlist_description}
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
                }}
              >
                Price
              </Typography>
              <Typography
                sx={{
                  fontWeight: "900",
                  fontFamily: "Calibri",
                  fontSize: "20px",
                }}
              >
                ₹{playlistData.price}
              </Typography>
            </Box>
            <hr />
            <br />
            {playlistData.playlist_thumbnail && (
              <div>
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#909090",
                    fontFamily: "Calibri",
                    fontSize: "18px",
                  }}
                >
                  Thumbnail image:
                </Typography>
                {playlistData.playlist_thumbnail.type.startsWith("image/") ? (
                  <img
                    width="100%"
                    height="auto"
                    style={{borderRadius:"10px"}}
                    src={URL.createObjectURL(playlistData.playlist_thumbnail)}
                  />
                ) : (
                  <Typography>
                    Unsupported file format. Please select a thumbnail.
                  </Typography>
                )}
              </div>
            )}
            {playlistData.preview_video && (
              <div>
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#909090",
                    fontFamily: "Calibri",
                    fontSize: "18px",
                  }}
                >
                  Preview Video:
                </Typography>
                {playlistData.preview_video.type.startsWith("video/") ? (
                  <video
                    controls
                    width="100%"
                    height="auto"
                    style={{borderRadius:"10px"}}
                    src={URL.createObjectURL(playlistData.preview_video)}
                  />
                ) : (
                  <Typography>
                    Unsupported file format. Please select a video.
                  </Typography>
                )}
              </div>
            )}
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{ width: "100%" }}
            >
              <Button sx={{ width: "50%" }} onClick={backForm}>
                Back
              </Button>
              <Button sx={{ width: "50%" }} onClick={submitPlaylistData}>
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

export default CreatePlaylist;
