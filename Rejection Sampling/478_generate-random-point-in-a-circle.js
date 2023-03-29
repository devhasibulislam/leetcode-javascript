/**
 * Title: Generate Random Point in a Circle
 * Description: Given the radius and the position of the center of a circle, implement the function randPoint which generates a uniform random point inside the circle.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {
  this.radius = radius;
  this.x_center = x_center;
  this.y_center = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
  const x = Math.random() * 2 - 1;
  const y = Math.random() * 2 - 1;
  if (x * x + y * y > 1) return this.randPoint();
  return [this.x_center + this.radius * x, this.y_center + this.radius * y];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
