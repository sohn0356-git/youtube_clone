// src/components/VideoGrid.js
import React from "react";
import { VideoGridContainer } from "../styles";
import VideoCard from "./VideoCard";

const VideoGrid = ({ videos }) => {
  return (
    <VideoGridContainer>
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          description={video.description}
          thumbnail={video.thumbnail}
        />
      ))}
    </VideoGridContainer>
  );
};

export default VideoGrid;
