import { Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const OverViewWrapper = styled("div")({
  padding: "15px",
  display:"flex",
  flexDirection:"column"
});

export const OverviewContainer = styled("div")({
  display: "flex",
  justifyContent: "space-arround",
  flexWrap: "wrap",
  padding: "10px",
  gap:'20px',
  "@media (max-width: 768px)": {
    flexWrap: "wrap", // Display cards in a column
    justifyContent: "center", // Center the cards
    "& > *": {
      flexBasis: "45%", // Two cards in a row (48% width each)
      marginBottom: "10px",
      marginRight:"5px" // Add some margin between the cards
    },
  },
  "@media (max-width: 640px)": {
    flexWrap: "wrap", // Display cards in a column
    justifyContent: "center", // Center the cards
    "& > *": {
      flexBasis: "95%", // A single card in a row (90% width)
      marginBottom: "10px", // Add some margin between the cards
    },
  },
});

export const MainCard = styled(Card)({
  width: "max-content",
  padding: "20px 10px 20px 10px",
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
  fontSize: "1.5rem",
  fontWeight: "700",
});

export const CardSubtitle = styled(Typography)({
  fontSize: ".9rem",
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
  height: "30px",
  width: "30px",
  padding: "10px",
  color: "#fff",
}));

export const CharContainer = styled("div")({
  width:"100%"
})

export const CustomCard = styled('div')(({ theme }) => ({
  boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
  position: 'relative',
  padding: theme.spacing(4), // Adjust padding as needed
  borderRadius: theme.spacing(2), // Adjust border radius as needed
  width: '100%',
  maxWidth: 250, // Set your desired max width
  height: 70,
  background: 'linear-gradient(to right, #3b82f6, #ec4899)', // Blue to pink gradient
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 350, // Adjust width for smaller screens
    height: 100, // Adjust height for smaller screens
  },
}));

export const CustomImage = styled('img')({
  position: 'absolute',
  right: -1,
  maxWidth: '100%',
  maxHeight: '100%',
});

export const CustomHeading = styled('h2')(({ theme }) => ({
  fontSize: '20px', // Adjust font size as needed
  fontWeight: 600,
  color: '#fff',
  marginBottom: theme.spacing(2), // Adjust margin as needed
}));

export const CustomUserCount = styled('div')(({ theme }) => ({
  fontSize: '22px', // Adjust font size as needed
  fontWeight: 'bold',
  color: '#fff',
}))