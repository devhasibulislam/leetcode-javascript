/**
 * Title: Guess Number Higher or Lower
 * Description: We are playing the Guess Game.
 * Author: Hasibul Islam
 * Date: 26/04/2023
 */

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  var low = 1;
  var high = n;
  while (low <= high) {
    var mid = Math.ceil(low + (high - low) / 2);
    var res = guess(mid);
    if (res == 0) return mid;
    else if (res < 0) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};
