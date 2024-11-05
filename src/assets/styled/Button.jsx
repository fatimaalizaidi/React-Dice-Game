import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: white;
    color: black;
    transition: all 0.3s ease-in;
    border: solid 1px black;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border:solid 1px black;
  &:hover {
    background-color: black;
    color: white;
    border: solid 1px black;
  }
`;
