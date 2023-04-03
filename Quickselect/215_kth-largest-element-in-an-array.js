/**
 * Title: Kth Largest Element in an Array
 * Description: Given an integer array nums and an integer k, return the kth largest element in the array.
 * Author: Hasibul Islam
 * Date: 03/04/2023
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const arr = [...nums];
  arr.sort((a, b) => b - a);
  return arr[k - 1];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
