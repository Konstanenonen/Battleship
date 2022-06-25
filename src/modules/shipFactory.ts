const createHitPositions = (length: number) => {
  const positions: boolean[] = [];
  for (let i = 0; i < length; i += 1) {
    positions.push(false);
  }
  return positions;
};

const shipFactory = (length: number) => {
  const hitPositions = createHitPositions(length);

  const hit = (position: number) => {
    hitPositions[position] = true;
  };

  const isSunk = () => !hitPositions.includes(false);

  return {
    length,
    hitPositions,
    hit,
    isSunk,
  };
};

export default shipFactory;
