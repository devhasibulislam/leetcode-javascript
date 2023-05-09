/**
 * Title: Stone Game VI
 * Description: The winner is the person with the most points after all the stones are chosen. If both players have the same amount of points, the game results in a draw. Both players will play optimally. Both players know the other's values.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function (aliceValues, bobValues) {
  const length = bobValues.length;

  const turns = [];
  for (let i = 0; i < length; i++) {
    // in order to maximize profit for Bob and Alice calculate the sum of their values
    turns.push({ idx: i, sum: aliceValues[i] + bobValues[i] });
  }

  // order the turns by the sum in descending order, so the most valuable turn will be the first
  turns.sort((a, b) => b.sum - a.sum);

  // let's start the game turn by turn. The result will store the difference between Alice and Bob scores
  let result = 0;
  for (let i = 0; i < length; i++) {
    const { idx } = turns[i];
    if (i % 2 === 0) {
      // for all odd turns, we add to the result of Alice's value
      result += aliceValues[idx];
    } else {
      // for all even turns, we subtract from the result of Bob's value
      result -= bobValues[idx];
    }
  }

  // if the result is 0 return draw. Otherwise, return the winner
  if (!result) return result;
  return result > 0 ? 1 : -1;
};
