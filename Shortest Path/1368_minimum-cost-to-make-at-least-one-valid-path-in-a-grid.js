/**
 * Title: Minimum Cost to Make at Least One Valid Path in a Grid
 * Description: You will initially start at the upper left cell (0, 0). A valid path in the grid is a path that starts from the upper left cell (0, 0) and ends at the bottom-right cell (m - 1, n - 1) following the signs on the grid. The valid path does not have to be the shortest.
 * Author: Hasibul Islam
 * Date: 04/05/2023
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minCost = function (grid) {
  const m = grid.length,
    n = grid[0].length,
    checkPos = (i, j) =>
      i > -1 && j > -1 && i < m && j < n && !visited[i + "," + j],
    dir = { 1: [0, 1], 2: [0, -1], 3: [1, 0], 4: [-1, 0] },
    dfs = (i, j) => {
      if (!checkPos(i, j)) return false;
      if (i === m - 1 && j === n - 1) return true;
      visited[i + "," + j] = true;
      next.push([i, j]);
      return dfs(i + dir[grid[i][j]][0], j + dir[grid[i][j]][1]);
    },
    visited = {};
  let changes = 0,
    cur = [[0, 0]],
    next;
  while (cur.length) {
    next = [];
    for (const [i, j] of cur) if (dfs(i, j)) return changes;
    changes++;
    cur = [];
    next.forEach((pos) => {
      for (let d = 1; d < 5; d++) {
        const x = pos[0] + dir[d][0],
          y = pos[1] + dir[d][1];
        if (checkPos(x, y)) cur.push([x, y]);
      }
    });
  }
};
