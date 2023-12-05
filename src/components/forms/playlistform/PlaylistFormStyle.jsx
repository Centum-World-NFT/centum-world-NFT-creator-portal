import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  display: "flex",
  alignItems: "start",
  gap: "1rem",
  margin: "1rem auto",
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

export const ButtonContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  margin: "1rem auto"
});

export const FieldContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const SectionNumber = styled(Typography)({
  fontWeight: "600",
  fontFamily: "Poppins, 'sans-serif'",
});
