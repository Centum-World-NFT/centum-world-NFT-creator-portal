import { useSelector } from "react-redux";
import { Wrapper } from "./ConfirmStyle";
import { Box, Typography } from "@mui/material";

const Confirm = () => {
  const formState = useSelector((state) => state.form);
  return (
    <Wrapper>
      <Typography>Your Video</Typography>
      <Box sx={{display: "flex", alignItems: "start"}}>
        <video src={URL.createObjectURL(formState.video)} controls />
        <iframe
          title="PDF Preview"
          src={URL.createObjectURL(formState.pdf)}
          style={{ width: "100%", height: "600px" }}
        />
      </Box>
      <Typography>Your Title</Typography>
      <Typography sx={{ background: "#ced4da" }}>
        {formState.title}
      </Typography>
      <Typography>Your Description</Typography>
      <Typography sx={{ background: "#ced4da" }}>
        {formState.description}
      </Typography>
    </Wrapper>
  );
};

export default Confirm;
