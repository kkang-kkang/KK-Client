import styled from "styled-components";

export const PromotionContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const H1Box = styled.div`
  font-size: 120px;
  width: 9em;
`;

export const H1 = styled.h1`
  text-align: center;
  background: rgb(255, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 141, 0, 1) 20%,
    rgba(255, 231, 0, 1) 40%,
    rgba(0, 147, 29, 1) 60%,
    rgba(0, 61, 255, 1) 80%,
    rgba(79, 0, 158, 1) 100%
  );
  color: transparent;
  -webkit-background-clip: text;
`;

export const prev = styled.div`
  font-size: 32px;
  cursor: pointer;
`;
