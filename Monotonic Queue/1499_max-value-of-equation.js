/**
 * Title: Max Value of Equation
 * Description: You are given an array points containing the coordinates of points on a 2D plane, sorted by the x-values, where points[i] = [xi, yi] such that xi < xj for all 1 <= i < j <= points.length. You are also given an integer k.
 * Author: Hasibul Islam
 * Date: 11/04/2023
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function (points, k) {
  let result = -Infinity;
  let queue = [];
  for (let point of points) {
    while (queue.length && point[0] - queue[0][1] > k) {
      queue.shift();
    }
    if (queue.length) {
      result = Math.max(result, queue[0][0] + point[1] + point[0]);
    }
    while (queue.length && point[1] - point[0] > queue[queue.length - 1][0]) {
      queue.pop();
    }
    queue.push([point[1] - point[0], point[0]]);
  }
  return result;
};
