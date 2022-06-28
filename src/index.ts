import "./style.css";
import View from "./modules/view";
import createPlayer from "./modules/createPlayer";
import createComputerPlayer from "./modules/createComputerPlayer";

let computer = createComputerPlayer();
computer.gameboard.placeShips(computer.giveRandomShipPlaces());

let player = createPlayer("Human");
player.gameboard.placeShips(computer.giveRandomShipPlaces());

const gameLoop = () => {
  let gameOver = false;

  View.renderPlayerBoard(player.gameboard.state);
  View.renderComputerBoard(computer.gameboard.state);

  const computerTiles = document.querySelectorAll(".computer-tile");
  computerTiles.forEach((tile, index) => {
    tile.addEventListener("click", () => {
      if (!gameOver) {
        const coordinates = player.changeToCoordinates(index);
        computer.gameboard.receiveAttack(coordinates[0], coordinates[1]);
        View.renderComputerBoard(computer.gameboard.state);
      }

      if (computer.gameboard.allShipsSunk()) {
        View.renderWinMessage("Human wins! :)");
        player = createPlayer("Human");
        player.gameboard.placeShips(computer.giveRandomShipPlaces());
        computer = createComputerPlayer();
        computer.gameboard.placeShips(computer.giveRandomShipPlaces());
        gameOver = true;
      }

      if (!gameOver) {
        const computerCoordinates = computer.giveCoordinates();
        player.gameboard.receiveAttack(
          computerCoordinates[0],
          computerCoordinates[1]
        );
        View.renderPlayerBoard(player.gameboard.state);
      }

      if (player.gameboard.allShipsSunk()) {
        View.renderWinMessage("Computer wins! :(");
        player = createPlayer("Human");
        player.gameboard.placeShips(computer.giveRandomShipPlaces());
        computer = createComputerPlayer();
        computer.gameboard.placeShips(computer.giveRandomShipPlaces());
        gameOver = true;
      }

      gameLoop();
    });
  });
};

gameLoop();
