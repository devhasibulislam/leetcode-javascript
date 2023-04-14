/**
 * Title: Insert Delete GetRandom O(1)
 * Description: You must implement the functions of the class such that each function works in average O(1) time complexity.
 * Author: Hasibul Islam
 * Date: 14/04/2023
 */

var RandomizedSet = function () {
  this.set = [];
  // record the value index to simpilfy the element swap
  this.valueIndexMap = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.valueIndexMap.has(val)) {
    return false;
  }
  this.set.push(val);
  this.valueIndexMap.set(val, this.set.length - 1);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.valueIndexMap.has(val)) {
    return false;
  }
  const indexToRemove = this.valueIndexMap.get(val);
  // update valueIndexMap first
  this.valueIndexMap.set(this.set[this.set.length - 1], indexToRemove);
  this.valueIndexMap.delete(val);
  this.set[indexToRemove] = this.set[this.set.length - 1];
  this.set[this.set.length - 1] = val;
  this.set.pop();
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.set[Math.floor(Math.random() * this.set.length)];
};
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
