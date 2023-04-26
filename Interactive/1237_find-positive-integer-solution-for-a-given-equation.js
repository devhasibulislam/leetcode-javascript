/**
 * Title: Find Positive Integer Solution for a Given Equation
 * Description: Given a callable function f(x, y) with a hidden formula and a value z, reverse engineer the formula and return all positive integer pairs x and y where f(x,y) == z. You may return the pairs in any order.
 * Author: Hasibul Islam
 * Date: 26/04/2023
 */

/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
  const res = [];
  let x = 1;
  let y = 1000;

  while (x < 1001 && y > 0) {
    const val = customfunction.f(x, y);
    if (val > z) {
      y -= 1;
    } else if (val < z) {
      x += 1;
    } else {
      res.push([x, y]);
      x += 1;
      y -= 1;
    }
  }
  return res;
};
