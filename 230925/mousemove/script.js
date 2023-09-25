console.log('runing...')
const dot = document.querySelector('.dot')
console.log(dot)

//dot이 마우스위치를 따라다니는 설정
window.addEventListener('mousemove', (event) => {
    // console.log(`x 좌표 ${event.clientX}`)
    // console.log(`y 좌표 ${event.clientY}`)
    // console.log(`dot의 width: ${dot.clientWidth / 2}`)
    // console.log(`dot의 height: ${dot.clientHeight / 2}`)
    requestAnimationFrame(() => {
        mouseMove(event)
    })
})

const mouseMove = (event) => {
    dot.style.left =  `${event.clientX - (dot.clientWidth / 2)}px`
    dot.style.top = `${event.clientY - (dot.clientHeight / 2)}px`
}

window.addEventListener('click', () => {
    const bubble = document.createElement('span')
    bubble.classList.add('bubble')
    dot.append(bubble)
    
    setTimeout(() => {
        bubble.remove()
    }, 1000)
})