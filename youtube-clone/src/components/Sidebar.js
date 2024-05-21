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
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SchoolIcon from "@mui/icons-material/School";
import MicIcon from "@mui/icons-material/Mic";

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
        <SidebarDivider />
        <SidebarMenuItem>
          <TrendingUpIcon />
          Trending
        </SidebarMenuItem>
        <SidebarMenuItem>
          <ShoppingCartIcon />
          Shopping
        </SidebarMenuItem>
        <SidebarMenuItem>
          <MusicNoteIcon />
          Music
        </SidebarMenuItem>
        <SidebarMenuItem>
          <MovieIcon />
          Movies
        </SidebarMenuItem>
        <SidebarMenuItem>
          <LiveTvIcon />
          Live
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SportsEsportsIcon />
          Gaming
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SportsSoccerIcon />
          Sports
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SchoolIcon />
          Learning
        </SidebarMenuItem>
        <SidebarMenuItem>
          <MicIcon />
          Podcasts
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
