/**
 * Title: Number of Subsequences That Satisfy the Given Sum Condition
 * Description: Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  const MOD = 1000000007;

  nums = nums.sort((a, b) => a - b);

  const pows = [1];

  for (let i = 1; i < nums.length; i++) {
    pows.push((pows[i - 1] * 2) % MOD);
  }

  let left = 0;
  let right = nums.length - 1;
  let ans = 0;

  while (left <= right) {
    if (nums[left] + nums[right] > target) {
      right--;
    } else {
      ans = ans + pows[right - left];
      left++;
    }
  }

  return ans % MOD;
};
