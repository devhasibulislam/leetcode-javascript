/**
 * Title: Stone Game V
 * Description: There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array stoneValue.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function (stones) {
  let bestAns = 0;
  let stoneSum = stones.reduce((sum, current) => {
    return sum + current;
  }, 0);

  function splitAndAdd(stoneSum, ans, leftBound, rightBound) {
    if (rightBound === leftBound) {
      return ans;
    }

    if (rightBound - leftBound === 1) {
      return ans + Math.min(stones[leftBound], stones[rightBound]);
    }
    let bestSoFar = 0;
    let leftSum = 0;
    let rightSum = stoneSum;
    for (let i = leftBound; i <= rightBound; i++) {
      leftSum += stones[i];
      rightSum -= stones[i];

      if (2 * Math.min(leftSum, rightSum) + ans < bestAns) {
        continue;
      }
      if (leftSum === rightSum) {
        bestSoFar = Math.max(
          splitAndAdd(leftSum, ans + leftSum, leftBound, i),
          bestSoFar
        );
        bestSoFar = Math.max(
          splitAndAdd(rightSum, ans + rightSum, i + 1, rightBound),
          bestSoFar
        );
      } else {
        leftSum > rightSum
          ? (bestSoFar = Math.max(
              splitAndAdd(rightSum, ans + rightSum, i + 1, rightBound),
              bestSoFar
            ))
          : (bestSoFar = Math.max(
              splitAndAdd(leftSum, ans + leftSum, leftBound, i),
              bestSoFar
            ));
      }
    }

    bestAns = Math.max(bestAns, bestSoFar);
    return bestSoFar;
  }

  let ans = splitAndAdd(stoneSum, 0, 0, stones.length - 1);
  return ans;
};
