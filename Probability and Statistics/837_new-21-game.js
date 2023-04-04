/**
 * Title: New 21 Game
 * Description: Alice plays the following game, loosely based on the card game "21".
 * Author: Hasibul Islam
 * Date: 04/04/2023
 */

/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */

var new21Game = function (N, K, W) {
  let dp = new Array(K + W).fill(0);
  let s = 0;
  for (let i = K; i < K + W; i++) {
    if (i <= N) {
      dp[i] = 1;
    } else {
      dp[i] = 0;
    }
    s += dp[i];
  }
  for (let i = K - 1; i >= 0; i--) {
    dp[i] = s / W;
    s = s + dp[i] - dp[i + W];
  }
  return dp[0];
};

console.log(new21Game(5, 2, 21));
