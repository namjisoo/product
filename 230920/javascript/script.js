//더하기  함수 ES5
function add(x,y){
    return x + y;
}
//실행
console.log(add(2,3))

//Fat arrow function, 혹은 화살표함수
const addFunc = (x, y) => {
    return console.log(x + y);
}
//실행
addFunc(5,5)

// const double = (x) => {
    //     return console.log(x * x);
    // } 
//매개변수가 하나일 때, 화살표함수를 축약해서 표현하는 방법
const double = x => console.log(x * x);

//매개변수를 제곱하는 함수
double(4)

//if 문
const 조건 = true
if(조건){
    //조건이 맞을 경우 실행되는 내용
    console.log(조건)
} else{
    //조건이 안 맞을 경우 실행되는 내용
}

function showName(name){
    console.log(`매개변수의 타입은 ${typeof name}입니다`)

    //length는 배열, 문자열의 길이를 알아낼 때 사용할 수 있다.
    console.log(name.length)

    //매개변수 name의 타입이 'string'일 경우에만 출력
    if(typeof name === 'string'){
        return console.log(`제 이름은 ${name}입니다`)
    }
}

showName('남지수')

