/**
 * Title: Longest Happy Prefix
 * Description: A string is called a happy prefix if is a non-empty prefix which is also a suffix (excluding itself).
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
  if (s.length < 2) {
    return "";
  }
  let i = s.length - 1;
  while (s.slice(0, i) !== s.slice(-i)) {
    i--;
  }
  return s.slice(0, i);
};
