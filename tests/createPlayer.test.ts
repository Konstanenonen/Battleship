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
