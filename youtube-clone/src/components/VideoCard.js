// src/components/VideoCard.js
import React from "react";
import {
  VideoCardContainer,
  VideoThumbnail,
  VideoInfo,
  VideoTitle,
  VideoDescription,
} from "../styles";

const VideoCard = ({ title, description, thumbnail }) => {
  return (
    <VideoCardContainer>
      <VideoThumbnail src={thumbnail} alt={title} />
      <VideoInfo>
        <VideoTitle>{title}</VideoTitle>
        <VideoDescription>{description}</VideoDescription>
      </VideoInfo>
    </VideoCardContainer>
  );
};

export default VideoCard;
