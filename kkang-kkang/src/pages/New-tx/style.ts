import styled from "styled-components";

export const NewTx = styled.div`
  margin-top: 5em;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Balance = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 1em;
`;

export const InputDesc = styled.div`
  width: 360px;
  font-size: 32px;
  margin-top: 1em;
`;

export const Input = styled.input`
  color: #fff;
  font-size: 24px;
  width: fit-content;
  min-width: 15em;
  height: 1.5em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  line-height: 1.5em;
  background: none;
  border: none;
  border-bottom: 1px solid gray;

  ::placeholder {
    color: #fff;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const danwe = styled.div`
  position: absolute;
  padding-right: 7em;
  line-height: 1.5em;
  left: 65.5em;
  top: 32.1em;
`;

export const Title = styled.div`
  font-size: 48px;
  margin-top: 1em;
  text-align: center;
  font-weight: 800;
`;

export const Button = styled.input`
  width: 5em;
  font-size: 24px;
  height: 1.5em;
  border-radius: 1em;
  background-color: #fff;
  border: none;
  color: #000;
  margin-top: 1em;
`;

export const Hash = styled.div`
  a {
    display: block;
  }
  width: 100vw;
  text-align: center;
  margin-top: 3em;
`;
