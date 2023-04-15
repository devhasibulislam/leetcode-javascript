/**
 * Title: Minimum Possible or
 * Description: You are given a 0-indexed integer array nums.
 * Author: Hasibul Islam
 * Date: 15/04/2023
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function (nums) {
  const mask = nums.reduce(
    (mask, num) => (num & (num - 1) ? mask : mask | (1 << Math.log2(num))),
    0
  );
  for (let bit = 0; bit < 32; bit += 1) {
    if (mask & (1 << bit)) continue;
    return 1 << bit;
  }
};
