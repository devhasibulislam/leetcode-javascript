/**
 * Title: Longest Chunked Palindrome Decomposition
 * Description: Return the largest possible value of k.
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function (text) {
  const indexes = new Map();
  for (let i = 0; i < text.length; i++) {
    const prev = indexes.get(text[i]) || [];
    prev.push(i);
    indexes.set(text[i], prev);
  }

  const solve = (s = 0, e = text.length - 1) => {
    if (s === e) return 1;
    if (s > e) {
      return 0;
    }
    const target = text[s];
    const idx = indexes.get(target);
    if (idx.length === 1) return 1;
    const idx_end = text.length - s - 1;

    let next = 0;

    for (let i = idx.length - 1; i >= 0; i--) {
      const len = idx_end + 1 - idx[i];
      if (idx[i] <= s) break;
      if (idx[i] > e) continue;

      const end = text.slice(idx[i], idx[i] + len);
      const start = text.slice(s, s + len);
      if (end === start) {
        next = len;
        break;
      }
    }
    if (next === 0) {
      return 1;
    }
    return 2 + solve(s + next, e - next);
  };

  return solve();
};
