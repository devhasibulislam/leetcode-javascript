/**
 * Title: Distinct Echo Substrings
 * Description: Return the number of distinct non-empty substrings of text that can be written as the concatenation of some string with itself (i.e. it can be written as a + a where a is some string).
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

/**
 * @param {string} text
 * @return {number}
 */
const distinctEchoSubstrings = (s) => {
  let n = s.length,
    res = new Set();
  for (let len = 1; len <= n >> 1; len++) {
    for (let i = 0; i + len <= n; i++) {
      let left = s.substr(i, len),
        right = s.substr(i + len, len);
      if (left == right) res.add(s.substr(i, 2 * len));
    }
  }
  return res.size;
};
