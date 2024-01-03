import { LinkedCamera } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const SidebarWrapper = styled("div")({
  height: "100vh",
  backgroundColor:"#fbfaff",
  // backgroundColor: "rgb(28, 37, 54)",
  // background: 'linear-gradient(to right, #614385 , #516395)',
  
});

export const SidebarContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "10px"
});

export const SidebarHeader = styled("div")({
  display:"flex",
  alignContent:"center",
  justifyContent:"space-between",
  padding: "20px",
  // backgroundColor: "rgba(255, 255, 255, 0.04)",
  backgroundColor:"#faebff",
  borderRadius: "10px",
  // color: "#fff",
  color:"#a023cc",
  fontFamily: "'Poppins', sans-serif",
});

export const HeaderSubtitle = styled(Typography)({
  opacity: "0.5",
  fontSize: ".8rem",
});

export const SidebarNavItems = styled("div")({
  // backgroundColor: "rgba(255, 255, 255, 0.04)",
  backgroundColor:"#faebff",
  borderRadius: "10px",
  // color: "#ccc",
  color:"#a023cc",
  fontFamily: "'Poppins', sans-serif",
  display: "flex",
  flexDirection: "column",
  maxHeight:"65vh",
  overflow:"hidden",
});

export const NavItem = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const NavItems = styled("div")(({ isClicked }) => ({
  cursor: "pointer",
  padding: "12px",
  borderRadius: "10px",
  // backgroundColor: isClicked ? "rgba(255, 255, 255, 0.06)" : "transparent",
  // color: isClicked ? "#fff" : "rgba(255, 255, 255, 0.5)",
  backgroundColor: isClicked ? "rgba(255, 255, 255, 0.06)" : "transparent",
  color: isClicked ? "rgb(99, 102, 241)" : "#a023cc",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    color: "rgb(99, 102, 241)",
  },
}));

export const NavItemLink = styled(LinkedCamera)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});
