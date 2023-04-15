/**
 * Title: Longest Subarray With Maximum Bitwise AND
 * Description: You are given an integer array nums of size n.
 * Author: Hasibul Islam
 * Date: 15/04/2023
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const maxVal = Math.max(...nums);
  let result = 1;

  let outcome = 0;
  for (const val of nums.values()) {
    if (val === maxVal) {
      outcome++;
      result = Math.max(result, outcome);
    } else {
      outcome = 0;
    }
  }

  return result;
};
