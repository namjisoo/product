// String 객체 생성
let str = "String"; // string wrapper class
let strObj = new String("String"); // string object
console.log(str);
console.log(strObj);
console.log(str == strObj);
console.log(str === strObj);

document.write(`<h3>charAt() 함수</h3>`);
// 1. charAt() 함수
// String 에서 전달받은 인덱스에 위치한 문자나 문자 코드를 반환한다.
const str1 = "Jacascript";
document.write(`0번째 인덱스 : ${str1.charAt(0)}<br>`);
document.write(`5번째 인덱스 : ${str1.charAt(5)}<br>`);

document.write(`<hr>`);
document.write(`<h3>charCodeAt() 함수</h3>`);
// 2.charCodeAt() 함수
// String 에서 전달받은 인덱스에 위치한 문자를 유니코드값으로 반환한다.
document.write(`0번째 인덱스의 유니코드 값 : ${str1.charCodeAt(0)}<br>`);

document.write(`<hr>`);
document.write(`<h3>indexOf() 함수</h3>`);
// 3.indexOf() 함수
// String 에서 특정 문자나 문자열이 처음으로 등장하는 위치(인덱스)를 반환한다.
const str2 = "abcDEFabc";
document.write(`abc가 시작되는 인덱스 : ${str2.indexOf("abc")}<br>`);
// 문자열을 비교할 때 문자의 대소문자를 구분한다.
document.write(`abcd가 시작되는 인덱스 : ${str2.indexOf("abcd")}<br>`);
document.write(
  `인덱스 3부터 abc가 시작되는 인덱스 : ${str2.indexOf("abc", 3)}<br>`
);

document.write(`<hr>`);
document.write(`<h3>lastIndexOf() 함수</h3>`);
// 4.lastIndexOf() 함수
// String 에서 특정 문자나 문자열이 마지막으로 등장하는 위치(인덱스)를 반환한다.
document.write(
  `abc가 마지막으로 시작되는 인덱스 : ${str2.lastIndexOf("abc")}<br>`
);

document.write(`<hr>`);
document.write(`<h3>concat() 함수</h3>`);
// 5. concat() 함수
// String에 전달받은 문자열을 결합한 새로운 문자열을 반환한다.
const str3 = "Javascript";
document.write(`concat으로 문자열 결합 : ${str3.concat(" is Awesome!!")}<br>`);
document.write(
  `concat으로 문자열 결합 : ${str3.concat(
    " is Awesome!!",
    " and useful!!"
  )}<br>`
);

document.write(`<hr>`);
document.write(`<h3>trim() 함수</h3>`);
// 6. trim() 함수
// String의 양 끝에 존재하는 모든 공백과 줄 바꿈 문자를 제거한 새로운 문자열을 반환한다.
const str4 = "         J a v a s c r i p t        ";
document.write(`trim으로 공백 제거 : ${str4.trim()}<br>`);

document.write(`<hr>`);
document.write(`<h3>replace() 함수</h3>`);
// 7. replace() 함수
// String에서 인수로 전달받은 정규 표현식을 이용하여 string의 대체 작업을 수행한다.
const str5 = "Javascript is Awesome!";
document.write(`is 를 공백으로 대체 : ${str5.replace("is", "")}<br>`);
document.write(`s를 *으로 대체 : ${str5.replace(/s/gi, "*")}<br>`);

// ** 정규표현식 **
// 문자열에서 특정한 규칙을 갖는 문자열의 집합을 찾아내기 위한 검색 패턴이다.
// 문법 : /검색패턴/플래그
// 플래그 :
// i - 검색 패턴을 비교할 때 대소문자를 구분하지 않도록 설정
// g - 검색 패턴을 비교할 때 일치하는 모든 부분을 선택하도록 설정
// m - 검색 패턴을 비교할 때 여러줄의 입력 문자열을 그대로 여러줄로 비교하도록 설정
// y - 대상 문자열의 현재 위치부터 비교를 시작하도록 설정

// 특수문자(검색패턴으로 들어갈 수 있는)
// 단순한 패턴을 검색하고자 할 때는 찾고자하는 문자열을 직접 나열하면 된다.
// 숫자만을 검색하거나, 띄어쓰기, 특수문자 등을 검색하려면 검색패턴으로 특정한 특수문자를 사용해야 한다.
// \ : 역슬래시 다음에 일반 문자가 나오면 이스케이프 문자로 해석하고,        특수문자가 나오면 일반 문자로 해석
// \d : 숫자를 검색. == /[0-9]/
// \D : 숫자가 아닌 문자를 검색 == /[^0-9]/
// \w : 언더바(_)를 포함한 영문자 및 숫자를 검색 == /[A-Za-z0-9_]/
// \W : 언더바(_), 영문자, 숫자가 아닌 문자를 검색 == /[^A-Za-z0-9_]/
// \s : 띄어쓰기, 탭, 줄바꿈 문자 등의 공백 문자를 검색
// \S : 띄어쓰기, 탭, 줄바꿈 문자 등의 공백 문자가 아닌 문자를 검색
// \b : 단어의 맨 앞이나 맨 뒤가 패턴과 일치하는지를 검색

// 전화번호 검색패턴 예 : 000-0000-0000 => /[0-9]{3}-[0-9]{4}-[0-9]{4}/
// 이메일 검색패턴 예 : 000@000.000 => /[0-9a-zA-Z]+@[a-z]+\.[a-z]{3,}/

let reg = /[0-9a-zA-Z]+@[a-z]+\.[a-z\.]{3,}/;
const email = "jisoo39@kakao.com";
console.log(reg.test(email));

document.write(`<hr>`);
document.write(`<h3>search() 함수</h3>`);
// 8. search() 함수
// String에서 인수로 전달받은 정규 표현식 또는 문자(열)을 이용하여 string의 검색 작업을 수행한다.
document.write(`is 검색 : ${str5.search("is")}<br>`);
document.write(`s 검색 : ${str5.search("s")}<br>`);
document.write(`s 검색 : ${str5.search(/s/)}<br>`);

document.write(`<hr>`);
document.write(`<h3>match() 함수</h3>`);
// 9. match() 함수
// 정규식 혹은 문자(열)로 검색하여 일치하는 결과를 배열로 리턴한다.
// 발견되지 않으면 null을 리턴한다.
document.write(`match로 Java 확인: ${str5.match("Java")}<br>`);
const strTest = str5.match("Java");

document.write(`<hr>`);
document.write(`<h3>substring() 함수</h3>`);
// 10. substring() 함수
// String에서 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 문자열을 추출한 새로운 문자열을 반환한다.
// str2 = abcDEFabc
document.write(`substring(2, 6): ${str2.substring(2, 6)}<br>`);
document.write(`substring(2): ${str2.substring(2)}<br>`);

document.write(`<hr>`);
document.write(`<h3>substr() 함수</h3>`);
// 11. substr() 함수
// String에서 전달받은 시작 인덱스부터 길이만큼의 문자열을 추출한 새로운 문자열을 반환한다.
document.write(`substr(2, 6): ${str2.substr(2, 6)}<br>`);
document.write(`substr(2): ${str2.substr(2)}<br>`);

document.write(`<hr>`);
document.write(`<h3>slice() 함수</h3>`);
// 12. slice() 함수
// ['javascript', 'java', 'html', 'css'].slice(1,3) == ['java', 'html'];
// String에서 전달받은 시작 인덱스부터 종료 인덱스 바로 앞까지의 문자열을 추출한 새 문자열을 반환한다.
document.write(`slice(2, 6): ${str2.slice(2, 6)}<br>`);
// substring은 음수가 전달되면 0으로 변경해서 함수를 실행한다.
document.write(`slice(-4, -2): ${str2.slice(-4, -2)}<br>`);
document.write(`substring(-4, 2): ${str2.substring(-4, 2)}<br>`);
// substring은 시작값이 종료값보다 클 경우 서로 교환해서 함수를 실행한다.
document.write(`slice(4, 2): ${str2.slice(4, 2)}<br>`);
document.write(`substring(4, 2): ${str2.substring(4, 2)}<br>`);

document.write(`<hr>`);
document.write(`<h3>split() 함수</h3>`);
// 13. split() 함수
// String을 구분자를 기준으로 나눈 후, 나뉜 문자열을 배열로 반환한다.
const str6 = "사과/바나나/파인애플/딸기/포도";
document.write(`split 사용: ${str6.split("/")}<br>`);
console.log(str6.split("/"));
