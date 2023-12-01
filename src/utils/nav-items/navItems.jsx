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
    path: "/",
    icon: <BarChartRoundedIcon />,
  },
  {
    item: "Your Videos",
    path: "/yourVideos",
    icon: <PersonalVideoRoundedIcon />,
  },
  {
    item: "Subscribers",
    path: "/subscribers",
    icon: <PeopleAltRoundedIcon />,
  },
  {
    item: "Account",
    path: "/account",
    icon: <Person2RoundedIcon />,
  },
  {
    item: "Upload Content",
    path: "/uploadVideo",
    icon: <UploadRoundedIcon />,
  },
  {
    item: "Create Playlist",
    path: "/createplaylist",
    icon: <PlaylistAddCheckRoundedIcon />,
  },
  {
    item: "Logout",
    path: "/logout",
    icon: <MeetingRoomRoundedIcon />,
  },
];

export default navItems;
