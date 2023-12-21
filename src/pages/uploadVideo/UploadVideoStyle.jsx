import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
    padding: "20px",
    background:"#fbfcfe",
    height: "calc(100vh - 165px)",
    "@media (max-width: 640px)": {
        padding:"5px"
    },
})

export const VideoContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
})

export const PageTitle = styled(Typography)({
    fontWeight: "600",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2rem",
    "@media (max-width: 640px)": {
        fontWeight:"600",
        fontSize:"1rem"
    },
})