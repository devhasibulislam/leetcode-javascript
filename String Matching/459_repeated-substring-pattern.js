/**
 * Title: Repeated Substring Pattern
 * Description: Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
 * Author: Hasibul Islam
 * Date: 25/04/2023
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let sub = "";
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    sub += s[i];
    if (sub.repeat(s.length / sub.length) === s) return true;
  }
  return false;
};
