/**
 * Title: Maximum Number of Coins You Can Get
 * Description: Given an array of integers piles where piles[i] is the number of coins in the ith pile.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => a - b);
  let j = piles.length - 2,
    ans = 0;
  for (let i = 0; i < piles.length / 3; i++) {
    ans += piles[j];
    j = j - 2;
  }
  return ans;
};
