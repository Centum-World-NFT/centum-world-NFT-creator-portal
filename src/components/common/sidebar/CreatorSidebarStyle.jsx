import { LinkedCamera } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const SidebarWrapper = styled("div")({
  height: "100vh",
  // backgroundColor:"#fbfaff",
  backgroundColor:"#fff",
  
  
});

export const SidebarContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "10px"
});

export const SidebarHeader = styled("div")({
  display:"flex",
  flexDirection: "column",
  // alignContent:"center",
  alignItems:'center',
  justifyContent:"center",
  padding: "20px",
  backgroundColor:"#fff",
  borderRadius: "10px",
  color:"#000",
  fontFamily: "'Poppins', sans-serif",
});

export const HeaderSubtitle = styled(Typography)({
  opacity: "0.5",
  fontSize: ".8rem",
});

export const SidebarNavItems = styled("div")({
  backgroundColor:"#fff",
  borderRadius: "10px",
  color:"#000",
  fontFamily: 'Calibri',
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
  color: isClicked ? "rgb(99, 102, 241)" : "#2d3748",
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
