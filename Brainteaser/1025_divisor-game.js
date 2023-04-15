/**
 * Title: Divisor Game
 * Description: Alice and Bob take turns playing a game, with Alice starting first.
 * Author: Hasibul Islam
 * Date: 15/04/2023
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (N) {
  const dp = Array(N + 1).fill(false);

  for (let i = 2; i <= N; i++) {
    for (let j = 1; j < i; i++) {
      if (i % j === 0 && !dp[i - j]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[N];
};
