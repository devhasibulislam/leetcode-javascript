/**
 * Title: Number of Closed Islands
 * Description: Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.
 * Author: Hasibul Islam
 * Date: 06/04/2023
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  const R = grid.length,
    C = grid[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let counter = 0;

  for (let r = 1; r < R - 1; r++) {
    for (let c = 1; c < C - 1; c++) {
      if (!grid[r][c] && isValid(r, c)) counter++;
    }
  }
  return counter;

  function isValid(r, c) {
    if (grid[r][c]) return true;
    if (r == 0 || c == 0 || r == R - 1 || c == C - 1) return false;
    grid[r][c] = 1;

    let result = true;

    for (let [dr, dc] of dir) {
      if (!isValid(dr + r, dc + c)) result = false;
    }
    return result;
  }
};

console.log(
  closedIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
