//app.js
console.log('app');

// 문서안에서 title이라는 아이디를 가진 요소를 찾아서 text라는 변수에 담은 상황
const size = 60
const text = document.getElementById('title');
console.log(text);
text.style.color = 'red';
text.style.fontSize = size + 'px';

// text.style.fontSize = `${size}px`; 템플릿 리터럴방식
//텍스트 내용을 바꾸는 방법
text.textContent = '바뀐 내용입니다';
text.innerText = '이렇게도 바꿀 수 있습니다'
text.innerHTML = '<span>이렇게 태그를 넣어서 바꿀 수도 있습니다</span>'

//graph라는 아이디를  통해서 element요소를 가져옴
const barGraph = document.getElementById('graph');

//graph요소에서 data-value 값을 가져옴
const graphValue = barGraph.dataset.value;

//그래프 요소의 폭을 grapgValue 값으로 넣음
barGraph.style.width = graphValue + '%';

//그래프 요소의 텍스트를 graphValue 값으로 넣음
barGraph.innerText = graphValue;

//graph요소의 컬러, 폰트 사이즈 조정
barGraph.style.color = 'white';
barGraph.style.fontSize = '32px';
console.log(barGraph, graphValue);