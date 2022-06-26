/* global test expect */
import createShip from "../src/modules/createShip";

test("createShip - returns a ship with correct length", () => {
  const ship = createShip(3);
  expect(ship.length).toBe(3);
});

test("createShip - ship should not be sunk with no hits", () => {
  const ship = createShip(3);
  expect(ship.isSunk()).toBe(false);
});

test("createShip - should not be sunk after some hits", () => {
  const ship = createShip(3);
  ship.hit(0);
  ship.hit(2);
  expect(ship.isSunk()).toBe(false);
});

test("createShip - should be sunk after full hits", () => {
  const ship = createShip(3);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  expect(ship.isSunk()).toBe(true);
});

test("createShip - should provide correct positions for hits", () => {
  const smallShip = createShip(2);
  const bigShip = createShip(5);

  smallShip.hit(0);

  bigShip.hit(1);
  bigShip.hit(3);

  expect(smallShip.hitPositions).toEqual([true, false]);
  expect(bigShip.hitPositions).toEqual([false, true, false, true, false]);
});
