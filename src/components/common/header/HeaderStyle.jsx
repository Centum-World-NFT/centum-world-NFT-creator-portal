import { Button, Link, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderWrapper = styled("div")({
  position: "fixed",
  borderRadius: "50px",
  background: "#0a0a0a",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
  width: "90vw",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
  padding: "20px",
  justifyContent: "space-between",
  zIndex: "1",
  color: "#fff",
});

export const LogoBox = styled("div")({
  display: "flex",
  alignItems: "center",
  borderRight: "1px solid white",
  padding: "0px 10px 0px 0px",
});

export const CompanyName = styled(Typography)({
  fontWeight: "600",
  fontFamily: "'Poppins', sans-serif",
  width: "100%",
});

export const HeaderLeftContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const NavLink = styled(Typography)({
  margin: "0px 0px 0px 10px",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: ".2rem",
});

export const LinkBox = styled("div")({
  display: "flex",
});

export const HeaderRightContainer = styled("div")(({theme}) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down('md')]:{
    display: "none"
  }
}))

export const LoginButton = styled(Button)({
  borderRadius: "50px",
  textTransform: "inherit",
  padding: ".7rem 1.5rem",
  display: "flex",
  gap: ".2rem",
});

export const SearchInput = styled(TextField)({
  padding: "0px 10px 0px 0px",

  ".MuiInputBase-root": {
    borderRadius: "50px",
  },

  ".MuiInputLabel-root": {
    left: "20px",
    color: "#fff",
  },

  ".css-1ff8729-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before":
    {
      border: "none",
    },

  ".css-1ff8729-MuiInputBase-root-MuiFilledInput-root:before": {
    border: "none",
  },

  ".css-1iulo1y-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before":
    {
      border: "none",
    },

  ".MuiFilledInput-root:hover": {
    border: "none",
  },

  ".MuiFilledInput-root": {
    background: "#212529",
  },

  ".css-1iulo1y-MuiInputBase-root-MuiFilledInput-root:before": {
    border: "none",
  },

  ".MuiFilledInput-input:focus": {
    outline: "1",
    background: "#212529",
    color: "#fff",
  },

  ".MuiFilledInput-root:after": {
    border: "none",
  },

  ".MuiFilledInput-input": {
    padding: "16px 12px 8px 32px",
    color: "#fff",
  },
});

export const SearchBox = styled("div")({
  display: "flex",
  alignItems: "center",
  borderRight: "1px solid white",
  position: "relative",
});

export const IconBox = styled("div")({
  position: "absolute",
  right: "20px",
});

export const CartBox = styled("div")({
  margin: "0px 0px 0px 10px",
  cursor: "pointer",
});

export const PopLinks = styled(Link)({
  color: "black",
});

export const LinkText = styled(Typography)({
  marginTop: ".2rem",
  fontFamily: "'Poppins', sans-serif",
});

export const HomePageLink = styled(Link)({
  color: "#fff",
})