/**
 * Title: Maximum Product of the Length of Two Palindromic Substrings
 * Description: You are given a 0-indexed string s and are tasked with finding two non-intersecting palindromic substrings of odd length such that the product of their lengths is maximized. More formally, you want to choose four integers i, j, k, l such that 0 <= i <= j < k <= l < s.length and both the substrings s[i...j] and s[k...l] are palindromes and have odd lengths. s[i...j] denotes a substring from index i to index j inclusive. Return the maximum possible product of the lengths of the two non-intersecting palindromic substrings. A palindrome is a string that is the same forward and backward. A substring is a contiguous sequence of characters in a string.
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

/**
 * @param {string} s
 * @return {number}
 */
function maxProduct(s) {
  let n = s.length;

  let dp = new Array(n).fill(0);
  let before = new Array(n).fill(0);
  let after = new Array(n).fill(0);

  let c = -1;
  let r = -1;

  for (let i = 0; i < n; i++) {
    let k = i <= r ? Math.min(dp[2 * c - i], r - i) : 0;
    let p = i - k;
    let q = i + k;

    while (p >= 0 && q < n && s[p] === s[q]) {
      before[q] = Math.max(before[q], q - p + 1);
      after[p] = Math.max(after[p], q - p + 1);
      p--;
      q++;
    }

    dp[i] = q - i - 1;

    if (q - 1 > r) {
      c = i;
      r = q - 1;
    }
  }

  for (let i = 1; i < n; i++) {
    before[i] = Math.max(before[i - 1], before[i]);
  }

  for (let i = n - 2; i >= 0; i--) {
    after[i] = Math.max(after[i + 1], after[i]);
  }

  let result = 0;

  for (let i = 1; i < n; i++) {
    result = Math.max(result, before[i - 1] * after[i]);
  }

  return result;
}

console.log(maxProduct("zaaaxbbby"));
