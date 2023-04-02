/**
 * Title: Top K Frequent Elements
 * Description: Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * Author: Hasibul Islam
 * Date: 02/04/2023
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  nums.sort((a, b) => a - b); // make sure it is sorted
  const result = [];
  const table = Array(nums.length).fill(0);
  for (let i = 0; i < table.length; i++) {
    if (i === 0) {
      table[0] = 1;
      continue; // first element 1 count
    }
    if (nums[i] === nums[i - 1]) {
      // current one is same as prev
      // add 1
      table[i] = table[i - 1] + 1;
    } else {
      table[i] = 1;
    }
  }
  while (k > 0) {
    // get the max index
    const max = Math.max(...table);
    const maxIndex = table.indexOf(max);
    // get the max integer using this index
    result.push(nums[maxIndex]);
    // table remove the most freq integer counting
    table.splice(maxIndex - max + 1, max);
    nums.splice(maxIndex - max + 1, max);
    k -= 1;
  }
  return result;
};

// problem asking for MAX
// looks like a DP problem
// 1. visual example

// K = 1
// 1
// 1

// K = 2
// 1, 1, 1, 2, 2, 3 => [1]

// K = 1
// 2, 2, 3 => [2]

// K = 0
// 3 => []

console.log(topKFrequent([1], 1));
