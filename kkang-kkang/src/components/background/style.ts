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
  background-image: url("https://media.discordapp.net/attachments/1015269912190652416/1174524142716977192/3f2d2d4e6ade5be2.gif?ex=659f46d9&is=658cd1d9&hm=3d481ed3807bf9bfe455fed7b965249aee3ecf00b395fddeae9f51eef1662957&");
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
