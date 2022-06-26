import "./style.css";
import View from "./modules/view";
import createPlayer from "./modules/createPlayer";
import createComputerPlayer from "./modules/createComputerPlayer";

const humanPlayer = createPlayer("Human");
const computerPlayer = createComputerPlayer();
console.log(humanPlayer);
console.log(computerPlayer);

View.renderPlayerBoard(humanPlayer.gameboard.state);
View.createComputerBoard();

let gameOver = false;
while (!gameOver) {
  gameOver = true;
}
