/**
 * Title: Random Point in Non-overlapping Rectangles
 * Description: You are given an array of non-overlapping axis-aligned rectangles rects where rects[i] = [ai, bi, xi, yi] indicates that (ai, bi) is the bottom-left corner point of the ith rectangle and (xi, yi) is the top-right corner point of the ith rectangle. Design an algorithm to pick a random integer point inside the space covered by one of the given rectangles. A point on the perimeter of a rectangle is included in the space covered by the rectangle.
 * Author: Hasibul Islam
 * Date: 30/03/2023
 */

/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
  this.rects = rects;
  this.map = new Map();
  this.total = 0;
  for (let i = 0; i < rects.length; i++) {
    const [a, b, x, y] = rects[i];
    this.total += (x - a + 1) * (y - b + 1);
    this.map.set(i, this.total);
  }
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
  const index = Math.floor(Math.random() * this.total);
  let i = 0;
  while (this.map.get(i) <= index) {
    i++;
  }
  const [a, b, x, y] = this.rects[i];
  const x1 = Math.floor(Math.random() * (x - a + 1));
  const y1 = Math.floor(Math.random() * (y - b + 1));
  return [a + x1, b + y1];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
