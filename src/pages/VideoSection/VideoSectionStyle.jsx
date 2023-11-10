import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Wrapper = styled("div")({
    padding:"40px",
})

export const VodeoHeader = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    flexDirection:"column",
    gap:"1px"
})

export const Heading = styled(Typography)({
    fontSize:"30px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight:"700"
})

export const TableHeading = styled(Typography)({
    fontSize:"20px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight:"700"
})

export const VideoCreatorName = styled(Typography)({
    padding:"5px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight:"600"
})

export const SearchDiv = styled("div")({
    display:"flex",
    justifyContent:"start",
    alignItems:"center",
    margin:"10px 0 10px 5px",
    height: "80px",
    background:"#fefefe",
    boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
    borderRadius:"10px",
    paddingLeft:"20px"
})
