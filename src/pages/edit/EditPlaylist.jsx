import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchPlaylistForEditApiFuc } from "../../redux/slices/fetchPlaylistForEditSlice";
import { VisuallyHiddenInput } from "../../components/forms/playlistform/PlaylistFormStyle";
import { UploadIcon } from "../../utils/icons";
import { updatePlaylistFuc } from "../../redux/slices/updatePlaylistSlice";
import { toast } from "react-toastify";


const EditPlaylist = () => {
  const param = useParams();
  console.log(param);
  const dispatch = useDispatch();
  const [showVideo, setShowVideo] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(false);
  const [spin, setSpin] = useState(false);
  const [playlistData, setPlaylistData] = useState({
    playlist_title: "",
    playlist_description: "",
    price: "",
    course_id: "",
    playlist_thumbnail: null,
    preview_video: null,
  });

  useEffect(() => {
    const callApiToFetchPlaylistVidoe = async () => {
      try {
        const respnse = await dispatch(fetchPlaylistForEditApiFuc(param));
        setPlaylistData({
          preview_video: respnse.payload.data.preview_video,
          playlist_title: respnse.payload.data.playlist_title,
          playlist_description: respnse.payload.data.playlist_description,
          price: respnse.payload.data.price,
          playlist_thumbnail: respnse.payload.data.playlist_thumbnail,
        });
      } catch (error) {}
    };
    callApiToFetchPlaylistVidoe();
  }, [dispatch]);

  const handleFormData = (event) => {
    const { name, value } = event.target;
    setPlaylistData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleThumbnailInput = (event) => {
    setShowThumbnail(true);
    const file = event.target.files[0];
    setPlaylistData((previous) => ({
      ...previous,
      playlist_thumbnail: file,
    }));
  };

  const handleShorVideo = (event) => {
    setShowVideo(true);
    const file = event.target.files[0];
    setPlaylistData((previous) => ({
      ...previous,
      preview_video: file,
    }));
  };

  const submitEditData = async () => {
    setSpin(true);
    const formDataSend = new FormData();
    formDataSend.append("playlist_title", playlistData.playlist_title);
    formDataSend.append(
      "playlist_description",
      playlistData.playlist_description
    );
    formDataSend.append("playlist_thumbnail", playlistData.playlist_thumbnail);
    formDataSend.append("preview_video", playlistData.preview_video);
    formDataSend.append("price", playlistData.price);
    formDataSend.append("id", param.id);
    try {
      const response = await dispatch(updatePlaylistFuc(formDataSend));
      toast.success(response.payload.message);
      setSpin(false);
    } catch (error) {}
  };

  return (
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
            justifyContent: "start",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "15px",
            color: "#af46d4",
          }}
        >
          <EditIcon />
          Edit Playlist
        </Typography>
        <TextField
          placeholder="Course name"
          sx={{ width: "100%", marginBottom: "10px" }}
          value={playlistData.playlist_title}
          name="playlist_title"
          onChange={handleFormData}
        />
        <TextField
          placeholder="Description"
          sx={{ width: "100%", marginBottom: "10px" }}
          value={playlistData.playlist_description}
          name="playlist_description"
          onChange={handleFormData}
        />
        <TextField
          placeholder="Price"
          sx={{ width: "100%", marginBottom: "10px" }}
          value={playlistData.price}
          name="price"
          onChange={handleFormData}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EditIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            display: ["block", "flex"],
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            padding: "2px",
            borderRadius: "5px",
            marginBottom: "5px",
          }}
        >
          <Box sx={{ width: ["100%", "70%"] }}>
            {!showVideo ? (
              <video controls width="100%" src={playlistData.preview_video} />
            ) : (
              // <video controls width="100%" src={URL.createObjectURL(playlistData.preview_video)} />
              <div>
                <Typography variant="h6">Preview Video:</Typography>
                {playlistData.preview_video.type.startsWith("video/") ? (
                  <video
                    controls
                    width="100%"
                    height="auto"
                    src={URL.createObjectURL(playlistData.preview_video)}
                  />
                ) : (
                  <Typography>
                    Unsupported file format. Please select a video.
                  </Typography>
                )}
              </div>
            )}
          </Box>

          <Box
            sx={{
              width: ["100%", "30%"],
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2px",
            }}
          >
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
              Edit Video
              <VisuallyHiddenInput type="file" onChange={handleShorVideo} />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: ["block", "flex"],
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            padding: "2px",
            borderRadius: "5px",
            marginBottom: "5px",
          }}
        >
          <Box sx={{ width: ["100%", "70%"] }}>
            {!showThumbnail ? (
              <img width="100%" src={playlistData.playlist_thumbnail} />
            ) : (
              <div>
                <Typography variant="h6">Thumbnail image:</Typography>
                {playlistData.playlist_thumbnail.type.startsWith("image/") ? (
                  <img
                    width="100%"
                    height="auto"
                    src={URL.createObjectURL(playlistData.playlist_thumbnail)}
                  />
                ) : (
                  <Typography>
                    Unsupported file format. Please select a thumbnail.
                  </Typography>
                )}
              </div>
            )}
          </Box>
          <Box
            sx={{
              width: ["100%", "30%"],
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2px",
            }}
          >
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
              Edit Thumbnail
              <VisuallyHiddenInput
                type="file"
                onChange={handleThumbnailInput}
              />
            </Button>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            width: "100%",
          }}
          onClick={submitEditData}
        >
          {spin ? "Uploading..." : "Upload"}
        </Button>
      </Box>
    </Box>
    
  );
};

export default EditPlaylist;
