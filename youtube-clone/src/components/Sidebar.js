// src/components/Sidebar.js
import React from "react";
import { SidebarContainer } from "../styles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <p>Home</p>
      <p>Trending</p>
      <p>Subscriptions</p>
    </SidebarContainer>
  );
};

export default Sidebar;
