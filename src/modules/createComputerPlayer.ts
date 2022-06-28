import createPlayer from "./createPlayer";
import { getCoordinates, randomShipPlacements } from "./getCoordinates";

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

  const giveRandomShipPlaces = () => {
    const index = Math.floor(Math.random() * 3);
    return randomShipPlacements[index];
  };

  return { ...createPlayer("Computer"), giveCoordinates, giveRandomShipPlaces };
};

export default createComputerPlayer;
