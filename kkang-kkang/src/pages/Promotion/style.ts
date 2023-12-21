import styled from "styled-components";

export const Promotion = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
`;

export const video = styled.video`
  width: max-content;
  height: max-content;
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
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  margin-top: 1em;

  a {
    font-size: 32px;
    display: block;
  }

  a:hover {
    color: gray;
  }
`;

export const PromotionTitle = styled.h1`
  font-size: 140px;
  color: #fff;
  opacity: 100%;
  text-align: center;

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
  font-size: 58px;
  color: #fff;
  opacity: 100%;
  text-align: center;

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

export const A = styled.div`
  width: 10em;
  font-size: 30px;
  background-color: #fff;
  text-align: center;
  border-radius: 1em;
  cursor: pointer;
  a {
    color: #000;
    font-weight: 600;
  }
`;

export const Adesc = styled.div`
  margin-top: 0.5em;
  text-align: center;
  margin-bottom: 3em;
  a {
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
`;
