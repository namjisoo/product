const title = document.getElementById('title');
console.log(title);

const button = document.getElementById('btn');
console.log(button);

const container = document.querySelector('.container');
console.log(container);

button.addEventListener('click', () => {
    container.classList.add('bg');
})

//제목을 클릭했을 대, alert창에 클릭'이라는 문구가 출력
//addEventListener('이벤트이름', 실행할 함수)
title.addEventListener('click', () => {
    // alert('클릭')
    if(title.style.color === 'red'){
        title.style.color = 'black'
    }
    else{
        title.style.color = 'red'
    }
})