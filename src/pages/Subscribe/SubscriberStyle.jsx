import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const Warrper = styled("div")({
  padding: "40px",
});

export const SubscriberContainer = styled("div")({
  display: "flex",
  justifyContent: "start",
  flexWrap: "wrap",
  padding: "5px",
});

export const SubscriberCard = styled(Card)({
  width: "max-content",
  padding: "20px 10px 20px 10px",
  height: "auto",
  width: "30%",
  marginRight: "5px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",

  ":hover": {
    transform: "translateY(-5px)",
    transition: "all 200ms ease-in-out",
  },
  marginBottom: "10px",
  "@media (max-width: 768px)": {
    width: "99%",
    marginBottom: "10px",
  },
});

export const SubscriberHeading = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const SubscriberDetails = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "2px",
  marginBottom: "2px",
});

export const Filtercard = styled(Card)({  
  display:"flex",
  justifyContent:"start",
  alignItems:"center",  
  width: "max-content",
  padding: "20px 10px 20px 10px",
  height: "auto",
  width: "50%",
  marginRight: "5px",
  borderRadius:"20px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",

  ":hover": {
    transform: "translateY(-5px)",
    transition: "all 200ms ease-in-out",
  },
  marginBottom: "10px",
  "@media (max-width: 768px)": {
    width: "99%",
    marginBottom: "10px",
  },
});
