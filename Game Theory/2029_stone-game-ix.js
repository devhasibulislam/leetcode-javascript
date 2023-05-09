/**
 * Title: Stone Game IX
 * Description: Alice and Bob continue their games with stones. There is a row of n stones, and each stone has an associated value. You are given an integer array stones, where stones[i] is the value of the ith stone.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  // get the mod 3 of each stone and count each of their frequencies.
  // We only care up to the number 3 since we care of if the sum of
  // the numbers are able to be mod by 3
  const freqCount = new Array(3).fill(0);
  for (const stone of stones) {
    freqCount[stone % 3]++;
  }

  // Since 2 0's cancel each other out we can remove them from the
  // frequency counts to save on the number of backtrack calls
  freqCount[0] = freqCount[0] % 2;

  let sum = 0;
  const cache = {};
  // backtrack and return true if the current player wins
  const backtrack = (isAliceTurn) => {
    // if there are no stones remaining return Bob winning
    const numStonesRemaining = freqCount.reduce((sum, count) => sum + count);
    if (numStonesRemaining === 0) return !isAliceTurn;

    // check the cache to see if we have visited this result before
    const cacheKey = String(freqCount);
    if (cache[cacheKey] !== undefined) return cache[cacheKey];

    for (let i = 0; i < 3; i++) {
      // if there are no more of those number or if we lose
      // skip the number
      if (freqCount[i] === 0 || (sum + i) % 3 === 0) continue;

      freqCount[i]--;
      sum += i;

      // We need to save the result of the backtrack call
      // so that we can put back the values
      const canWeWin = !backtrack(!isAliceTurn);

      freqCount[i]++;
      sum -= i;

      // If we can win this round we return true
      if (canWeWin) {
        return (cache[cacheKey] = true);
      }
    }
    return (cache[cacheKey] = false);
  };
  return backtrack(true);
};
