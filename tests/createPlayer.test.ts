/* global test expect */
import createPlayer from "../src/modules/createPlayer";

test("Players should have a name property", () => {
  const player1 = createPlayer("Human");
  expect(player1.name).toBe("Human");
});

test("Player's have their own gameboards", () => {
  const player1 = createPlayer("Human");
  expect(player1.gameboard).toBeTruthy();
});

test("Returns correct coordinates from given index", () => {
  const player1 = createPlayer("Human");
  expect(player1.changeToCoordinates(0)).toEqual([0, 0]);
  expect(player1.changeToCoordinates(99)).toEqual([9, 9]);
});
