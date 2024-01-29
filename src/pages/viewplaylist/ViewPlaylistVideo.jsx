import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { fetchPlaylistAllVideo } from "../../redux/slices/fetchPlaylistVideoSlice";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { formatRelativeTime } from "../../utils/timedate";
import SendIcon from "@mui/icons-material/Send";
import {
  SideThumbnailVideo,
  VideoContainer,
  VideoMainContainer,
} from "./ViewPlaylistVideoStyle.jsx";
import {
  BackArrow,
  DeleteCommentIcon,
  DislikeIcon,
  FillIcon,
  LikeIcon,
  // SendIcon,
} from "../../utils/icons.jsx";
import { commentInVideo } from "../../redux/slices/commentSlice.js";

import { fetchComment } from "../../redux/slices/getCommentSlice.js";
import { replyCommentForCreator } from "../../redux/slices/replyCommentSlice.js";
import { likeVideoForCreator } from "../../redux/slices/likeSlice.js";
import { singleVideo } from "../../redux/slices/fetchSingleVideoSlice.js";
import { deletCommentForCreator } from "../../redux/slices/deletCommentSlice.js";
import toast from "react-hot-toast";
import { deletRepiesForCreator } from "../../redux/slices/deleteRepliesSlice.js";

const ViewPlaylistVideo = () => {
  const topRef = useRef(null);
  const replyInputRef = useRef(null);
  const myuserid = localStorage.getItem("userID");
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);
  const [repliesVisibility, setRepliesVisibility] = useState({});
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [repliInputVisibility, setReplyInputVisibility] = useState({});
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
    like: 0,
    likeshow: false,
  });
  const creatorid = localStorage.getItem("userID");
  const [likeColor, setLikeColor] = useState(false);
  const [firstVideo, setFirstVideo] = useState({
    firstUrl: "",
    firstDescription: "",
    firstTitle: "",
    videoId: "",
    like: 0,
  });
  const dispatch = useDispatch();
  const param = useParams();
  useEffect(() => {
    const callApiToFetchPlaylistVidoe = async () => {
      try {
        const respnse = await dispatch(fetchPlaylistAllVideo(param));
        setData(respnse.payload.data);
        setLikeColor(respnse.payload.data[0].likes.includes(creatorid));
        setFirstVideo({
          firstUrl: respnse.payload.data[0].video,
          firstDescription: respnse.payload.data[0].description,
          firstTitle: respnse.payload.data[0].title,
          videoId: respnse.payload.data[0]._id,
          like: respnse.payload.data[0].likes.length,
        });
        callApiToFetchComment(respnse.payload.data[0]._id);
      } catch (error) {}
    };
    callApiToFetchPlaylistVidoe();
  }, [dispatch]);

  const handleVideo = async (video) => {
    try {
      setFirstVideo({ videoId: "" });
      let data = {
        videoId: video._id,
      };
      const response = await dispatch(singleVideo(data));
      setLikeColor(response.payload.data.likes.includes(creatorid));
      setVideoContent({
        videoUrl: video.video,
        videoDescription: video.description,
        videoTitle: video.title,
        videoId: video._id,
        like: response.payload.data.likes.length,
        likeshow: true,
      });
      callApiToFetchComment(video._id);
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {}
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
    // setHideCommentBox(true);
    setReplyInputVisibility((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setShowReplyInput((prev) => !prev);
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

  const likeVideo = async () => {
    try {
      const response = await dispatch(
        likeVideoForCreator(vedioConten.videoId || firstVideo.videoId)
      );
      console.log(response.payload.data.likes);
      setLikeColor(response.payload.data.likes.includes(creatorid));
      setVideoContent((prev) => ({
        ...prev,
        like: response.payload.data.likes.length,
        likeshow: true,
      }));
    } catch (error) {}
  };

  const deleteComment = async (id) => {
    try {
      const response = await dispatch(deletCommentForCreator(id));
      console.log(response.payload.message);
      toast.success(response.payload.message);
      callApiToFetchComment(vedioConten.videoId || firstVideo.videoId);
    } catch (error) {}
  };

  const detletRepies = async (id) => {
    try {
      const response = await dispatch(deletRepiesForCreator(id));
      toast.success(response.payload.message);
      callApiToFetchComment(vedioConten.videoId || firstVideo.videoId);
    } catch (error) {}
  };

  useEffect(() => {
    if (showReplyInput && replyInputRef.current) {
      replyInputRef.current.focus();
    }
  }, [showReplyInput]);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div ref={topRef}>
        <VideoMainContainer>
          <VideoContainer>
            <Box sx={{ paddingRight: "2rem" }}>
              <video
                controls
                width="100%"
                style={{ borderRadius: "10px" }}
                controlsList="nodownload"
                onContextMenu={handleContextMenu}
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
                <div
                  style={{
                    width: "80px",
                    height: "20px",
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "15px",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div onClick={likeVideo}>
                    {likeColor ? <FillIcon /> : <LikeIcon />}
                  </div>
                  &nbsp;&nbsp; |&nbsp;&nbsp;
                  {vedioConten.likeshow
                    ? vedioConten.like
                    : firstVideo.like}{" "}
                </div>
                {!hideCommentBox ? (
                  <>
                    <form onSubmit={handleCommentSubmit}>
                      <Box>
                        <TextField
                          sx={{ width: "100%" }}
                          placeholder="Add a comment..."
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
                          <div>
                            <div
                              style={{
                                display: "flex",
                                gap: "2px",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  gap: "2px",
                                  justifyContent: "start",
                                  alignItems: "center",
                                }}
                              >
                                <Avatar sx={{ width: "20px", height: "20px" }}>
                                  <AccountCircleIcon />
                                </Avatar>
                                <small
                                  style={{
                                    color: "#20212e",
                                    fontFamily: "calibri",
                                    gap: "5px",
                                    fontSize: "14px",
                                  }}
                                >
                                  {item.nameOfUser}&nbsp;
                                  {formatRelativeTime(item.createdAt)}
                                </small>
                              </div>
                              <div onClick={() => deleteComment(item._id)}>
                                {myuserid === item.userId ? (
                                  <DeleteCommentIcon />
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div>
                              <p
                                style={{
                                  color: "#828792",
                                  fontFamily: "calibri",
                                  fontSize: "16px",
                                  marginLeft: "22px",
                                }}
                              >
                                {item.text}
                              </p>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                  marginLeft: "22px",
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
                                  style={{
                                    color: "#0000ff",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => showReplies(item._id)}
                                >
                                  {item.replies.length} Replies
                                </small>
                              </div>
                              {repliInputVisibility[item._id] && (
                                <div>
                                  <form onSubmit={handleReplySubmit}>
                                    <Box>
                                      <TextField
                                        sx={{ width: "100%" }}
                                        placeholder="Add a reply..."
                                        id="standard-size-normal"
                                        variant="standard"
                                        inputRef={replyInputRef}
                                        value={reply}
                                        onChange={(e) =>
                                          setReply(e.target.value)
                                        }
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
                              )}
                              {repliesVisibility[item._id] && (
                                <div>
                                  {item.replies.map((item, index) => (
                                    <div key={index}>
                                      <div
                                        style={{
                                          display: "flex",
                                          gap: "2px",
                                          marginTop: "2px",
                                          marginLeft: "22px",
                                          justifyContent:"space-between"
                                        }}
                                      >
                                        <div style={{display:"flex"}}>
                                        <Avatar
                                          sx={{ width: "16px", height: "16px" }}
                                        >
                                          <AccountCircleIcon />
                                        </Avatar>
                                        <div>
                                          <div
                                            style={{
                                              display: "flex",
                                              gap: "10px",
                                            }}
                                          >
                                            <small
                                              style={{
                                                display: "flex",
                                                color: "#828792",
                                                fontFamily: "calibri",
                                                fontSize: "14px",
                                              }}
                                            >
                                              {item.nameOfUser}&nbsp;
                                              {formatRelativeTime(
                                                item.createdAt
                                              )}
                                            </small>
                                          </div>
                                          <p
                                            style={{
                                              color: "#828792",
                                              fontFamily: "calibri",
                                              fontSize: "12px",
                                            }}
                                          >
                                            {item.text}
                                          </p>
                                        </div>
                                        </div>
                                        <div
                                          onClick={() => detletRepies(item._id)}
                                        >
                                          {myuserid === item.userId ? (
                                            <DeleteCommentIcon />
                                          ) : (
                                            ""
                                          )}
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
                      style={{
                        display: "flex",
                        paddingLeft: "24px",
                        gap: "4px",
                      }}
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
                    width: "50%",
                    height: "100px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={item.thumbnail}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    height: "100px",
                    overflow: "hidden",
                    padding: "2px",
                  }}
                >
                  <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                    {/* {item.title} */}
                    {item.title.substring(0, 55)}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "10px",
                      color: "#86846d",
                    }}
                  >
                    {item.description.substring(0, 70)}
                  </Typography>
                </Box>
              </Box>
            ))}
          </SideThumbnailVideo>
        </VideoMainContainer>
      </div>
    </>
  );
};

export default ViewPlaylistVideo;
