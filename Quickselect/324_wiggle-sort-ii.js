/**
 * Title: Wiggle Sort II
 * Description: Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....
 * Author: Hasibul Islam
 * Date: 03/04/2023
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  const n = nums.length;
  const arr = [...nums];
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = (n - 1) >> 1;
  let k = n - 1;
  while (i < n) {
    nums[i] = arr[j--];
    if (i + 1 < n) {
      nums[i + 1] = arr[k--];
    }
    i += 2;
  }
  return nums;
};

console.log(wiggleSort([1, 5, 1, 1, 6, 4]));
