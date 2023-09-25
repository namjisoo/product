console.log('running...')
// const result = document.getElementById('result')
const button = document.getElementById('generate')
const li = document.querySelectorAll('#result > li')
//min: 최솟값, max: 최댓값을 이용한 난수생성
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}

// 로또번호 담을 배열
let lottoNumber = [];

button.addEventListener('click', () => {

    if(lottoNumber.length > 0){
        lottoNumber = []; 
    }  
    
    //로또번호를 생성하는 반복문
    for(let i = 0; lottoNumber.length < 6; i++){
        //random 변수에 난수 생성한 값 할당
        const random = randomNumber(1,45)

        // lottoNumber 내부에 random과 일치하는 값이 있는지 true/false
        const isEntry = lottoNumber.includes(random)
        
        !isEntry ? lottoNumber.push(random) : ''
        // if(!isEntry){
            //   lottoNumber.push(randomNumber(1,45))
            // }
            // console.log(isEntry)
            //배열에 요소를 추가
            // lottoNumber.push(randomNumber(1,45))
        }
        
    //오름차순정렬
    lottoNumber = lottoNumber.sort((a, b) => a - b )
    
    //로또번호를 요소에 추가하는 반복문
    for(let i =0; i < lottoNumber.length; i++){
        setTimeout(() => {
            li[i].textContent = lottoNumber[i]
        }, 300 * i)
    }
    
    button.classList.add('processing')
    button.textContent = '번호 생성중'
    
    //버튼 활성화
    setTimeout(() => {
        button.classList.remove('processing')
        button.textContent = '로또번호생성'
    }, 1800)

})

//배열중에 '어떤값'이 존재하는지 유무에 따라 true.false
lottoNumber.includes('어떤값')
console.log(lottoNumber)