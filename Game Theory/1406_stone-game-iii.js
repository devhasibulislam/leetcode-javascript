/**
 * Title: Stone Game III
 * Description: Alice and Bob continue their games with piles of stones. There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array stoneValue.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
  const dp = new Array(stoneValue.length).fill(-Infinity);
  for (let i = stoneValue.length - 1; i >= 0; i--) {
    let points = 0;
    for (let numStones = 1; numStones <= 3; numStones++) {
      if (i + numStones > stoneValue.length) break;
      points += stoneValue[i + numStones - 1];
      dp[i] = Math.max(dp[i], points - (dp[i + numStones] || 0));
    }
  }
  if (dp[0] === 0) return "Tie";
  if (dp[0] > 0) return "Alice";
  return "Bob";
};
