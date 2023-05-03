/**
 * Title: Unique Paths
 * Description: There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n, memo = {}) {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 || n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
  return memo[key];
};
