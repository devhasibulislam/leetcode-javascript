/**
 * Title: Find the Kth Largest Integer in the Array
 * Description: You are given an array of strings nums and an integer k. Each string in nums represents an integer without leading zeros.
 * Author: Hasibul Islam
 * Date: 03/04/2023
 */

/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
  let arr = [...nums].map((x) => BigInt(x)).sort((a, b) => (a >= b ? -1 : 1));
  return arr[k - 1].toString();
};

console.log(kthLargestNumber(["3", "6", "7", "10"], 4));
