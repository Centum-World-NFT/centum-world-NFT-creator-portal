import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderDiv = styled("div")({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"5px",
    "@media (min-width: 1024px)": {
        display: "none",
    },
  });

export const LogoDiv = styled("div")({
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center"
})  

export const LogoContent = styled("div")({

})

export const MenuDiv = styled("div")({
    
})