/**
 * Title: Contains Duplicate III
 * Description: You are given an integer array nums and two integers indexDiff and valueDiff.
 * Author: Hasibul Islam
 * Date: 02/04/2023
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let buckets = {};

  for (let idx in nums) {
    const num = nums[idx];
    const b = Math.floor(num / (t + 1));
    if (buckets[b] !== undefined) return true;
    if (buckets[b - 1] !== undefined && num - buckets[b - 1] <= t) return true;
    if (buckets[b + 1] !== undefined && buckets[b + 1] - num <= t) return true;

    buckets[b] = num;
    if (idx >= k) delete buckets[Math.floor(nums[idx - k] / (t + 1))];
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
