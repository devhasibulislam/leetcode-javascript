/**
 * Title: Best Position for a Service Centre
 * Description: A delivery company wants to build a new service center in a new city. The company knows the positions of all the customers in this city on a 2D-Map and wants to build the new center in a position such that the sum of the euclidean distances to all customers is minimum.
 * Author: Hasibul Islam
 * Date: 14/04/2023
 */

/**
 * @param {number[][]} positions
 * @return {number}
 */
const getMinDistSum = function (pos) {
  const sum = (x, y) =>
    pos.reduce(
      (acc, [x1, y1]) => acc + Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2),
      0
    );

  let left = 0;
  let bottom = 0;
  let right = 100;
  let top = 100;
  let min = Infinity;
  let minX = 0;
  let minY = 0;
  for (let delta = 10; delta >= 10 ** -4; delta /= 10) {
    for (let x = left; x <= right; x += delta) {
      for (let y = bottom; y <= top; y += delta) {
        const dis = sum(x, y);
        if (min > dis) {
          min = dis;
          minX = x;
          minY = y;
        }
      }
    }
    left = minX - delta;
    bottom = minY - delta;
    right = minX + delta;
    top = minY + delta;
  }
  return min;
};
