/**
 * Title: Shuffle an Array
 * Description: Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.
 * Author: Hasibul Islam
 * Date: 14/04/2023
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.cache = new Array(...nums);
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.cache;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const len = this.nums.length;
  for (let i = 0; i < len; i++) {
    const rand = Math.round(Math.random() * (len - 1) + 0);
    [this.nums[i], this.nums[rand]] = [this.nums[rand], this.nums[i]];
  }
  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
