/**
 * Title: Longest Palindromic Subsequence
 * Description: Given a string s, find the longest palindromic subsequence's length in s.
 * Author: Hasibul Islam
 * Date: 14/04/2023
 */

/**
 * @param {string} s
 * @return {number}
 */
function longestPalindromeSubseq(str) {
  const len = str.length - 1;
  const memo = [];
  for (let i = 0; i <= len; i++) {
    memo.push([]);
    for (let k = len; k >= 0; k--) {
      if (str[i] === str[k])
        memo[i][k] = ((memo[i - 1] && memo[i - 1][k + 1]) || 0) + 1;
      else
        memo[i][k] = Math.max(
          memo[i][k + 1] || 0,
          (memo[i - 1] && memo[i - 1][k]) || 0
        );
    }
  }
  return memo[len][0];
}
