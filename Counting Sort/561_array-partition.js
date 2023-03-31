/**
 * Title: Array Partition
 * Description: Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
 * Author: Hasibul Islam
 * Date: 31/03/2023
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sum = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));
