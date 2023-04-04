/**
 * Title: Soup Servings
 * Description: There are two types of soup: type A and type B. Initially, we have n ml of each type of soup. There are four kinds of operations: Serve 100 ml of soup A and 0 ml of soup B, Serve 75 ml of soup A and 25 ml of soup B, Serve 50 ml of soup A and 50 ml of soup B, and Serve 25 ml of soup A and 75 ml of soup B. When we serve some soup, we give it to someone, and we no longer have it. Each turn, we will choose from the four operations with an equal probability 0.25. If the remaining volume of soup is not enough to complete the operation, we will serve as much as possible. We stop once we no longer have some quantity of both types of soup. Note that we do not have an operation where all 100 ml's of soup B are used first. Return the probability that soup A will be empty first, plus half the probability that A and B become empty at the same time. Answers within 10-5 of the actual answer will be accepted.
 * Author: Hasibul Islam
 * Date: 04/04/2023
 */

/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function (N) {
  if (N >= 5000) return 1;

  const recur = (A, B, memo = new Map()) => {
    if (A <= 0 && B <= 0) return 0.5;
    if (A <= 0) return 1;
    if (B <= 0) return 0;

    let key = `A-${A} B-${B}`;
    if (memo.has(key)) return memo.get(key);

    let r =
      0.25 *
      (recur(A - 100, B, memo) +
        recur(A - 75, B - 25, memo) +
        recur(A - 50, B - 50, memo) +
        recur(A - 25, B - 75, memo));
    memo.set(key, r);
    return r;
  };

  return recur(N, N);
};

console.log(soupServings(5));
