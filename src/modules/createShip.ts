const createShip = (length: number) => {
  const hitPositions = Array.from(Array(length)).map(() => false);

  const hit = (position: number) => {
    hitPositions[position] = true;
  };

  const isSunk = () => !hitPositions.includes(false);

  return {
    length: hitPositions.length,
    hitPositions,
    hit,
    isSunk,
  };
};

export default createShip;
