/**
 * Title: Moving Stones Until Consecutive
 * Description: There are three stones in different positions on the X-axis. You are given three integers a, b, and c, the positions of the stones.
 * Author: Hasibul Islam
 * Date: 15/04/2023
 */

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
const numMovesStones = (a, b, c) => {
  const [x, y, z] = [Math.abs(a - b), Math.abs(b - c), Math.abs(c - a)];
  const [min, max] = [Math.min(x, y, z), Math.max(x, y, z)];
  return 2 === max ? [0, 0] : [min < 3 ? 1 : 2, max - 2];
};
