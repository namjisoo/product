import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border-color: #7760b4;
  }

  &::placeholder {
    color: #c4c5cd;
  }
`;

export default Input;
