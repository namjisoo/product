import React, { createContext, useState } from "react";

// Context가 제공할 기본값을 받는다.
const LocaleContext = createContext();

// children => 해당 컴포넌트를 호출하는 곳에서 안쪽 내용이 된다.
// ex) <button>닫기</button> 에서 "닫기"
function LocaleProvider({ defaultValue = "ko", children }) {
  const [locale, setLocale] = useState(defaultValue);
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
