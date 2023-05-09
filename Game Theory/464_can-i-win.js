/**
 * Title: Can I Win
 * Description: In the "100 game" two players take turns adding, to a running total, any integer from 1 to 10. The player who first causes the running total to reach or exceed 100 wins.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
function canIWin(maxChoosableInteger, desiredTotal) {
  if (desiredTotal === 0) return true;
  if ((maxChoosableInteger * (maxChoosableInteger + 1)) / 2 < desiredTotal)
    return false;

  const initialChoices = Math.pow(2, maxChoosableInteger) - 1;

  const dp = [];

  function DP(choices, total) {
    if (total <= 0) return false;

    if (dp[choices] !== undefined) {
      return dp[choices];
    }

    let pow = 0;
    let choicesCopy = choices;

    dp[choices] = false;

    while (choicesCopy > 0) {
      if (choicesCopy % 2 && !DP(choices - (1 << pow), total - pow - 1)) {
        dp[choices] = true;
        break;
      }
      choicesCopy >>= 1;
      pow++;
    }

    return dp[choices];
  }

  return DP(initialChoices, desiredTotal);
}
