import { Wrapper, Container, SidebarContainer } from "./CreaterDashboardStyle";
import { Outlet } from "react-router";
import CreatorSidebar from "../../components/common/sidebar/CreatorSidebar";
import withAuth from "../../hoc/withAuth";

const CreaterDashboard = () => {
  return (
    <Wrapper>
      <SidebarContainer>
        <CreatorSidebar />
      </SidebarContainer>
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default withAuth(CreaterDashboard);
