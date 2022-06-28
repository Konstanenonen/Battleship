/* eslint-disable array-callback-return */
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

  const placeShips = (ships: any) => {
    ships.map((ship: any) => {
      ship.coordinates.map(
        (object: { y: number; x: number }, index: number) => {
          const { y, x } = object;
          state[y][x] = [ship.name, index];
        }
      );
    });
  };

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
        throw new Error("Bad input in receiveAttack function");
    }

    state[y][x] = "hit";
  };

  const allShipsSunk = () =>
    destroyer.isSunk() &&
    battleship.isSunk() &&
    cruiser.isSunk() &&
    submarine.isSunk() &&
    carrier.isSunk();

  return { state, receiveAttack, allShipsSunk, placeShips };
};

export default createGameboard;
