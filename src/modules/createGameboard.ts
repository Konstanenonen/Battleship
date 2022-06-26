import createShip from "./createShip";

const createGameboard = () => {
  const state = Array.from(Array(10)).map(() => [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const carrier = createShip(5);
  const battleship = createShip(4);
  const cruiser = createShip(3);
  const submarine = createShip(3);
  const destroyer = createShip(2);

  state[9][5] = ["carrier", 0];
  state[9][6] = ["carrier", 1];
  state[9][7] = ["carrier", 2];
  state[9][8] = ["carrier", 3];
  state[9][9] = ["carrier", 4];

  state[0][0] = ["battleship", 0];
  state[0][1] = ["battleship", 1];
  state[0][2] = ["battleship", 2];
  state[0][3] = ["battleship", 3];

  state[7][4] = ["submarine", 0];
  state[7][5] = ["submarine", 1];
  state[7][6] = ["submarine", 2];

  state[3][9] = ["cruiser", 0];
  state[4][9] = ["cruiser", 1];
  state[5][9] = ["cruiser", 2];

  state[1][5] = ["destroyer", 0];
  state[1][6] = ["destroyer", 1];

  const receiveAttack = (y: number, x: number) => {
    const boardTile = state[y][x];
    if (boardTile === "miss" || boardTile === "hit") {
      return;
    }
    if (boardTile === null) {
      state[y][x] = "miss";
      return;
    }

    const shipName = boardTile[0];
    const hitPosition = boardTile[1];

    switch (shipName) {
      case "carrier":
        carrier.hit(hitPosition);
        break;
      case "battleship":
        battleship.hit(hitPosition);
        break;
      case "cruiser":
        cruiser.hit(hitPosition);
        break;
      case "submarine":
        submarine.hit(hitPosition);
        break;
      case "destroyer":
        destroyer.hit(hitPosition);
        break;
      default:
        break;
    }

    state[y][x] = "hit";
  };

  const allShipsSunk = () =>
    destroyer.isSunk() &&
    battleship.isSunk() &&
    cruiser.isSunk() &&
    submarine.isSunk() &&
    carrier.isSunk();

  return { state, receiveAttack, allShipsSunk };
};

export default createGameboard;
