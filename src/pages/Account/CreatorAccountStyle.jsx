import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";

export const Wrapper = styled("div")({
  width:"100%",
  padding: "40px",
});

export const MainDivConatainer = styled("div")({
  display:"flex",
  padding:"15px",
  width:"100%"
})

export const AccountHeader = styled(Typography)({
  fontSize: "30px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "700",
  marginBottom: "15px",
});

export const ProfilePicCard = styled(Card)({
  width: "max-content",
  padding: "20px 10px 20px 10px",
  display: "flex",
  justifyContent:"center",
  height: "150px",
  width: "30%",
  marginRight:"30px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",

  ":hover": {
    transform: "translateY(-5px)",
    transition: "all 200ms ease-in-out",
  },
})

export const ProfileAndAboutme = styled("div")({
  display:"flex",
  flexWrap:"wrap",
  flexDirection:"column",
  padding:"5px",
  width:"70%"
})

export const ProfileDetails = styled(Card)({
  width: "max-content",
  padding: "20px 10px 20px 10px",
  display: "column",
  height: "250px",
  width: "70%",
  marginBottom:"10px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",

  ":hover": {
    transform: "translateY(-5px)",
    transition: "all 200ms ease-in-out",
  },
})

export const Aboutme = styled(Card)({
  width: "max-content",
  padding: "20px 10px 20px 10px",
  display: "flex",
  height: "auto",
  width: "70%",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",

  ":hover": {
    transform: "translateY(-5px)",
    transition: "all 200ms ease-in-out",
  },
})

export const ProfilePic = styled("div")({
  
})

export const CardContantDiv = styled("div")({
  display:"flex",
  flexWrap:"wrap",
  flexDirection:"column",
  alignItems:"center"
})

export const ProfileHeading = styled("div")({
  display:"flex",
  justifyContent:"start",
  flexWrap:"wrap",
  flexDirection:"column"
})

export const FormDiv = styled("div")({

})

export const FormField = styled("div")({
  display:"flex",
  justifyContent:"space-between",
  marginBottom:"15px"
})

export const SubmitButton = styled("div")({
  display:"flex",
  justifyContent:"center"
})