import { Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  CustomButton,
  CustomText,
  HeaderSubtitle,
  NavItem,
  NavItems,
  SidebarContainer,
  SidebarHeader,
  SidebarNavItems,
  SidebarWrapper,
} from "./CreatorSidebarStyle";
import CentumLogo from "@/assets/png/centum-logo.png";
import navItems from "../../../utils/nav-items/navItems";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const CreatorSidebar = () => {
  const [clickedItem, setClickedItem] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setClickedItem(item);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <SidebarWrapper>
      <SidebarContainer>
        
        <SidebarHeader>
        <img src={CentumLogo} alt="" height={70} width={60} />
          <div style={{paddingTop:'12px',fontFamily:'Calibri',fontSize:'20px',fontWeight:600,color: 'rgba(33, 33, 33, 0.8)'}}>
          Creator Dashboard
          {/* <HeaderSubtitle>Create Content Here</HeaderSubtitle> */}
          </div>
        </SidebarHeader>
        {/* <Divider
          sx={{
            mt: "10px",
            color: "#a023cc",
            borderColor: "#a023cc",
            mb: "10px",
            opacity: "0.2",
          }}
        ></Divider> */}

        <SidebarNavItems>
          {navItems.map((item, index) => (
            <NavItems
              key={index}
              isClicked={clickedItem === item}
              onClick={() => handleItemClick(item)}
            >
              <Link
                to={item.path}
                style={{ color: "currentcolor", textDecoration: "none" }}
              >
                <NavItem>
                  <Typography sx={{ fontWeight: "600" }}>
                    {item.icon}
                  </Typography>
                  <Typography >
                    {item.item}
                  </Typography>
                </NavItem>
              </Link>
            </NavItems>
          ))}

          {/* Logout button */}
          {/* <NavItems>
            <Button
              sx={{fontWeight:"500",fontSize:"20px", gap:'10px', fontFamily:"Calibri",textTransform: 'none',}}
              variant="text"
              color="inherit"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </NavItems> */}
          <CustomButton onClick={handleLogout}>
            <LogoutIcon/>
            <CustomText>Logout</CustomText>
          </CustomButton>
        </SidebarNavItems>
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default CreatorSidebar;
