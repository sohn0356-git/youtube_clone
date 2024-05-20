// src/App.js
import React from "react";
import { GlobalStyle, AppContainer, MainContent } from "./styles";
import HeaderComponent from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoGrid from "./components/VideoGrid";

const App = () => {
  const videos = [
    {
      title: "Video 1",
      description: "This is a description of Video 1",
      thumbnail: "https://via.placeholder.com/300",
    },
    {
      title: "Video 2",
      description: "This is a description of Video 2",
      thumbnail: "https://via.placeholder.com/300",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <HeaderComponent />
        <MainContent>
          <Sidebar />
          <VideoGrid videos={videos} />
        </MainContent>
      </AppContainer>
    </>
  );
};

export default App;
