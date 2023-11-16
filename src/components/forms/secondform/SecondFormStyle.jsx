import {styled} from "@mui/system"

export const WrapperBox = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
})

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