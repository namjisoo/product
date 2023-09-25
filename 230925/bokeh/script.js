const wrapper = document.getElementById('wrapper')
console.log(wrapper)

const randomNumber =  (min, max) => {
    return Math.floor(Math.random() * (max - min +1) + min)
}

for(let i = 0; i < 50; i++){
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = `${randomNumber(0,100)}%`
    circle.style.left = `${randomNumber(0,100)}%`
    circle.style.backgroundColor = `hsl(${randomNumber(0, 360)}, 50%, 50%)`
    circle.style.animationDelay = `${randomNumber(0,50)}s`
    circle.style.filter = `blur(${randomNumber(1, 5)}px)`
    circle.style.animationDuration = `${randomNumber(20,40)}s`
    wrapper.append(circle)
}