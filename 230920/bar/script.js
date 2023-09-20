const num = document.getElementById('number')
const inc = document.getElementById('inc')
const dec = document.getElementById('dec')
const bar = document.querySelector('.bar')
// console.log(bar)
// console.log(num)
// console.log(inc)
// console.log(dec)

//증감할 값이 들어있는 변수
let counter = 0;

inc.addEventListener('click', () => {
    if(counter < 100){
        counter+= 10;
        bar.style.width = `${counter}%`
        num.textContent = counter
    }
    // 1. 누적시키는 방법
    // counter += 1
    // 2. 증가연산자
    console.log(counter)
    // inc.style.transform = `rotate(${counter}deg)`
})

dec.addEventListener('click', () => {
    if(counter > 0){
        counter-= 10;
        num.textContent = counter   
    }
    bar.style.width = `${counter}%`
    console.log(counter)
    // dec.style.transform = `rotate(${counter}deg)`
})