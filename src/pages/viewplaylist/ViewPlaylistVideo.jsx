import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { fetchPlaylistAllVideo } from "../../redux/slices/fetchPlaylistVideoSlice";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  SideThumbnailVideo,
  VideoContainer,
  VideoMainContainer,
} from "./ViewPlaylistVideoStyle.jsx";
import { SendIcon } from "../../utils/icons.jsx";

const ViewPlaylistVideo = () => {
  const [data, setData] = useState([]);
  const [vedioConten, setVideoContent] = useState({
    videoUrl: "",
    videoTitle: "",
    videoDescription: "",
  });

  const [firstVideo, setFirstVideo] = useState({
    firstUrl: "",
    firstDescription: "",
    firstTitle: "",
  });
  const dispatch = useDispatch();
  const param = useParams();
  console.log(param);
  useEffect(() => {
    const callApiToFetchPlaylistVidoe = async () => {
      try {
        const respnse = await dispatch(fetchPlaylistAllVideo(param));
        setData(respnse.payload.data);
        setFirstVideo({
          firstUrl: respnse.payload.data[0].video,
          firstDescription: respnse.payload.data[0].description,
          firstTitle: respnse.payload.data[0].title,
        });
      } catch (error) {}
    };
    callApiToFetchPlaylistVidoe();
  }, [dispatch]);

  const handleVideo = (video) => {
    setVideoContent({
      videoUrl: video.video,
      videoDescription: video.description,
      videoTitle: video.title,
    });
    console.log(video);
  };
  return (
    <>
      <VideoMainContainer>
        <VideoContainer>
          <Box sx={{ paddingRight: "2rem" }}>
            <video
              controls
              width="100%"
              borderRadius="10px"
              src={vedioConten.videoUrl ? vedioConten.videoUrl : firstVideo.firstUrl}
              autoPlay
            />
            <Box sx={{ backgroundColor: "" }}>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  fontFamily: "sans-serif",
                }}
              >
                {vedioConten.videoTitle? vedioConten.videoTitle: firstVideo.firstTitle }
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                }}
              >
                {vedioConten.videoDescription? vedioConten.videoDescription: firstVideo.firstDescription}
              </Typography>
              <Box>
                <TextField
                  sx={{ width: "100%" }}
                  label="Add a comment..."
                  id="standard-size-normal"
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        edge="end"
                        aria-label="send comment" // Replace with your send comment function
                      >
                        <SendIcon />
                      </IconButton>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Box>
        </VideoContainer>
        <SideThumbnailVideo>
          {data.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                width: "auto",
                paddingRight: "1rem",
                marginBottom: "5px",
              }}
              key={index}
              onClick={() => handleVideo(item)}
            >
              <Box
                sx={{
                  width: "60%",
                  height: "100px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.thumbnail}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ width: "40%", height: "100px", overflow: "hidden" }}>
                <Typography sx={{ fontWeight: "600", fontSize: "16px" }}>
                  {item.title}
                </Typography>
                <Typography
                  sx={{ fontWeight: "400", fontSize: "12px", color: "#86846d" }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </SideThumbnailVideo>
      </VideoMainContainer>
    </>
  );
};

export default ViewPlaylistVideo;
