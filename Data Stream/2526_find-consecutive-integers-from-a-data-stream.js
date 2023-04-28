/**
 * Title: Find Consecutive Integers from Data Stream
 * Description: For a stream of integers, implement a data structure that checks if the last k integers parsed in the stream are equal to value.
 * Author: Hasibul Islam
 * Date: 28/04/2023
 */

/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function (value, k) {
  this.value = value;
  this.k = k;
  this.lastStream = null;
};

/**
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function (num) {
  let currentCount = 1;
  if (this.lastStream && this.lastStream[0] === num) {
    currentCount = this.lastStream[1] + 1;
  }

  this.lastStream = [num, currentCount];

  return num == this.value && currentCount >= this.k;
};

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
