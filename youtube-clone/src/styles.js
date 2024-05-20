// src/styles.js
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  background-color: #ff0000;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const SearchBar = styled.input`
  padding: 10px;
  width: 50%;
  border: none;
  border-radius: 4px;
`;

export const SidebarContainer = styled.div`
  width: 240px;
  background-color: white;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 60px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const VideoGridContainer = styled.div`
  margin-left: 240px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const VideoCardContainer = styled.div`
  width: 300px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

export const VideoThumbnail = styled.img`
  width: 100%;
`;

export const VideoInfo = styled.div`
  padding: 10px;
`;

export const VideoTitle = styled.h3`
  margin: 0;
  font-size: 16px;
`;

export const VideoDescription = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #555;
`;
