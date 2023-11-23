import React from "react";
import { SectionNumber } from "./CreatorVideosStyle";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const CreatorVideos = () => {
  const creatorVideos = useSelector((state) => state.fetchVideo);
  const videos = creatorVideos.data || [];
  console.log(videos);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
      <SectionNumber>Step 2</SectionNumber>
      <Divider />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", mt: "1rem", pb: "20px" }}>
        {videos.map((item, index) => {
          return (
            <>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.thumbnail}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Add to Playlist
                  </Button>
                </CardActions>
              </Card>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default CreatorVideos;
