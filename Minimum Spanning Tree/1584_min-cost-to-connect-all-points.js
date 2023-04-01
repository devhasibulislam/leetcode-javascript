/**
 * Title: Min Cost to Connect All Points
 * Description: You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi]. The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val. Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.
 * Author: Hasibul Islam
 * Date: 01/04/2023
 */

/**
 * @param {number[][]} points
 * @return {number}
 */

var minCostConnectPoints = function (points) {
  let minIndex,
    minDistance = Number.MAX_SAFE_INTEGER,
    sum = 0;
  let distanceMap = {};
  let prevouslyTakenIndex = 0,
    taken = 1,
    takenMap = {};
  for (let i = 1; i < points.length; i++) {
    distanceMap[i] = Number.MAX_SAFE_INTEGER;
  }
  takenMap[prevouslyTakenIndex] = true;
  while (taken < points.length) {
    minDistance = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < points.length; i++) {
      if (takenMap[i] !== undefined) {
        continue;
      }
      let d = getDistance(prevouslyTakenIndex, i);
      distanceMap[i] = Math.min(distanceMap[i], d);
      if (distanceMap[i] < minDistance) {
        minDistance = distanceMap[i];
        minIndex = i;
      }
    }
    sum += minDistance;
    prevouslyTakenIndex = minIndex;
    takenMap[prevouslyTakenIndex] = true;
    taken++;
  }
  return sum;

  function getDistance(i, j) {
    return (
      Math.abs(points[i][0] - points[j][0]) +
      Math.abs(points[i][1] - points[j][1])
    );
  }
};

console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ])
); // 20
