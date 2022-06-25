/* global test expect */
import shipFactory from "../src/modules/shipFactory";

test("shipFactory - returns a ship with correct length", () => {
  const ship = shipFactory(3);
  expect(ship.length).toBe(3);
});

test("shipFactory - ship should not be sunk with no hits", () => {
  const ship = shipFactory(3);
  expect(ship.isSunk()).toBe(false);
});

test("shipFactory - should not be sunk after some hits", () => {
  const ship = shipFactory(3);
  ship.hit(0);
  ship.hit(2);
  expect(ship.isSunk()).toBe(false);
});

test("shipFactory - should be sunk after full hits", () => {
  const ship = shipFactory(3);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  expect(ship.isSunk()).toBe(true);
});

test("shipFactory - should provide correct positions for hits", () => {
  const smallShip = shipFactory(2);
  const bigShip = shipFactory(5);

  smallShip.hit(0);

  bigShip.hit(1);
  bigShip.hit(3);

  expect(smallShip.hitPositions).toEqual([true, false]);
  expect(bigShip.hitPositions).toEqual([false, true, false, true, false]);
});
