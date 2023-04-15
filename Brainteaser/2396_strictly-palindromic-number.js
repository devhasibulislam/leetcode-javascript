/**
 * Title: Strictly Palindromic Number
 * Description: An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.
 * Author: Hasibul Islam
 * Date: 15/04/2023
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  for (let i = 2; i <= n - 2; i++) {
    let val = n.toString(i);
    if (val !== val.split("").reverse().join("")) return false;
  }
  return true;
};
