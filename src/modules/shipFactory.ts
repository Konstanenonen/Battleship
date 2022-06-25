const shipFactory = (length: number) => {
  const hitPositions: boolean[] = [];
  for (let i = 0; i < length; i += 1) {
    hitPositions.push(false);
  }

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
