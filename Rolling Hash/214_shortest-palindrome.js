/**
 * Title: Shortest Palindrome
 * Description: You are given a string s. You can convert s to a palindrome by adding characters in front of it. Return the shortest palindrome you can find by performing this transformation.
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

/**
 * @param {string} s
 * @return {string}
 */
const reverse = (s) => {
  let res = "";
  for (let i = s.length - 1; ~i; i--) {
    res += s[i];
  }
  return res;
};

const shortestPalindrome = (s) => {
  let t = reverse(s),
    n = s.length;
  for (let i = 0; i < n; i++) {
    let L = t.slice(0, i),
      R = t.slice(i);
    if (s.startsWith(R)) return L + s;
  }
  return "";
};
