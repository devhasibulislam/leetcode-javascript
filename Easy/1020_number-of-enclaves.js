/**
 * Title: Number of Enclaves
 * Description: You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.
 * Author: Hasibul Islam
 * Date: 07/04/2023
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
function numEnclaves(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const visited = Array(m)
    .fill()
    .map(() => Array(n).fill(false));

  // mark all boundary land cells as reachable
  for (let i = 0; i < m; i++) {
    dfs(i, 0);
    dfs(i, n - 1);
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j);
    dfs(m - 1, j);
  }

  // count the number of unreachable land cells
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        count++;
      }
    }
  }
  return count;

  function dfs(i, j) {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      visited[i][j] ||
      grid[i][j] === 0
    ) {
      return;
    }
    visited[i][j] = true;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
}

const grid = [
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

console.log(numEnclaves(grid)); // Output: 3
