import styled from "styled-components";
import Link from "./Link";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import KakaoButton from "./KakaoButton";

const Logo = styled.h1`
  font-family: Pretendard;
  text-align: center;
  width: 100%;
  font-size: 40px;
  background: linear-gradient(135deg, aqua, purple);
  color: transparent;
  background-clip: text;
`;

const Description = styled.div`
  color: #848187;
  text-align: center;
`;

const Container = styled.div`
  width: 400px;
  margin: 40px auto;
`;

function Login() {
  return (
    <Container>
      <Logo>DW 온라인스쿨</Logo>
      <Description>
        회원이 아니신가요? <Link href="#">회원가입 하기</Link>
      </Description>
      <form>
        <Label htmlFor="email">이메일</Label>
        <Input type="email" id="email" placeholder="styled@DW.kr" />
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" placeholder="비밀번호" />
        <Button type="submit">로그인하기</Button>
      </form>
      <KakaoButton></KakaoButton>
    </Container>
  );
}

export default Login;
