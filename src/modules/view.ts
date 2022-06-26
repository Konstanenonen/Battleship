const View = (() => {
  const renderPlayerBoard = (state: any[]) => {
    const gameboardArea = document.querySelector(
      ".gameboards"
    ) as HTMLDivElement;
    const playerBoard = document.createElement("div");
    playerBoard.className = "player-board";
    state.map((row) =>
      row.map((item: any) => {
        const tile = document.createElement("div");
        switch (item) {
          case null:
            tile.className = "player-tile";
            break;
          case "miss":
            tile.className = "miss";
            break;
          case "hit":
            tile.className = "hit";
            break;
          default:
            tile.className = "boat-tile";
        }
        playerBoard.appendChild(tile);
        return tile;
      })
    );
    gameboardArea.appendChild(playerBoard);
  };

  const createComputerBoard = () => {
    const gameboardArea = document.querySelector(
      ".gameboards"
    ) as HTMLDivElement;
    const computerBoard = document.createElement("div");
    computerBoard.className = "computer-board";
    for (let i = 0; i < 100; i += 1) {
      const computerTile = document.createElement("div");
      computerTile.className = "computer-tile";
      computerBoard.appendChild(computerTile);
    }
    gameboardArea.appendChild(computerBoard);
  };

  return { renderPlayerBoard, createComputerBoard };
})();

export default View;
