// src/components/Sidebar.js
import React from "react";
import {
  SidebarContainer,
  SidebarMenu,
  SidebarMenuItem,
  SidebarDivider,
} from "../styles";
import HomeIcon from "@mui/icons-material/Home";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarMenu>
        <SidebarMenuItem>
          <HomeIcon />
          Home
        </SidebarMenuItem>
        <SidebarMenuItem>
          <AttachFileIcon />
          Shorts
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SubscriptionsIcon />
          Subscriptions
        </SidebarMenuItem>
        <SidebarDivider />
        <SidebarMenuItem>
          <VideoLibraryIcon />
          My Account
        </SidebarMenuItem>
        <SidebarMenuItem>
          <HistoryIcon />
          History
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
