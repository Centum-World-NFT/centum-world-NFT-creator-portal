import { Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import {
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
        <img src={CentumLogo} alt="" height={70} width={60} />
        <SidebarHeader>
          Creator Dashboard
          <HeaderSubtitle>Create Content Here</HeaderSubtitle>
        </SidebarHeader>
        <Divider
          sx={{
            mt: "30px",
            color: "#fff",
            borderColor: "#fff",
            mb: "30px",
            opacity: "0.2",
          }}
        ></Divider>

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
                  <Typography sx={{ fontWeight: "600" }}>
                    {item.item}
                  </Typography>
                </NavItem>
              </Link>
            </NavItems>
          ))}

          {/* Logout button */}
          <NavItems>
            <Button
              variant="text"
              color="inherit"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </NavItems>
        </SidebarNavItems>
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default CreatorSidebar;
