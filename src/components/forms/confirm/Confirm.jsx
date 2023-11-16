import { useSelector } from "react-redux";
import { Wrapper } from "./ConfirmStyle";
import { Box, Typography } from "@mui/material";

const Confirm = () => {
  const formState = useSelector((state) => state.form);
  return (
    <Wrapper>
      <Typography>Your Video</Typography>
      <Box sx={{display: "flex", alignItems: "start"}}>
        <video src={formState.uploadVideo} controls />
        <iframe
          title="PDF Preview"
          src={formState.uploadPdf}
          style={{ width: "100%", height: "600px" }}
        />
      </Box>
      <Typography>Your Title</Typography>
      <Typography sx={{ background: "#ced4da" }}>
        {formState.videoTitle}
      </Typography>
      <Typography>Your Description</Typography>
      <Typography sx={{ background: "#ced4da" }}>
        {formState.videoDescription}
      </Typography>
    </Wrapper>
  );
};

export default Confirm;
