// src/components/Sidebar.js
import React from "react";
import { SidebarContainer, SidebarMenu, SidebarMenuItem } from "../styles";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarMenu>
        <SidebarMenuItem>
          <HomeIcon />
          Home
        </SidebarMenuItem>
        <SidebarMenuItem>
          <VideoLibraryIcon />
          Shorts
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SubscriptionsIcon />
          Subscriptions
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
