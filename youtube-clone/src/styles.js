// src/styles.js
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  background-color: #ff0000;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: bold;

  img {
    height: 50px; /* 로고 크기 증가 */
    margin-right: 10px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  max-width: 500px; /* 최대 너비 설정 */
  height: 40px; /* 검색바 높이 설정 */
  margin: 0 auto; /* 중앙에 배치 */
  flex-grow: 1;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0 10px; /* 패딩 조정 */
  height: 100%; /* 검색 입력 높이 설정 */
  border: none;
  border-radius: 20px 0 0 20px; /* 왼쪽 모서리 깎기 */
  font-size: 16px;
`;

export const SearchButton = styled.button`
  height: 100%; /* 버튼 높이 설정 */
  width: 40px; /* 버튼 너비 설정 */
  border: none;
  background-color: white;
  border-radius: 0 20px 20px 0; /* 오른쪽 모서리 깎기 */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; /* 오른쪽으로 밀기 */
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;
  margin-top: 60px;
`;

export const SidebarContainer = styled.div`
  width: 240px;
  background-color: white;
  height: calc(100vh - 60px); /* 헤더 높이를 뺀 전체 높이 */
  position: fixed;
  top: 60px;
  left: 0;
  padding: 20px 0; /* 위아래 패딩 추가 */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 900;
  overflow-y: auto; /* 스크롤 기능 추가 */

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    width: 0;
    background: transparent; /* 스크롤바 배경색을 투명하게 */
  }
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* 메뉴 사이 간격 추가 */
`;

export const SidebarMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  font-size: 18px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  svg {
    margin-right: 15px; /* 아이콘과 글자 사이 간격 추가 */
  }
`;

export const SidebarDivider = styled.div`
  height: 1px;
  background-color: #ddd;
  margin: 10px 0;
`;

export const VideoGridContainer = styled.div`
  flex: 1;
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
