/**
 * Title: Chalkboard XOR Game
 * Description: You are given an array of integers nums represents the numbers written on a chalkboard.
 * Author: Hasibul Islam
 * Date: 15/04/2023
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function (nums) {
  let n = nums.length;
  let xor = 0;
  for (let i = 0; i < n; i++) {
    let temp = nums[i];
    xor = xor ^ temp;
  }
  if (xor != 0 && n % 2 != 0) return false;
  return true;
};
