import styled from "styled-components";

const SIZE = {
  small: 16,
  medium: 20,
  large: 24,
};

const Input = styled.input`
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0.1);
  padding: ${({ size }) => SIZE[size] ?? SIZE["small"]}px;
  border-radius: ${({ $round }) => ($round ? `9999px` : `3px`)};

  &:focus {
    border-color: ${({ $error }) => ($error ? `red` : `yellowgreen`)};
  }
`;

export default Input;
