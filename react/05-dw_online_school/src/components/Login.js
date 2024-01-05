import styled from "styled-components";
import Link from "./Link";
import Label from "./Label";
import Input from "./Input";
import Button from "./LoginButton";
import KakaoButton from "./KakaoButton";
import { useState } from "react";
import { getMember } from "../api/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useMember, useSetMember } from "../contexts/MemberContext";

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
  // const member = useMember();
  // const setMember = useSetMember();

  const { state } = useLocation();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id: "",
    password: "",
  });

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
      // 기존의 값은 가지고 있으면서 변경된 값만 바꿔준다.
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { memberObj, message } = await getMember(values);
    if (message === undefined) {
      localStorage.setItem("member", JSON.stringify(memberObj));
      // JSON.stringify => 데이터를 문자열로 바꿔서 저장

      // localStorage.getItem("key")
      // localStorage.removeItem("key")
      // alert("로그인에 성공했습니다.");
      // setMember(memberObj);
      navigate(state ? state : "/");
    } else {
      alert(message);
    }
  };
  return (
    <Container>
      <Logo>DW 온라인스쿨</Logo>
      <Description>
        회원이 아니신가요? <Link href="#">회원가입 하기</Link>
      </Description>
      <form onSubmit={handleLogin}>
        <Label htmlFor="email">이메일</Label>
        <Input
          type="email"
          name="id"
          id="email"
          placeholder="styled@DW.kr"
          onChange={handleValueChange}
        />
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="비밀번호"
          onChange={handleValueChange}
        />
        <Button type="submit">로그인하기</Button>
      </form>
      <KakaoButton></KakaoButton>
    </Container>
  );
}

export default Login;
