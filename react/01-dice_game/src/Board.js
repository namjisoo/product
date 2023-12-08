import Dice from "./Dice";
import "./Board.css";
// import diceBlue01 from "./assets/dice-blue-1.svg";
// import diceRed01 from "./assets/dice-red-1.svg";

function Board({ name, color, num, gameHistory }) {
  console.log(gameHistory);
  //   const DICE_IMAGES = {
  //     red: diceRed01,
  //     blue: diceBlue01,
  //   };
  return (
    <div className="Board App-board">
      <h2 className="Board-heading">{name}</h2>
      <Dice color={color} num={num} />
      <h2 className="Board-heading">총점</h2>
      <p></p>
      <h2 className="Board-heading">기록</h2>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
