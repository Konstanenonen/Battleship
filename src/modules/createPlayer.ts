import createGameboard from "./createGameboard";
import getCoordinates from "./getCoordinates";

const createPlayer = (name: string) => {
  const gameboard = createGameboard();

  const coordinates = getCoordinates();

  const changeToCoordinates = (index: number) => coordinates[index];

  return { name, gameboard, changeToCoordinates };
};

export default createPlayer;
