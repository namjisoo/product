const toggle = document.querySelector('.toggle')
console.log(toggle)
console.log(toggle.classList)

// toggle.classList.add('active')

// toggle.classList.remove('active')

toggle.classList.contains('active')
console.log(toggle.classList.contains('active'))

toggle.addEventListener('click', () => {
    // if(toggle.classList.contains('active')){
    //     toggle.classList.remove('active')
    // }else{
    //     toggle.classList.add('active')
    // }

    //3항 연산자
    // toggle.classList.contains('active') 
    // ? toggle.classList.remove('active') 
    // : toggle.classList.add('active')

    //3. toggle 메소드
    toggle.classList.toggle('active')
})