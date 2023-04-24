/**
 * Title: Last Stone Weight
 * Description: You are given an array of integers stones where stones[i] is the weight of the ith stone.
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    const first = stones.pop(); // largest
    const sec = stones.pop(); // second largest
    if (first !== sec) {
      stones.push(first - sec);
      stones.sort((a, b) => a - b);
    }
  }
  return stones.length === 0 ? 0 : stones[0];
};
