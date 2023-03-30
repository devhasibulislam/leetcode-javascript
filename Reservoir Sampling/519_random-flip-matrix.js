/**
 * Title: Random Flip Matrix
 * Description: There is an m x n binary grid matrix with all the values set 0 initially. Design an algorithm to randomly pick an index (i, j) where matrix[i][j] == 0 and flips it to 1. All the indices (i, j) where matrix[i][j] == 0 should be equally likely to be returned.
 * Author: Hasibul Islam
 * Date: 30/03/2023
 */

/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function (m, n) {
  this.m = m;
  this.n = n;
  this.total = m * n;
  this.flipped = new Set();
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function () {
  let index = Math.floor(Math.random() * this.total);
  while (this.flipped.has(index)) {
    index = Math.floor(Math.random() * this.total);
  }
  this.flipped.add(index);
  return [Math.floor(index / this.n), index % this.n];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function () {
  this.flipped.clear();
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
