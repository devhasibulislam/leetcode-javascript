/**
 * Title: Find Kth Largest XOR Coordinate Value
 * Description: You are given a 2D matrix of size m x n, consisting of non-negative integers. You are also given an integer k The value of coordinate (a, b) of the matrix is the XOR of all matrix[i][j] where 0 <= i <= a < m and 0 <= j <= b < n (0-indexed). Find the kth largest value (1-indexed) of all the coordinates of matrix.
 * Author: Hasibul Islam
 * Date: 03/04/2023
 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const arr = [];

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        dp[i - 1][j] ^ dp[i][j - 1] ^ dp[i - 1][j - 1] ^ matrix[i - 1][j - 1];
      arr.push(dp[i][j]);
    }
  }

  arr.sort((a, b) => b - a);
  return arr[k - 1];
};

console.log(
  kthLargestValue(
    [
      [5, 2],
      [1, 6],
    ],
    1
  )
);
