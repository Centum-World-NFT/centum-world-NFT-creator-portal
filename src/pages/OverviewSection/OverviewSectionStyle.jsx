import { Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const OverViewWrapper = styled("div")({
  padding: "40px",
});

export const OverviewContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  padding: "10px",
});

export const MainCard = styled(Card)({
  width: "max-content",
  padding: "20px 10px 20px 10px",
  display: "flex",
  height: "100px",
  width: "20%",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",

  ":hover": {
    transform: "translateY(-5px)",
    transition: "all 200ms ease-in-out",
  },
});

export const CardHeader = styled(Typography)({
  textTransform: "uppercase",
  fontSize: ".9rem",
  opacity: "0.5",
  fontWeight: "600",
});

export const ViewsCount = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "900",
});

export const CardSubtitle = styled(Typography)({
  fontSize: ".7rem",
  opacity: ".5",
  fontWeight: "600",
});

export const CardWrapper = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});

export const CardIconContainer = styled("div")(({ background }) => ({
  borderRadius: "50px",
  backgroundColor: background,
  height: "max-content",
  width: "max-content",
  padding: "10px",
  color: "#fff",
}));
