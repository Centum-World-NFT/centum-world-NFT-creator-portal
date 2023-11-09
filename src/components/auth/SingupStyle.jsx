import styled from "@emotion/styled";
import { Dialog, TextField } from "@mui/material";

export const SignUpContainer = styled(Dialog)({
  ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
    borderRadius: "10px",
    width: "60%",
    height: "60%",
  },
});

export const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Input = styled(TextField)(({ theme }) => ({
  width: "70%",
  margin: "10px 0", 
}));

