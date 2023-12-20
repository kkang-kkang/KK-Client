import styled, { keyframes } from "styled-components";

interface SnowflakeProps {
  speed: number;
  size: number;
}

export const snowfall = keyframes`
  to {
    transform: translateY(-100vh);
  }
`;

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url("https://media1.tenor.com/m/epNMHGvRyHcAAAAd/gigachad-chad.gif");
  z-index: -1;
`;
export const Snowflake = styled.div<SnowflakeProps>`
  margin-top: 98vh;
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-image: url("https://pngimg.com/uploads/coin/coin_PNG36871.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  animation: ${snowfall} ${(props) => props.speed}s linear infinite;
`;
