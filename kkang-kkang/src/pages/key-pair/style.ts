import styled from "styled-components";

interface outputProps {
  length: number;
  height: number;
}

export const KeyPairContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 1em;
  overflow-x: hidden;
  overflow-y: hidden;
  justify-content: center;
  margin-left: 3em;
`;

export const Button = styled.button`
  font-size: 24px;
  color: #000;
`;

export const privateKey = styled.div`
  font-size: 24px;
  .private {
    margin-left: 1em;
  }
`;

export const ValueOutput = styled.textarea<outputProps>`
  width: 51rem;
  height: ${(props) => props.height}.5em;
  text-align: center;
  font-size: 24px;
  color: #000;
  resize: none;
`;
