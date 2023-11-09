import { Wrapper } from "./CreaterDashboardStyle";
import OverviewSection from "../OverviewSection/OverviewSection";
import { Outlet } from "react-router";
import CreatorSidebar from "../../components/common/sidebar/CreatorSidebar";
import { Box } from "@mui/material";

const CreaterDashboard = () => {
  return (
    <Wrapper>
      <Box>
        <CreatorSidebar />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Wrapper>
  );
};

export default CreaterDashboard;
