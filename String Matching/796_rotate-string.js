/**
 * Title: Rotate String
 * Description: Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
 * Author: Hasibul Islam
 * Date: 25/04/2023
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  return s.concat(s).includes(goal);
};
