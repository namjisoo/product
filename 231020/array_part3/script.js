document.write("<h1>1. forEach() 함수<h1>");
// 1. forEach() 메소드(함수)
// 해당 배열의 모든 요소에 대하여 반복적으로 함수를 실행한다.
const arr = [1, true, "javascript"];
function printArr(value, index, array) {
  document.write(`<h3>arr[${index}] = ${value}</h3>`);
}

// arr.forEach(callback function);
arr.forEach(printArr);
// console.log(printArr);
// console.log(printArr());
// ()를 붙이는 것은 함수를 호출할 뿐, 함수 자체를 얘기하는 건 아니다.

document.write("<hr />");
document.write("<h1>2. map() 함수<h1>");
// ⭐2. map() 함수
// 해당 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 실행 결과를 새로운 배열에 담아 반환한다.

const arr2 = [3, 4, 5, 6];
const tempArr = [];
for (let i = 0; i < arr2.length; i++) {
  tempArr.push(arr2[i] * 3);
}

let modifiedArr = arr2.map(function (element) {
  return element * 3;
});
// let modifiedArr = arr2.map((v) => v * 3);
// console.log(modifiedArr);
document.write(`<h3>arr2 : [${arr2}]</h3>`);
document.write(`<h3>arr2의 원소에 *3 : [${modifiedArr}]</h3>`);

let users = [
  { firstName: "beckham", lastName: "david" },
  { firstName: "De Bruyne", lastName: "kevin" },
  { firstName: "Haaland", lastName: "Erling" },
];

let userName = users.map(function (element) {
  return ` ${element.lastName}  ${element.firstName}`;
});
document.write(`<h3>${userName}</h3>`);
// console.log(userName);

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function multiplyTwo(number) {
  return number * 2;
}
const newNumberArr = numberArr.map(multiplyTwo);
document.write(`<h3>numberArr:  [${numberArr}]</h3>`);
document.write(`<h3>newNumberArr: [${newNumberArr}]</h3>`);

const numberArr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// function multiplyTwo2(x) {
//     return `[${x[0] * 2} ${x[1] * 2} ${x[2] * 2}]`;
// }
let newNumberArr2 = numberArr2.map(function (element) {
  return element.map(function (element) {
    return element * 2;
  });
});
// console.log(newNumberArr2);
document.write(`<h3>newNumberArr2:  ${newNumberArr2}</h3>`);

document.write("<hr />");
document.write("<h1>3. filter() 함수<h1>");
// 3. filter() 함수
// 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후, 그 결과값이 true인 요소들만을 새로운 배열로 반환한다.
const numberArr3 = [1, 2, 3, 4, 5];
let result = [];
// for (let i = 0; i < numberArr3.length; i++) {
//   if (numberArr3[i] > 3) result.push(numberArr3[i]);
// }
// result = numberArr3.map((el){
//     if (el>3){
//         return el
//     }
// })
// map은 사용불가

result = numberArr3.filter(function (el) {
  return el > 3;
});
// result = numberArr3.filter((el) => el > 3);

document.write(`<h3>numberArr3 : [${numberArr3}]</h3>`);
document.write(`<h3>result : [${result}]</h3>`);

const guys = [
  { name: "덕배", money: 500000 },
  { name: "베컴", money: 700000 },
  { name: "홀란드", money: 600000 },
  { name: "포든", money: 400000 },
];
// let rich = guys.filter(function (el) {
//   return el.money > 500000;
// });
let richName = guys.filter((el) => el.money > 500000).map((el) => el.name);
document.write(`<h3>richName : [${richName}]</h3>`);

// filter의 조건은 &&로 여러개 사용할 수 있다. 또는 if 안에 if를 또 사용하여 중첩할 수 있다.
const twoConditionGuy = guys.filter((el) => {
  if (el.money > 500000) {
    if (el.name == "홀란드") {
      return true;
    }
  }
  return false;
});
console.log(twoConditionGuy);

// console.log(guys);
// console.log(rich);
// document.write(`<h3>guys : [${guys}]</h3>`);
// document.write(`<h3>rich : [${rich}]</h3>`);
