/**
 * Title: Count Sorted Vowel Strings
 * Description: Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  const vowels = "aeiou";

  function backtrack(index = 0, strLength = 0, memo = {}) {
    const key = index + "_" + strLength;

    if (memo[key]) return memo[key];

    if (strLength === n) {
      return 1;
    }

    if (strLength > n) return 0;

    let alls = 0;
    for (let i = index; i < 5; i++) {
      alls += backtrack(i, strLength + 1, memo);
    }

    memo[key] = alls;

    return alls;
  }

  return backtrack();
};
