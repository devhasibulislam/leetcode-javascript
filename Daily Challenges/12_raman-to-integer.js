/**
 * Title: Roman to Integer
 * Description: Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      sum -= roman[s[i]];
    } else {
      sum += roman[s[i]];
    }
  }
  return sum;
};

console.log(romanToInt("III"));
