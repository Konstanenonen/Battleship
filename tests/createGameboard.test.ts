/* global test expect */
import createGameboard from "../src/modules/createGameboard";

test("createGameboard - should have 10x10 two dimensonal array", () => {
  const gameboard = createGameboard();
  expect(gameboard.state.length).toBe(10);
  for (let i = 0; i < gameboard.state.length; i += 1) {
    expect(gameboard.state[i].length).toBe(10);
  }
});

test("createGameboard - should place ships to gameboard", () => {
  const gameboard = createGameboard();
  expect(gameboard.state).toEqual([
    [
      ["battleship", 0],
      ["battleship", 1],
      ["battleship", 2],
      ["battleship", 3],
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    [
      null,
      null,
      null,
      null,
      null,
      ["destroyer", 0],
      ["destroyer", 1],
      null,
      null,
      null,
    ],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, ["cruiser", 0]],
    [null, null, null, null, null, null, null, null, null, ["cruiser", 1]],
    [null, null, null, null, null, null, null, null, null, ["cruiser", 2]],
    [null, null, null, null, null, null, null, null, null, null],
    [
      null,
      null,
      null,
      null,
      ["submarine", 0],
      ["submarine", 1],
      ["submarine", 2],
      null,
      null,
      null,
    ],
    [null, null, null, null, null, null, null, null, null, null],
    [
      null,
      null,
      null,
      null,
      null,
      ["carrier", 0],
      ["carrier", 1],
      ["carrier", 2],
      ["carrier", 3],
      ["carrier", 4],
    ],
  ]);
});

test("createGameboard - receiveAttack function takes coordinates and marks the spot missed", () => {
  const gameboard = createGameboard();
  gameboard.receiveAttack(1, 0);
  expect(gameboard.state[1][0]).toBe("miss");
});

test("createGameboard - receiveAttack function marks the sopt hit when there is a ship", () => {
  const gameboard = createGameboard();
  gameboard.receiveAttack(0, 0);
  expect(gameboard.state[0][0]).toBe("hit");
});

test("createGameboard - allShipsSunk should return false if all ships haven't sunk", () => {
  const gameboard = createGameboard();
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 1);
  gameboard.receiveAttack(0, 2);
  gameboard.receiveAttack(0, 3);

  gameboard.receiveAttack(1, 5);
  gameboard.receiveAttack(1, 6);

  expect(gameboard.allShipsSunk()).toBe(false);
});

test("createGameboard - allShipsSunk should return true when all ships are sunk", () => {
  const gameboard = createGameboard();
  gameboard.receiveAttack(3, 9);
  gameboard.receiveAttack(4, 9);
  gameboard.receiveAttack(5, 9);

  gameboard.receiveAttack(9, 5);
  gameboard.receiveAttack(9, 6);
  gameboard.receiveAttack(9, 7);
  gameboard.receiveAttack(9, 8);
  gameboard.receiveAttack(9, 9);

  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 1);
  gameboard.receiveAttack(0, 2);
  gameboard.receiveAttack(0, 3);

  gameboard.receiveAttack(7, 4);
  gameboard.receiveAttack(7, 5);
  gameboard.receiveAttack(7, 6);

  gameboard.receiveAttack(1, 5);
  gameboard.receiveAttack(1, 6);

  expect(gameboard.allShipsSunk()).toBe(true);
});
