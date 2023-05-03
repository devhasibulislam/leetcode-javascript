/**
 * Title: Sum of All Subset XOR Totals
 * Description: The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let sum = 0;
  dfs(0, 0);
  return sum;

  function dfs(val, i) {
    if (i < nums.length) {
      dfs(val ^ nums[i], i + 1); // to XOR with nums[i].
      dfs(val, i + 1); // NOT to XOR.
    }
    if (i == nums.length) {
      sum += val;
    }
  }
};
