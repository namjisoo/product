console.log('app.js running...')
const title = document.getElementById('text')
console.log(title.textContent)


//title.textContent내용을 배열로 변환
//split('기준이 되는 문자') : 기준이 되는 문자를 기준으로 쪼개 배열로 변환, ‘’그냥따옴표를 넣으면 글자단위로 쪼갠다
const textArray = title.textContent.split('')
console.log(textArray)

//title의 텍스트 내용을 비워준다
title.textContent= ''

//title의 텍스트 내용 배열을 반복해서 처리
for(let i = 0; i < textArray.length; i++){
    setTimeout(() => {
        console.log(textArray[i])
        // 텍스트 내용 누적해서 추가
        title.textContent += textArray[i]
    }, 500 * i)
}


//createElement('태그이름') 태그를 생성하는 메소드
const p = document.createElement('p')
p.textContent = title.textContent
//body의 맨 마지막 부분에 생성한 p 태그 추가
document.body.append(p)
console.log(p)

