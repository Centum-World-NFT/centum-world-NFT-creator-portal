import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import PersonalVideoRoundedIcon from "@mui/icons-material/PersonalVideoRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import UploadRoundedIcon from "@mui/icons-material/UploadRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';


const navItems = [
  {
    item: "Overview",
    path: "/creatorDashboard/overview",
    icon: <BarChartRoundedIcon />,
  },
  {
    item: "Your Videos",
    path: "/creatorDashboard/yourVideos",
    icon: <PersonalVideoRoundedIcon />,
  },
  {
    item: "Subscribers",
    path: "/creatorDashboard/subscribers",
    icon: <PeopleAltRoundedIcon />,
  },
  {
    item: "Account",
    path: "/creatorDashboard/account",
    icon: <Person2RoundedIcon />,
  },
  {
    item: "Upload Content",
    path: "/creatorDashboard/uploadVideo",
    icon: <UploadRoundedIcon />,
  },
  {
    item: "Create Playlist",
    path: "/creatorDashboard/createplaylist",
    icon: <PlaylistAddCheckRoundedIcon />,
  },
  // {
  //   item: "Logout",
  //   path: "/",
  //   icon: <MeetingRoomRoundedIcon />,
   
  // },
];

export default navItems;
