import "./style.css";
import View from "./modules/view";
import createPlayer from "./modules/createPlayer";
import createComputerPlayer from "./modules/createComputerPlayer";

const player = createPlayer("Human");
const computer = createComputerPlayer();

const gameLoop = () => {
  const computerTiles = document.querySelectorAll(".computer-tile");
  computerTiles.forEach((tile, index) => {
    tile.addEventListener("click", () => {
      const coordinates = player.changeToCoordinates(index);
      computer.gameboard.receiveAttack(coordinates[0], coordinates[1]);
      View.renderComputerBoard(computer.gameboard.state);

      const computerCoordinates = computer.giveCoordinates();
      player.gameboard.receiveAttack(
        computerCoordinates[0],
        computerCoordinates[1]
      );
      View.renderPlayerBoard(player.gameboard.state);
      gameLoop();
    });
  });
};

View.renderPlayerBoard(player.gameboard.state);
View.renderComputerBoard(computer.gameboard.state);
gameLoop();
