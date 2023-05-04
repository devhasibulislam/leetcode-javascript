/**
 * Title: Minimum Cost of a Path with Special Roads
 * Description: You are given an array start where start = [startX, startY] represents your initial position (startX, startY) in a 2D space. You are also given the array target where target = [targetX, targetY] represents your target position (targetX, targetY).
 * Author: Hasibul Islam
 * Date: 04/05/2023
 */

/**
 * @param {number[]} start
 * @param {number[]} target
 * @param {number[][]} specialRoads
 * @return {number}
 */
const getDist2PointCoord = (x1, y1, x2, y2) =>
  Math.abs(x2 - x1) + Math.abs(y2 - y1);

var minimumCost = function (startP, targetP, edges) {
  let [sx, sy] = startP;
  let [tx, ty] = targetP;

  // optimization - not a must
  edges = edges.filter(
    ([x1, y1, x2, y2, d]) => d < getDist2PointCoord(x1, y1, x2, y2)
  );

  let minDist2Target = getDist2PointCoord(sx, sy, tx, ty);
  let visited = new Array(edges.length);
  let minDist2vMap = new Map();

  function dfs(xv, yv, dist2v) {
    if (dist2v >= minDist2Target) return;

    let vKey = xv + "," + yv;
    if (minDist2vMap.get(vKey) <= dist2v) return;
    minDist2vMap.set(vKey, dist2v);

    minDist2Target = Math.min(
      minDist2Target,
      dist2v + getDist2PointCoord(xv, yv, tx, ty)
    );
    if (xv == targetP[0] && yv == targetP[1]) return;

    for (let i = 0; i < visited.length; i++) {
      if (visited[i]) continue;
      let [x1, y1, x2, y2, d] = edges[i];
      visited[i] = true;
      dfs(x2, y2, dist2v + getDist2PointCoord(xv, yv, x1, y1) + d);
      visited[i] = false;
    }
  }

  dfs(sx, sy, 0);
  return minDist2Target;
};
