const createGameboard = () => {
  const state = Array.from(Array(9)).map(() => [
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

  return { state };
};

export default createGameboard;
