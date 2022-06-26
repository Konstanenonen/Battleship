/* global test expect */

import createComputerPlayer from "../src/modules/createComputerPlayer";

test("Players should have a name property", () => {
  const computer = createComputerPlayer();
  expect(computer.name).toBe("Computer");
});

test("Player's have their own gameboards", () => {
  const computer = createComputerPlayer();
  expect(computer.gameboard).toBeTruthy();
});

test("Computer should return random coordinates with giveCoordinates", () => {
  const computer = createComputerPlayer();
  expect(computer.giveCoordinates()).toBeTruthy();
});

test("Computer should return undefined after 100 times", () => {
  const computer = createComputerPlayer();
  for (let i = 0; i < 100; i += 1) {
    computer.giveCoordinates();
  }
  expect(computer.giveCoordinates()).toBeUndefined();
});
