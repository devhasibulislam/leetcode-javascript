/**
 * Title: Random Pick Index
 * Description: Given an integer array nums with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.
 * Author: Hasibul Islam
 * Date: 30/03/2023
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (this.map.has(nums[i])) {
      this.map.get(nums[i]).push(i);
    } else {
      this.map.set(nums[i], [i]);
    }
  }
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const indices = this.map.get(target);
  const index = Math.floor(Math.random() * indices.length);
  return indices[index];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
