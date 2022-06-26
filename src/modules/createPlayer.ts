import createGameboard from "./createGameboard";

const createPlayer = (name: string) => {
  const gameboard = createGameboard();
  return { name, gameboard };
};

export default createPlayer;
