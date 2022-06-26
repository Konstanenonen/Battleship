const View = (() => {
  const renderPlayerBoard = (state: any[]) => {
    const gameboard1 = document.querySelector(".gameboard1") as HTMLDivElement;
    gameboard1.innerHTML = "";

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
    gameboard1.appendChild(playerBoard);
  };

  const renderComputerBoard = (state: any[]) => {
    const gameboard2 = document.querySelector(".gameboard2") as HTMLDivElement;
    gameboard2.innerHTML = "";

    const computerBoard = document.createElement("div");
    computerBoard.className = "computer-board";
    state.map((row) =>
      row.map((item: any) => {
        const tile = document.createElement("div");
        tile.className = "computer-tile";
        switch (item) {
          case null:
            tile.className = "computer-tile";
            break;
          case "miss":
            tile.classList.add("miss");
            break;
          case "hit":
            tile.classList.add("hit");
            break;
          default:
            tile.className = "computer-tile";
        }
        computerBoard.appendChild(tile);
        return tile;
      })
    );
    gameboard2.appendChild(computerBoard);
  };

  const renderWinMessage = (message: string) => {
    const victoryMessage = document.querySelector(
      ".victory-message"
    ) as HTMLElement;
    victoryMessage.innerText = message;
  };

  return { renderPlayerBoard, renderComputerBoard, renderWinMessage };
})();

export default View;
