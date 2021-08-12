//tsc --init

//return true if grids are the same otherwise return false
export const matchGrid = (grid: number[][], answer: number[][]) => {
  if (grid.length != answer.length || grid[0].length != answer[0].length) {
    return false;
  }

  let i: number;
  let j: number;

  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      if (grid[i][j] != answer[i][j]) {
        return false;
      }
    }
  }

  return true;
};
