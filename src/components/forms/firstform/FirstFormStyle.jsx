import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  margin: "2rem 0px 0px 0px",
  display: "flex",
  gap: "1rem",
});

export const UploadContainer = styled("div")({
  gap: "1rem",
  width: "50%",
  display: "flex",
  flexDirection: "column"
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

export const DescriptionBox = styled("div")({
    width: "100%"
})
