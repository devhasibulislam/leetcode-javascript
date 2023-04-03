/**
 * Title: K Closest Points to Origin
 * Description: Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
 * Author: Hasibul Islam
 * Date: 03/04/2023
 */

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const arr = [];
  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    arr.push([x * x + y * y, i]);
  }

  arr.sort((a, b) => a[0] - b[0]);
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(points[arr[i][1]]);
  }
  return res;
};

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);
