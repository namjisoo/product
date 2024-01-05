import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  background-color: #6500c3;
  border: none;
  color: #fff;
  padding: 16px;
  font-size: 18px;
  border-radius: ${({ $round }) => ($round ? `9999px` : `10px`)};
  margin-bottom: 10px;
  &:hover,
  &:active {
    background-color: #7760b4;
  }
`;

export default Button;
