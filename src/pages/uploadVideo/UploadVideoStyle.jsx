import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
    padding: "40px",
})

export const VideoContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
})

export const PageTitle = styled(Typography)({
    fontWeight: "600",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2rem"
})