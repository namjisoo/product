import styled from "styled-components";

const Input = styled.input`
  height: 50px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 0 20px;
  &:focus {
    outline: none;
    border-color: #7760b4;
  }
`;

export default Input;
