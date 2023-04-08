/**
 * Title: Minimize Maximum of Array
 * Description: You are given a 0-indexed array nums comprising of n non-negative integers.
 * Author: Hasibul Islam
 * Date: 08/04/2023
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function (nums) {
  let sum = 0,
    res = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    res = Math.max(res, Math.floor((sum + i) / (i + 1)));
  }
  return res;
};

module.exports = minimizeArrayValue;
