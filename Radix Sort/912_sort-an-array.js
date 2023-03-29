/**
 * Title: Sort an Array
 * Description: Given an array of integers nums, sort the array in ascending order and return it.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
};

const mergeSort = (nums, left, right) => {
  if (left >= right) return;

  const mid = Math.floor((right - left) / 2) + left;
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);
  merge(nums, left, mid, mid + 1, right);
};

const merge = (nums, leftStart, leftEnd, rightStart, rightEnd) => {
  const n = leftEnd - leftStart + 1 + (rightEnd - rightStart) + 1;
  const sorted = new Array(n);
  const origStart = leftStart;
  let i = 0;
  while (leftStart <= leftEnd || rightStart <= rightEnd) {
    if (
      (leftStart <= leftEnd && nums[leftStart] <= nums[rightStart]) ||
      rightStart > rightEnd
    ) {
      sorted[i] = nums[leftStart];
      leftStart += 1;
    } else {
      sorted[i] = nums[rightStart];
      rightStart += 1;
    }

    i += 1;
  }

  i = origStart;
  sorted.forEach((num) => {
    nums[i] = num;
    i += 1;
  });
};

console.log(sortArray([5, 2, 3, 1]));
