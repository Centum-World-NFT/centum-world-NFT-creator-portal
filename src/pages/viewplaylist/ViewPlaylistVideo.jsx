import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { fetchPlaylistAllVideo } from "../../redux/slices/fetchPlaylistVideoSlice";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  SideThumbnailVideo,
  VideoContainer,
  VideoMainContainer,
} from "./ViewPlaylistVideoStyle.jsx";
import { BackArrow, SendIcon } from "../../utils/icons.jsx";
import { commentInVideo } from "../../redux/slices/commentSlice.js";
import { toast } from "react-toastify";
import { fetchComment } from "../../redux/slices/getCommentSlice.js";
import { replyCommentForCreator } from "../../redux/slices/replyCommentSlice.js";

const ViewPlaylistVideo = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [repliesVisibility, setRepliesVisibility] = useState({});
  const [replyComment, setReplyComment] = useState({
    text: "",
    name: "",
    id: "",
  });
  const [noOfComment, setNoOfComment] = useState(0);
  const [commentData, setCommentData] = useState([]);
  const [hideCommentBox, setHideCommentBox] = useState(false);
  const [vedioConten, setVideoContent] = useState({
    videoUrl: "",
    videoTitle: "",
    videoDescription: "",
    videoId: "",
  });

  const [firstVideo, setFirstVideo] = useState({
    firstUrl: "",
    firstDescription: "",
    firstTitle: "",
    videoId: "",
  });
  const dispatch = useDispatch();
  const param = useParams();
  useEffect(() => {
    const callApiToFetchPlaylistVidoe = async () => {
      try {
        const respnse = await dispatch(fetchPlaylistAllVideo(param));
        setData(respnse.payload.data);
        setFirstVideo({
          firstUrl: respnse.payload.data[0].video,
          firstDescription: respnse.payload.data[0].description,
          firstTitle: respnse.payload.data[0].title,
          videoId: respnse.payload.data[0]._id,
        });
        callApiToFetchComment(respnse.payload.data[0]._id);
      } catch (error) {}
    };
    callApiToFetchPlaylistVidoe();
  }, [dispatch]);

  const handleVideo = (video) => {
    setFirstVideo({ videoId: "" });
    setVideoContent({
      videoUrl: video.video,
      videoDescription: video.description,
      videoTitle: video.title,
      videoId: video._id,
    });
    callApiToFetchComment(video._id);
    console.log(video);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    let data = {
      videoId: vedioConten.videoId || firstVideo.videoId,
      text: comment,
    };
    setComment("");
    console.log(data);
    const response = await dispatch(commentInVideo(data));
    toast.success("Comment added successfully");
    console.log(response.payload);
    callApiToFetchComment(vedioConten.videoId || firstVideo.videoId);
  };

  const callApiToFetchComment = async (id) => {
    try {
      const response = await dispatch(fetchComment(id));

      console.log(response.payload.data);
      setNoOfComment(response.payload.data.length);
      setCommentData(response.payload.data);
    } catch (error) {}
  };

  const comentReply = (text, id, name) => {
    console.log(text, id, name);
    setReplyComment((prev) => ({ ...prev, name: name, text: text, id: id }));
    setHideCommentBox(true);
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    let data = {
      id: replyComment.id,
      text: reply,
    };
    try {
      const response = await dispatch(replyCommentForCreator(data));
      toast.success("Reply added successfully");
      callApiToFetchComment(vedioConten.videoId || firstVideo.videoId);
    } catch (error) {}
    console.log(reply, replyComment.id);
    setReply("");
  };

  const showReplies = (commentId) => {
    setReplyingTo(commentId);
    setRepliesVisibility((prev) => ({
      ...prev,
      [commentId]: !prev[commentId], // Toggle visibility
    }));
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
              src={
                vedioConten.videoUrl
                  ? vedioConten.videoUrl
                  : firstVideo.firstUrl
              }
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
                {vedioConten.videoTitle
                  ? vedioConten.videoTitle
                  : firstVideo.firstTitle}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                }}
              >
                {vedioConten.videoDescription
                  ? vedioConten.videoDescription
                  : firstVideo.firstDescription}
              </Typography>
              {!hideCommentBox ? (
                <>
                  <form onSubmit={handleCommentSubmit}>
                    <Box>
                      <TextField
                        sx={{ width: "100%" }}
                        placeholder="Add a comment..."
                        id="standard-size-normal"
                        variant="standard"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <IconButton
                              type="submit"
                              edge="end"
                              aria-label="send comment"
                              sx={{ padding: "13px" }}
                            >
                              <SendIcon />
                            </IconButton>
                          ),
                        }}
                      />
                    </Box>
                  </form>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <h3
                        style={{ fontFamily: "sans-serif", color: "#828792" }}
                      >
                        Comments {noOfComment}
                      </h3>
                    </AccordionSummary>
                    {commentData.map((item, index) => (
                      <AccordionDetails key={index}>
                        <div style={{ display: "flex", gap: "2px" }}>
                          <Avatar sx={{ width: "20px", height: "20px" }}>
                            <AccountCircleIcon />
                          </Avatar>
                          <div>
                            <small style={{ color: "#828792" }}>
                              {item.nameOfUser}
                            </small>
                            <p
                              style={{
                                color: "#828792",
                                fontFamily: "sans-serif",
                              }}
                            >
                              {item.text}
                            </p>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "10px",
                                  width: "25px",
                                  height: "12px",
                                  backgroundColor: "#4393f4",
                                  padding: "5px",
                                  borderRadius: "10px",
                                  color: "#fff",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  comentReply(
                                    item.text,
                                    item._id,
                                    item.nameOfUser
                                  )
                                }
                              >
                                Reply
                              </div>
                              <small
                                style={{ color: "#0000ff",cursor:"pointer" }}
                                onClick={() => showReplies(item._id)}
                              >
                                {item.replies.length} Replies
                              </small>
                            </div>
                            {repliesVisibility[item._id] && (
                              <div>
                                {item.replies.map((item, index) => (
                                  <div key={index}>
                                    <div
                                      style={{
                                        display: "flex",
                                        gap: "2px",
                                        marginTop: "2px",
                                      }}
                                    >
                                      <Avatar
                                        sx={{ width: "16px", height: "16px" }}
                                      >
                                        <AccountCircleIcon />
                                      </Avatar>
                                      <div>
                                        <small
                                          style={{
                                            color: "#828792",
                                            fontFamily: "sans-serif",
                                          }}
                                        >
                                          Dummy
                                        </small>
                                        <p
                                          style={{
                                            color: "#828792",
                                            fontFamily: "sans-serif",
                                          }}
                                        >
                                          {item.text}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </AccordionDetails>
                    ))}
                  </Accordion>
                </>
              ) : (
                <div
                  style={{
                    backgroundColor: "#fff",
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    onClick={() => setHideCommentBox(false)}
                  >
                    <BackArrow width="20" height="20" />{" "}
                    <p
                      style={{
                        fontFamily: "sans-serif",
                        fontSize: "18px",
                        fontWeight: "700",
                      }}
                    >
                      Replies
                    </p>
                  </div>
                  <div
                    style={{ display: "flex", paddingLeft: "24px", gap: "4px" }}
                  >
                    <Avatar sx={{ width: "16px", height: "16px" }}>
                      <AccountCircleIcon />
                    </Avatar>
                    <div>
                      <small>{replyComment.name}</small>
                      <p>{replyComment.text}</p>
                      <form onSubmit={handleReplySubmit}>
                        <Box>
                          <TextField
                            sx={{ width: "100%" }}
                            placeholder="Add a reply..."
                            id="standard-size-normal"
                            variant="standard"
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                            InputProps={{
                              endAdornment: (
                                <IconButton
                                  type="submit"
                                  edge="end"
                                  aria-label="send comment"
                                  sx={{ padding: "13px" }}
                                >
                                  <SendIcon />
                                </IconButton>
                              ),
                            }}
                          />
                        </Box>
                      </form>
                    </div>
                  </div>
                </div>
              )}
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
