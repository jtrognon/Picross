//https://jestjs.io/fr/docs/expect

import { matchGrid } from "../TS/matchGrid";

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

  expect(matchGrid(grid, answer)).toBeFalsy();

  answer = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [0, 1, 1, 0],
  ];

  expect(matchGrid(grid, answer)).toBeTruthy();

  answer = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [0, 1, 0],
  ];

  expect(matchGrid(grid, answer)).toBeFalsy();
});
