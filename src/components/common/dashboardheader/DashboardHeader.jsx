import { Typography } from "@mui/material";
import { HeaderDiv, LogoContent, LogoDiv, MenuDiv } from "./DashboardStyle";
import CentumLogo from "@/assets/png/centum-logo.png";
import { MenuIcon } from "../../../utils/icons";
import DrawerSidebar from "../drawer/DrawerSidebar";

const DashboardHeader = () => {
  return (
    <>
      <HeaderDiv>
        <LogoDiv>
          <img src={CentumLogo} alt="" height={70} width={60} />
          <LogoContent>
            <Typography style={{ color: "#fff", fontFamily:"sans-serif"}}>Creator Dashboard</Typography>
            <Typography style={{color:"#838891", fontSize:".8rem",fontWeight:"400", fontFamily:"sans-serif"}}>Create Content Here</Typography>
          </LogoContent>
        </LogoDiv>
        <DrawerSidebar/>
      </HeaderDiv>
    </>
  );
};

export default DashboardHeader;
