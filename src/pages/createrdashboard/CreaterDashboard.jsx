import { Wrapper, Container, SidebarContainer, MainHeader } from "./CreaterDashboardStyle";
import { Outlet } from "react-router";
import CreatorSidebar from "../../components/common/sidebar/CreatorSidebar";
import withAuth from "../../hoc/withAuth";
import DashboardHeader from "../../components/common/dashboardheader/DashboardHeader";

const CreaterDashboard = () => {
  return (
    <Wrapper>
      <SidebarContainer>
        <CreatorSidebar />
      </SidebarContainer>
      <Container>
        <MainHeader>
            <DashboardHeader/>
        </MainHeader>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default withAuth(CreaterDashboard);
