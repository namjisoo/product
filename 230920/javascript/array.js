const number = [1, 2, 3, 4, 5, 6]
const animal = ['고양이', '강아지', '코끼리']

console.log(number.length);

//객체, object
const classRoom = {
    number: '202',
    student: '20',
    aircon: true,
    conputer: true,
    pockemon: ['피카츄', "꼬부기"]
    // func: () => {
    //     console.log('함수도 담을 수 있습니다')
    // }
}

//객체에는 배열도 담을 수 있다.
console.log(classRoom.pockemon)
console.log(classRoom.pockemon[0])
//객체에 담긴 함수 실행
// classRoom.func()

//classRoom 객체에서 number라는 키를 이용해 값을 출력한 상황
classRoom.number = '300'
console.log(classRoom.number)
console.log(classRoom["student"])

//점심메뉴
const lunch = [
    {
        name: "짜장면",
        cost: 7000
    },

       {
        name: "짬뽕",
        cost: 8000

    },
        
       {
        name: "김밥",
        cost: 3500
    },

        {
        name: "콩나물국밥",
        cost: 6000
    }

]
console.log(lunch[0].name)
console.log(lunch[3].cost)

//for 반복문

//총 합계
let totalCost = 0;

//리스트
const list = document.getElementById('list')

for(let i = 0; i < lunch.length; i++){
    console.log(lunch[i].name);
    console.log(lunch[i].cost);
    console.log(`${lunch[i].name}의 가격은 ${lunch[i].cost.toLocaleString('ko-kr')}원입니다`);
    totalCost += lunch[i].cost
    // list.innerHTML += `<li>${lunch[i].name} : ${lunch[i].cost}</li>`
    document.body.innerHTML += `<p>${lunch[i].name} : ${lunch[i].cost}</p>`
}
console.log(totalCost)
