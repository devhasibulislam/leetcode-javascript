/**
 * Title: Jump Game VI
 * Description: You are given a 0-indexed integer array nums and an integer k.
 * Author: Hasibul Islam
 * Date: 11/04/2023
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  const n = nums.length;
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];

  const monoDequeue = [];
  monoDequeue.push(0);

  for (let i = 1; i < n; i++) {
    let score = nums[i];

    if (monoDequeue.length > 0 && i - k > monoDequeue[0]) monoDequeue.shift();

    score += dp[monoDequeue[0]];

    dp[i] = score;

    while (
      monoDequeue.length > 0 &&
      dp[monoDequeue[monoDequeue.length - 1]] < score
    ) {
      monoDequeue.pop();
    }

    monoDequeue.push(i);
  }

  return dp[n - 1];
};
