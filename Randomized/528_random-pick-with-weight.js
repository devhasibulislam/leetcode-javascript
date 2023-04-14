/**
 * Title: Random Pick with Weight
 * Description: You are given a 0-indexed array of positive integers w where w[i] describes the weight of the ith index.
 * Author: Hasibul Islam
 * Date: 14/04/2023
 */

/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.w = w;
  this.sum = w.reduce((a, v) => a + v, 0);
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let rv = Math.random();
  let s = 0;
  let ans = 0;
  this.w.some((v, i) => {
    s += v / this.sum;
    if (s > rv) {
      ans = i;
      return true;
    }
  });
  return ans;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
