/**
 * Title: Constrained Subsequence Sum
 * Description: Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence of that array such that for every two consecutive integers in the subsequence, nums[i] and nums[j], where i < j, the condition j - i <= k is satisfied.
 * Author: Hasibul Islam
 * Date: 11/04/2023
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
  const queue = [[0, nums[0]]];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const cur = queue.length ? nums[i] + Math.max(0, queue[0][1]) : nums[i];
    max = Math.max(max, cur);
    while (queue.length && queue[queue.length - 1][1] < cur) queue.pop();
    queue.push([i, cur]);
    while (queue.length && queue[0][0] <= i - k) queue.shift();
  }
  return max;
};
