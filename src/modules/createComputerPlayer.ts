import createPlayer from "./createPlayer";
import getCoordinates from "./getCoordinates";

const createComputerPlayer = () => {
  let coordinates = getCoordinates();

  const giveCoordinates = () => {
    const randomIndex = Math.floor(Math.random() * coordinates.length);
    const randomCoordinate = coordinates[randomIndex];
    coordinates = coordinates.filter(
      (coordinate) => coordinate !== randomCoordinate
    );
    return randomCoordinate;
  };

  return { ...createPlayer("Computer"), giveCoordinates };
};

export default createComputerPlayer;
