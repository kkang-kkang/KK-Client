import styled from "styled-components";

export const Promotion = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
`;

export const video = styled.video`
  width: 100vw;
  height: auto;
  z-index: -1;
  position: fixed;
  top: 0px;
  left: 0px;
`;

export const PromotionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PromotionTitle = styled.h1`
  font-size: 140px;
  color: #fff;
  opacity: 100%;

  animation-name: titleAni;

  @keyframes titleAni {
    0% {
      margin-bottom: 5em;
      opacity: 0%;
    }
    100% {
      margin-bottom: 0em;
      opacity: 100%;
    }
  }
`;

export const PromotionDesc = styled.p`
  font-size: 70px;
  color: #fff;
  opacity: 100%;

  animation-name: titleAni;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;

  @keyframes titleAni {
    0% {
      margin-bottom: 5em;
      opacity: 0%;
    }
    70% {
      opacity: 0%;
    }

    100% {
      margin-bottom: 0em;
      opacity: 100%;
    }
  }
`;
