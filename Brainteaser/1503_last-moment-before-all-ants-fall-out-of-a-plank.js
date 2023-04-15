/**
 * Title: Last Moment Before All Ants Fall Out of a Plank
 * Description: We have a wooden plank of the length n units. Some ants are walking on the plank, each ant moves with a speed of 1 unit per second. Some of the ants move to the left, the other move to the right.
 * Author: Hasibul Islam
 * Date: 15/04/2023
 */

/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
  let max = 0;
  for (let ele of left) {
    max = Math.max(ele, max);
  }
  for (let ele of right) {
    max = Math.max(n - ele, max);
  }
  return max;
};
