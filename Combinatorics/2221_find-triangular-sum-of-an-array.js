/**
 * Title: Find Triangular Sum of an Array
 * Description: You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  while (nums.length > 1) {
    for (let i = 0; i + 1 < nums.length; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    nums.pop();
  }
  return nums[0];
};
