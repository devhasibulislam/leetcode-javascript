/**
 * Title: Stone Gme IV
 * Description: Initially, there are n stones in a pile. On each player's turn, that player makes a move consisting of removing any non-zero square number of stones in the pile.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  const dp = new Array(n + 1).fill();
  return helper(dp, n);
};

function helper(dp, n) {
  if (n === 0) return false;
  if (dp[n] !== undefined) return dp[n];

  for (let i = 1; i <= n; i++) {
    const square = i * i;
    if (square > n) break;

    const next = helper(dp, n - square);
    if (!next) return (dp[n] = true);
  }

  return (dp[n] = false);
}
