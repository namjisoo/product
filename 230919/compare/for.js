//for(초기화, 조건,증감) 무언가를 반복해야할 때
for(let i = 1; i <= 9; i++){
    console.log(`%c${i}단`, `background-color:yellow; color:white; padding: 2px 8px; font-size:18px; font-weight: bold;`);
    for(let j = 1; j <=9; j++){
        console.log(`${i} x ${j} = ${i * j}`)
    }
}
//$앞에 %c를 붙이면 콘솔에 스타일을 줄 수 있다.

let star = '';
for(let i = 0; i < 5; i++){
    star += '*'
    console.log(star)
}
