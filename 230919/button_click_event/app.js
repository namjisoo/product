//app.js

const friends = ['짱구', '흰둥이', '철수', '훈이', '유리', '맹구', '짱아']
console.log(friends)
console.log(`친구들은 총 ${friends.length}명입니다.`)
console.log(friends[1])
friends.pop()
console.log(friends)
friends.push('짱아')
console.log(friends)

//for 문
for(let i = 0; i < friends.length; i++){
    console.log(friends[i]);
}

const add = (x) => {
    return console.log(x * 2);
    //리턴문 아래 있는 내용은 실행되지 않는다
}

const numbers = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
    add(numbers[i]);
}

const showName = (name) =>{
    return console.log(`제 이름은 ${name}입니다`)
}

for(let i = 0; i < friends.length; i++){
    showName(friends[i])
}