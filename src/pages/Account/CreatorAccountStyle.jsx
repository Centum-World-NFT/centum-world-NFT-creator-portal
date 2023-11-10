import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Wrapper = styled("div")({
  padding: "40px",
});

export const AccountHeader = styled(Typography)({
  fontSize: "30px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "700",
  marginBottom: "15px",
});

export const AccountContainer = styled("div")({
  display: "flex",
  gap: "20px",
});

export const ProfileContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  flexDirection: "column",
  height: "200px",
  width: "300px",
  background: "#fefefe",
  boxShadow: `
    3px 3px 5px 0px rgba(0, 0, 0, 0.1), /* top left */
    -3px 3px 5px 0px rgba(0, 0, 0, 0.1), /* top right */
    0px 3px 5px 0px rgba(0, 0, 0, 0.06), /* bottom left */
    0px -3px 5px 0px rgba(0, 0, 0, 0.06) /* bottom right */
  `,
  borderRadius: "10px",
  padding: "20px 30px 20px 30px",
});

export const ProfilePicture = styled("div")({});

export const CreatorName = styled(Typography)({
  fontSize: "24px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "600",
});

export const CreatorAddress = styled(Typography)({
  fontSize: "14px",
  fontFamily: "'Poppins', sans-serif",
  color: "#7d838e",
});

export const Line = styled("div")({
  border: "1px solid #f2f4f7",
  width: "100%",
  marginTop: "20px",
});

export const UploadPicture = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5px",
});

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const FormContainer = styled("div")({
  background: "#fefefe",
  boxShadow: `
    3px 3px 5px 0px rgba(0, 0, 0, 0.1), /* top left */
    -3px 3px 5px 0px rgba(0, 0, 0, 0.1), /* top right */
    0px 3px 5px 0px rgba(0, 0, 0, 0.06), /* bottom left */
    0px -3px 5px 0px rgba(0, 0, 0, 0.06) /* bottom right */
  `,
  borderRadius: "10px",
  padding: "20px 30px 20px 30px",
});

export const FormHeading = styled("div")({
  flexWrap: "wrap",
  flexDirection: "column",
  fontSize: "20px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "500",
});

export const FormInformation = styled(Typography)({
  fontSize: "14px",
  color: "#828792",
  marginBottom: "10px",
});

export const FormFieldContainer = styled("div")({
  position: "relative",
});

export const FormField = styled("div")({
  margin: "2px",
});

export const SubmitForm = styled("div")({
  float:"right",
});
