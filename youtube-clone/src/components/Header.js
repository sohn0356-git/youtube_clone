// src/components/Header.js
import React from "react";
import {
  Header,
  Logo,
  SearchContainer,
  SearchInput,
  SearchButton,
  ButtonContainer,
  IconButton,
} from "../styles";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const HeaderComponent = () => {
  return (
    <Header>
      <Logo>
        <img src="/youtube-logo.png" alt="YouTube Logo" />
        YouTube Clone
      </Logo>
      <SearchContainer>
        <SearchInput placeholder="Search" />
        <SearchButton>
          <SearchIcon style={{ fontSize: "24px" }} />
        </SearchButton>
      </SearchContainer>
      <ButtonContainer>
        <IconButton>
          <VideoCallIcon style={{ fontSize: "24px" }} />
        </IconButton>
        <IconButton>
          <NotificationsIcon style={{ fontSize: "24px" }} />
        </IconButton>
        <IconButton>
          <AccountCircleIcon style={{ fontSize: "24px" }} />
        </IconButton>
      </ButtonContainer>
    </Header>
  );
};

export default HeaderComponent;
