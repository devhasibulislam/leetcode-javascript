/**
 * Title: Palindrome Number
 * Description: Given an integer x, return true if x is a palindrome, and false otherwise.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let reversed = 0;
  let original = x;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reversed === original;
};

console.log(isPalindrome(121));
