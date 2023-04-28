/**
 * Title: Online Stock Span
 * Description: Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.
 * Author: Hasibul Islam
 * Date: 28/04/2023
 */

let a;
var StockSpanner = function () {
  a = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  a.push(price);
  let count = 0;

  let j = a.length - 1;
  while (j >= 0) {
    if (a[j] <= price) {
      count += 1;
      j -= 1;
    } else {
      break;
    }
  }
  return count;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
