import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { PageTitle, TableCellName, TableHeader, VideoWrapper } from "./VideoSectionStyle";
import VideoTable from "../../components/templates/videotable/VideoTable";

const VideoSection = () => {
  return (
    <VideoWrapper>
      <PageTitle>Your Playlist</PageTitle>
      <VideoTable />
    </VideoWrapper>
  );
};

export default VideoSection;
