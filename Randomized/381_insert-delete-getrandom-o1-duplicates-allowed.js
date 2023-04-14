/**
 * Title: Insert Delete GetRandom O(1) - Duplicates allowed
 * Description: RandomizedCollection is a data structure that contains a collection of numbers, possibly duplicates (i.e., a multiset). It should support inserting and removing specific elements and also reporting a random element.
 * Author: Hasibul Islam
 * Date: 14/04/2023
 */

var RandomizedCollection = function () {
  this.arr = [];
  this.map = new Map(); // < val, set<index> >
};

RandomizedCollection.prototype.insert = function (val) {
  this.arr.push(val);
  if (!this.map.has(val)) {
    this.map.set(val, new Set());
    this.map.get(val).add(this.arr.length - 1);
    return true;
  } else {
    this.map.get(val).add(this.arr.length - 1);
    return false;
  }
};

RandomizedCollection.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  }

  // find one index to remove
  var indexes = Array.from(this.map.get(val));
  var idx = indexes[0];
  var n = this.arr.length;
  var last = this.arr[n - 1];

  // swap with current last element in array
  [this.arr[idx], this.arr[n - 1]] = [this.arr[n - 1], this.arr[idx]];

  // clean up
  this.arr.pop();
  this.map.get(val).delete(idx);
  if (idx !== n - 1) {
    // Bug: update swapped index if needed
    this.map.get(last).delete(n - 1);
    this.map.get(last).add(idx);
  }
  if (this.map.get(val).size === 0) {
    this.map.delete(val);
  }

  return true;
};

RandomizedCollection.prototype.getRandom = function () {
  var n = this.arr.length;
  var idx = Math.floor(Math.random() * n);
  return this.arr[idx];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
