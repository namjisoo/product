import Dice from "./Dice";
import "./Board.css";
// import diceBlue01 from "./assets/dice-blue-1.svg";
// import diceRed01 from "./assets/dice-red-1.svg";

function Board({ name, color, gameHistory }) {
  // 배열의 합
  // let sum = 0;
  // for (let i = 0; i < gameHistory.length; i++) {
  //   sum += gameHistory[i];
  // }

  // 배열의 foreach
  // gameHistory.forEach((value, index, array)=>{

  // });
  // gameHistory.forEach((v) => {
  //   sum += v;
  // });

  // reduce 함수
  // a:0 b:[0], a:0+[0] b:[1], a:0+[0]+[1] b:[2]...
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  // return은 중괄호가 있으면 생략을 못한다.

  //   const DICE_IMAGES = {
  //     red: diceRed01,
  //     blue: diceBlue01,
  //   };

  const num = gameHistory[gameHistory.length - 1];

  return (
    <div className="Board App-board">
      <h2 className="Board-heading">{name}</h2>
      <Dice color={color} num={num} />
      <h2 className="Board-heading">총점</h2>
      <p>{sum}</p>
      <h2 className="Board-heading">기록</h2>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
