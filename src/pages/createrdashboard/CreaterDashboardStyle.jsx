import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  display: "flex",
  height: "100vh",
  width: "100vw"
});

export const Container = styled("div")({
  width: "100%",
  background:"#"
})

export const SidebarContainer = styled("div")({
  height: "100%",
  width: "25vw",
  "@media (max-width: 1024px)": {
    display: "none",
  },
})

export const MainHeader = styled("div")({
  width:"100%",
  // backgroundColor:"#fbfaff",
  backgroundColor:"#a023cc",
  height:"80px",
  position:"sticky",
  top:"0",
  zIndex:"10",
  '@media (max-width: 1024px)': {
    backgroundColor: '#a023cc',  // Change background color for screens with max-width 1024px
  },
})
