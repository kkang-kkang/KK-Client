import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Flex = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 48px;
  margin-top: 1em;
  text-align: center;
  font-weight: 800;
`;

export const container = styled.div`
  height: 60vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 40em;
  font-size: 24px;
  text-indent: 1em;
  height: 2em;
  background: none;
  border: none;
  border-bottom: 2px solid #fff;
  margin-bottom: 1em;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  width: 7em;
  text-align: center;
  height: 1.5em;
  background-color: #fff;
  border: none;
  font-size: 24px;
  color: #000;
  margin-top: 2em;
`;

export const Header = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
