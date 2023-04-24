/**
 * Title: Maximum Value of K Coins from Piles
 * Description: There are n piles of coins on a table. Each pile consists of a positive number of coins of assorted denominations.
 * Author: Hasibul Islam
 * Date: 15/04/2023
 */

/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
const maxValueOfCoins = (piles, k) => {
  let dp = Array(k + 1).fill(0);
  for (const p of piles) {
    for (let i = k; ~i; i--) {
      let sum = 0;
      for (let j = 0; i + j + 1 <= k && j < p.length; j++) {
        sum += p[j];
        dp[i + j + 1] = Math.max(dp[i + j + 1], sum + dp[i]);
      }
    }
  }
  return dp[k];
};
