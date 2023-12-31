import { useLocale, useSetLocale } from "../contexts/LocaleContext";
import "./LocaleSelect.css";

const LocaleSelect = ({ value, onChange }) => {
  // onChange에 setLocale이 담겨 있기 때문에 바로 못쓰고 handleChange로 다시 함수를 만들어 선언해야한다.

  const locale = useLocale();
  const setLocale = useSetLocale();
  const handleChange = (e) => setLocale(e.target.value);
  console.log("LocaleSelect 로딩");

  return (
    <select className="LocaleSelect" value={locale} onChange={handleChange}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
};
// context 훅을 사용하는 이유는 전역으로 언어를 바꿔줘야 하기 때문이다.

export default LocaleSelect;
