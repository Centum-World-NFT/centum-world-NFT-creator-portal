import styled from "@emotion/styled";
import { Card, Typography } from "@mui/material";

export const Wrapper = styled("div")({
  width:"100%",
  padding: "20px",
});

export const AccountHeader = styled(Typography)({
  fontSize:"28px",
  fontWeight:"600",
  fontFamily:"Calibri"
})

export const AccountContainer = styled("div")({
  display:"flex",
  flexWrap:"wrap",
  gap:"20px",
  "@media (max-width: 767px)": {
    flexDirection:"column"
},
})

export const ProfileDiv = styled("div")({
  
})

export const ContentDiv = styled("div")({

})

export const CardDiv = styled(Card)({
  background:"#fbfcfe",
  height:"45vh",
  padding:"8px",
  borderRadius:"8px",
  border:"1px solid #d4dbe3",
  '@media (max-width: 767px)': {
    width: '88%',
    marginRight:"0px"
  },
})

export const TextFieldDiv = styled("div")({
  marginTop:"8px",
  display:"flex",
  justifyContent:"space-between",
  gap:"4px"
})
