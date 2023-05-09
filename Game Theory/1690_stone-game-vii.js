/**
 * Title: Stone Game VII
 * Description: Given an array of integers stones where stones[i] represents the value of the ith stone from the left, return the difference in Alice and Bob's score if they both play optimally.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {number[]} stones
 * @return {number}
 */

var stoneGameVII = function (s) {
  let len = s.length,
    dp = new Array(len).fill().map((_) => new Array(len).fill(0));
  for (let i = len - 2; ~i; i--)
    for (let j = i + 1, sum = s[i] + s[j]; j < len; sum += s[++j])
      dp[i][j] = Math.max(sum - s[i] - dp[i + 1][j], sum - s[j] - dp[i][j - 1]);
  return dp[0][len - 1];
};
