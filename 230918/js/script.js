const userName = document.getElementById('username')
console.log(userName);
//prompt ('사용자에게 보여줄 메세지', '기본값')
let value = prompt('이름을 입력해주세요', '남지수');
userName.textContent = value;
let color = prompt('원하는 컬러를 입력해주세요', 'yellowgreen');
userName.style.color = color;
let fontSize = prompt('폰트사이즈를 입력해주세요');
userName.style.fontSize = fontSize;
// console.log(value);