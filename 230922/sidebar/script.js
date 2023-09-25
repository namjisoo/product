const sidebar = document.querySelector('.sidebar')
const trigger = document.querySelector('.trigger')
const overlay = document.querySelector('.overlay')
console.log(sidebar)
console.log(trigger)
console.log(overlay)

trigger.addEventListener('click', () => {
    if(sidebar.classList.contains('active')){
        sidebar.classList.remove('active')
        trigger.textContent = '닫기'
    }else{
        sidebar.classList.add('active')
        trigger.textContent = '열기'
    }

    overlay.classList.toggle('active')
    
    // overlay.classList.contains('active')
    // ? overlay.classList.remove('active') 
    // : overlay.classList.add('active')

})

overlay.addEventListener('click', () => {
    sidebar.classList.add('active')
    overlay.classList.add('active')
    trigger.textContent = '열기'
})