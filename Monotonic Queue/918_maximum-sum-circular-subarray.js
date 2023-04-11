/**
 * Title: Maximum Sum Circular Subarray
 * Description: Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.
 * Author: Hasibul Islam
 * Date: 11/04/2023
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let curMax = 0,
    curMin = 0,
    sum = 0,
    maxSum = nums[0],
    minSum = nums[0];

  for (let num of nums) {
    curMax = Math.max(curMax, 0) + num;
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(curMin, 0) + num;
    minSum = Math.min(minSum, curMin);
    sum += num;
  }
  return sum === minSum ? maxSum : Math.max(maxSum, sum - minSum);
};
