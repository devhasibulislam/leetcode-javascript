/**
 * Title: Rectangle Area II
 * Description: You are given a 2D array of axis-aligned rectangles. Each rectangle[i] = [xi1, yi1, xi2, yi2] denotes the ith rectangle where (xi1, yi1) are the coordinates of the bottom-left corner, and (xi2, yi2) are the coordinates of the top-right corner.
 * Author: Hasibul Islam
 * Date: 30/03/2023
 */

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function (rectangles) {
  const MOD = 10 ** 9 + 7;
  const xs = new Set();
  const ys = new Set();
  for (const [x1, y1, x2, y2] of rectangles) {
    xs.add(x1);
    xs.add(x2);
    ys.add(y1);
    ys.add(y2);
  }
  const xValues = Array.from(xs).sort((a, b) => a - b);
  const yValues = Array.from(ys).sort((a, b) => a - b);
  const xIndex = new Map();
  const yIndex = new Map();
  for (let i = 0; i < xValues.length; i++) {
    xIndex.set(xValues[i], i);
  }
  for (let i = 0; i < yValues.length; i++) {
    yIndex.set(yValues[i], i);
  }
  const grid = new Array(xValues.length)
    .fill(0)
    .map(() => new Array(yValues.length).fill(0));
  for (const [x1, y1, x2, y2] of rectangles) {
    for (let i = xIndex.get(x1); i < xIndex.get(x2); i++) {
      for (let j = yIndex.get(y1); j < yIndex.get(y2); j++) {
        grid[i][j] = 1;
      }
    }
  }
  let area = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        area += (xValues[i + 1] - xValues[i]) * (yValues[j + 1] - yValues[j]);
        area %= MOD;
      }
    }
  }
  return area;
};

console.log(
  rectangleArea([
    [0, 0, 2, 2],
    [1, 0, 2, 3],
    [1, 0, 3, 1],
  ])
);
