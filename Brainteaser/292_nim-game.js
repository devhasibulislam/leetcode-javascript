/**
 * Title: Nim Game
 * Description: Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.
 * Author: Hasibul Islam
 * Date: 15/04/2023
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0;
};
