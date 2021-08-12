"use strict";
//tsc --init
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchGrid = void 0;
//return true if grids are the same otherwise return false
function matchGrid(grid, answer) {
    if (grid.length != answer.length || grid[0].length != answer[0].length) {
        return false;
    }
    var i;
    var j;
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            if (grid[i][j] != answer[i][j]) {
                return false;
            }
        }
    }
    return true;
}
exports.matchGrid = matchGrid;
