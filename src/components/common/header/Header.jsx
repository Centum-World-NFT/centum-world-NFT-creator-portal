import {
  CompanyName,
  HeaderLeftContainer,
  HeaderRightContainer,
  HeaderWrapper,
  HomePageLink,
  LogoBox,
  VerticalLine
} from "./HeaderStyle";
import CentumWorldLogo from "@/assets/png/centum-logo.png";
import { Button } from "@mui/material";
import { useState } from "react";
import Singup from "../../auth/Singup";
import { LoginIcon } from "../../../utils/icons";

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
              <VerticalLine/>
              <CompanyName>CENTUMO NFT’S</CompanyName>
            </LogoBox>
          </HomePageLink>
        </HeaderLeftContainer>
        <HeaderRightContainer>
          <Button variant="outlined" onClick={handleOpen}>
            Creator Sign in
          </Button>
          <Singup open={open} handleClose={handleClose}/>
        </HeaderRightContainer>
      </HeaderWrapper>
    </>
  );
};

export default Header;
