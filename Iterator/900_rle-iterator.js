/**
 * Title: RLE Iterator
 * Description: We can use run-length encoding (i.e., RLE) to encode a sequence of integers. In a run-length encoded array of even length encoding (0-indexed), for all even i, encoding[i] tells us the number of times that the non-negative integer value encoding[i + 1] is repeated in the sequence.
 * Author: Hasibul Islam
 * Date: 08/04/2023
 */

/**
 * @param {number[]} encoding
 */
var RLEIterator = function (encoding) {
  this.encoding = encoding;
  this.index = 0;
};

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function (n) {
  while (this.index < this.encoding.length) {
    if (n <= this.encoding[this.index]) {
      this.encoding[this.index] -= n;
      return this.encoding[this.index + 1];
    } else {
      n -= this.encoding[this.index];
      this.index += 2;
    }
  }
  return -1;
};

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */
