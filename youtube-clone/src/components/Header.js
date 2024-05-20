// src/components/Header.js
import React from "react";
import { Header, Logo, SearchBar } from "../styles";

const HeaderComponent = () => {
  return (
    <Header>
      <Logo>YouTube Clone</Logo>
      <SearchBar placeholder="Search" />
    </Header>
  );
};

export default HeaderComponent;
