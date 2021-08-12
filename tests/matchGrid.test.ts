//https://jestjs.io/fr/docs/expect

import { matchGrid } from "./matchGrid";

test("check if the 2 grids are the same", () => {
  let grid = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [0, 1, 1, 0],
  ];
  let answer = [
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [0, 1, 1, 0],
  ];

  expect(matchGrid(grid, answer)).toBeTruthy();
});
