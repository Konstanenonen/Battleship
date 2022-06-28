import "./style.css";
import View from "./modules/view";
import createPlayer from "./modules/createPlayer";
import createComputerPlayer from "./modules/createComputerPlayer";

let player = createPlayer("Human");
player.gameboard.placeShips([
  {
    name: "destroyer",
    coordinates: [
      { y: 1, x: 5 },
      { y: 1, x: 6 },
    ],
  },
  {
    name: "cruiser",
    coordinates: [
      { y: 3, x: 9 },
      { y: 4, x: 9 },
      { y: 5, x: 9 },
    ],
  },
  {
    name: "submarine",
    coordinates: [
      { y: 7, x: 4 },
      { y: 7, x: 5 },
      { y: 7, x: 6 },
    ],
  },
  {
    name: "battleship",
    coordinates: [
      { y: 0, x: 0 },
      { y: 0, x: 1 },
      { y: 0, x: 2 },
      { y: 0, x: 3 },
    ],
  },
  {
    name: "carrier",
    coordinates: [
      { y: 9, x: 5 },
      { y: 9, x: 6 },
      { y: 9, x: 7 },
      { y: 9, x: 8 },
      { y: 9, x: 9 },
    ],
  },
]);

let computer = createComputerPlayer();
computer.gameboard.placeShips([
  {
    name: "destroyer",
    coordinates: [
      { y: 3, x: 1 },
      { y: 3, x: 2 },
    ],
  },
  {
    name: "cruiser",
    coordinates: [
      { y: 3, x: 7 },
      { y: 4, x: 7 },
      { y: 5, x: 7 },
    ],
  },
  {
    name: "submarine",
    coordinates: [
      { y: 1, x: 4 },
      { y: 1, x: 5 },
      { y: 1, x: 6 },
    ],
  },
  {
    name: "battleship",
    coordinates: [
      { y: 0, x: 6 },
      { y: 0, x: 7 },
      { y: 0, x: 8 },
      { y: 0, x: 9 },
    ],
  },
  {
    name: "carrier",
    coordinates: [
      { y: 9, x: 5 },
      { y: 9, x: 6 },
      { y: 9, x: 7 },
      { y: 9, x: 8 },
      { y: 9, x: 9 },
    ],
  },
]);

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
        computer = createComputerPlayer();
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
        computer = createComputerPlayer();
        gameOver = true;
      }

      gameLoop();
    });
  });
};

gameLoop();
