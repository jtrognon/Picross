"use strict";
//https://jestjs.io/fr/docs/expect
Object.defineProperty(exports, "__esModule", { value: true });
var matchGrid_1 = require("@ts/matchGrid");
test("check if the 2 grids are the same", function () {
    var grid = [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 1, 1],
        [0, 1, 1, 0],
    ];
    var answer = [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 1, 1],
        [0, 1, 1, 0],
    ];
    expect(matchGrid_1.matchGrid(grid, answer)).toBeTruthy();
});
