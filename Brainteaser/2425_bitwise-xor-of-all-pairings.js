/**
 * Title: Bitwise XOR of All Pairings
 * Description: You are given two 0-indexed arrays, nums1 and nums2, consisting of non-negative integers. There exists another array, nums3, which contains the bitwise XOR of all pairings of integers between nums1 and nums2 (every integer in nums1 is paired with every integer in nums2 exactly once).
 * Author: Hasibul Islam
 * Date: 15/04/2023
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  let result = 0;

  if (nums1.length & 1) {
    for (const val of nums2) result ^= val;
  }
  if (nums2.length & 1) {
    for (const val of nums1) result ^= val;
  }

  return result;
};
