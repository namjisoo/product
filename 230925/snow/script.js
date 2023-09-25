/**
 * wrapper에다가 snow를 추가해서 animation
 */

const wrapper = document.querySelector('.wrapper')
console.log(wrapper)

const randomNumber =  (min, max) => {
    return Math.floor(Math.random() * (max - min +1) + min)
}

for(let i = 0; i < 100; i++ ){
    const snow = document.createElement('span')
    const size = randomNumber(3, 10)
    snow.classList.add('snow')
    snow.style.left =`${randomNumber(0, 100)}%`
    snow.style.animationDuration = `${randomNumber(10, 30)}s`
    snow.style.animationDelay= `${randomNumber(0, 50)}s`
    snow.style.filter = `blur(${randomNumber(1, 5)}px)`
    snow.style.width =  `${size}px`
    snow.style.height =  `${size}px`
    wrapper.append(snow)
}