import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
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

const EditPlaylist = () => {
  const param = useParams();
  const dispatch = useDispatch();
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

  const handleFormData = (event) =>{
    const { name, value } = event.target;
    setPlaylistData((previous) => ({
        ...previous,
        [name]: value,
    }));
    
  }

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
            display: ["block","flex"],
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            padding: "2px",
            borderRadius: "5px",
            marginBottom: "5px",
          }}
        >
          <Box sx={{ width: ["100%","70%"] }}>
            <video controls width="100%" src={playlistData.preview_video} />
          </Box>
          <Box
            sx={{
              width: ["100%","30%"],
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding:"2px"
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
              <VisuallyHiddenInput
                type="file"
                onChange={handleShorVideo}
              />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: ["block","flex"],
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            padding: "2px",
            borderRadius: "5px",
            marginBottom: "5px",
          }}
        >
          <Box sx={{ width: ["100%","70%"] }}>
            <img width="100%" src={playlistData.playlist_thumbnail} />
          </Box>
          <Box
            sx={{
              width: ["100%","30%"],
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding:"2px"
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
            display:"flex",
            width: "100%",
          }}
        >
            <EditIcon/>
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default EditPlaylist;
