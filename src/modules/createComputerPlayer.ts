import createPlayer from "./createPlayer";
import getCoordinates from "./getCoordinates";

const createComputerPlayer = () => {
  const prototype = createPlayer("Computer");

  let coordinates = getCoordinates();

  const giveCoordinates = () => {
    const randomIndex = Math.floor(Math.random() * coordinates.length);
    const randomCoordinate = coordinates[randomIndex];
    coordinates = coordinates.filter(
      (coordinate) => coordinate !== randomCoordinate
    );
    return randomCoordinate;
  };

  return { ...prototype, giveCoordinates };
};

export default createComputerPlayer;
