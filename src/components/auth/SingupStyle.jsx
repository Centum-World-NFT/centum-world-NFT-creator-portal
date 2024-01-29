import { Dialog, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const DialogTitle = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontWeight: "600",
  padding: "10px 0px 10px 0px",
  width: "90%",
  textAlign: "left",
  color: "#913DF3"
});

export const PasswordField = styled(TextField)({
  position: "relative",
  background: "rgba(0, 0, 0, .1)",
  borderRadius: "20px",
  // width: "100%", // Ensure the input takes the full width
  // padding: "14px 20px", // Adjust padding as needed
  ".MuiInputBase-root":{
    borderRadius: "20px"
  },
});

export const DialogWrapper = styled(Dialog)({
  ".MuiDialog-paper": {
    border: "1px solid rgba(255, 255, 255, .25)",
    borderRadius: "20px",
    boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(15px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width: "28%",
    // height: "70%",
  },
});

export const InputFields = styled(TextField)({
  background: "rgba(0, 0, 0, .1)",
  borderRadius: "20px",
  ".MuiInputBase-root":{
    borderRadius: "20px"
  }
})