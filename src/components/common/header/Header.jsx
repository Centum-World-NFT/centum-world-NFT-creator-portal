import {
  CompanyName,
  HeaderLeftContainer,
  HeaderRightContainer,
  HeaderWrapper,
  HomePageLink,
  LogoBox,
} from "./HeaderStyle";
import CentumWorldLogo from "@/assets/png/centum-logo.png";
import { Button } from "@mui/material";
import { useState } from "react";
import SignUp from "../../auth/Singup";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <HeaderWrapper>
        <HeaderLeftContainer>
          <HomePageLink href="/" underline="none">
            <LogoBox>
              <img src={CentumWorldLogo} alt="centum_world_logo" />
              <CompanyName>CENTUMO NFT’S</CompanyName>
            </LogoBox>
          </HomePageLink>
        </HeaderLeftContainer>
        <HeaderRightContainer>
          <Button variant="outlined" onClick={handleOpen}>
            <SignUp/>
          </Button>
        </HeaderRightContainer>
      </HeaderWrapper>
    </>
  );
};

export default Header;
