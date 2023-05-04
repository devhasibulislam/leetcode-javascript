/**
 * Title: Minimum Time to Visit a Cell in a Grid
 * Description: You are given a m x n matrix grid consisting of non-negative integers where grid[row][col] represents the minimum time required to be able to visit the cell (row, col), which means you can visit the cell (row, col) only when the time you visit it is greater than or equal to grid[row][col].
 * Author: Hasibul Islam
 * Date: 04/05/2023
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumTime = function (grid) {
  if (grid[0][1] > 1 && grid[1][0] > 1) {
    return -1;
  }
  const dp = new Array(grid.length)
    .fill()
    .map((_) => new Array(grid[0].length).fill());
  const dir = [1, 0, -1, 0, 1];
  const pq = new MinPriorityQueue({
    compare: (a, b) => a[0] - b[0],
  });
  pq.enqueue([0, 0, 0]);
  while (pq.size() > 0) {
    // Pick the node with the min potential value of time to visit
    const [val, i, j] = pq.dequeue();
    if (dp[i][j] != null) {
      continue;
    }
    dp[i][j] = val;
    if (i === grid.length - 1 && j === grid[0].length - 1) {
      break;
    }
    for (let k = 0; k < 4; ++k) {
      const [ni, nj] = [i + dir[k], j + dir[k + 1]];
      if (
        ni >= 0 &&
        nj >= 0 &&
        ni < grid.length &&
        nj < grid[0].length &&
        dp[ni][nj] == null
      ) {
        // 1 + dp[i][j]: Move 1 step from [i, j] to [ni, nj];
        // grid[ni][nj] + (grid[ni][nj] & 1 ^ (ni+nj) & 1): After some back and forth in [i, j], finally reach the time
        // of grid[ni][nj], depending on its value and position, we may need to add 1 to it.
        const pVal = Math.max(
          1 + dp[i][j],
          grid[ni][nj] + ((grid[ni][nj] & 1) ^ ((ni + nj) & 1))
        );
        pq.enqueue([pVal, ni, nj]);
      }
    }
  }
  return dp[grid.length - 1][grid[0].length - 1];
};
