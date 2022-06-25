/* global test expect */
import shipFactory from "../src/modules/shipFactory";

test("shipFactory - returns a ship with correct length", () => {
  const ship = shipFactory(3);
  expect(ship.length).toBe(3);
});
