let randNum = 0;
let count = 0;
const MAX_COUNT = 6;
const pTag = document.querySelector("#message");
const input = document.querySelector("#number");
let resStr = "";
function getRandom() {
  randNum = parseInt(Math.random() * 100 + 1);
}
function reset() {
  count = 0;
  getRandom();
  pTag.innerHTML = "";
  input.value = "";
  resStr = "";
}
function test() {
  if (randNum == input.value) {
    alert(`게임에서 승리하셨습니다. 컴퓨터의 숫자 : ${randNum}`);
    reset();
    // 함수호출
  } else {
    count++;

    let upDown = "";
    if (randNum < input.value) {
      upDown = "작습니다";
    } else if (randNum > input.value) {
      upDown = "큽니다";
    }
    // const spanTag = document.createElement("span");
    // spanTag.innerHTML = `입력하신 숫자보다 ${upDown}. 입력하신 숫자 : ${
    //   input.value
    // } 남은 횟수: ${MAX_COUNT - count}<br>`;
    // pTag.appendChild(spanTag);

    resStr += `입력하신 숫자보다 ${upDown}. 입력하신 숫자 : ${
      input.value
    } 남은 횟수: ${MAX_COUNT - count}<br>`;
    pTag.innerHTML = resStr;

    if (count == MAX_COUNT) {
      alert(`게임에서 패배하셨습니다. 컴퓨터의 숫자: ${randNum}`);
      reset();
    }
  }
}

getRandom();
