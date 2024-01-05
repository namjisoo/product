import styled from "styled-components";
import Button from "./Button";
import kakaoImg from "./kakao.svg";

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledButton = styled(Button)`
  border-radius: 10px;
  width: 100%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.8);

  ${Icon} {
    margin-right: 8px;
  }
`;

function KakaoButton() {
  return (
    <StyledButton>
      <Icon src={kakaoImg} alt="카카오 아이콘"></Icon>
      카카오로그인
    </StyledButton>
  );
}

export default KakaoButton;
