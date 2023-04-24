/**
 * Title: Maximum Product of the Length of Two Palindromic Substrings
 * Description: You are given a 0-indexed string s and are tasked with finding two non-intersecting palindromic substrings of odd length such that the product of their lengths is maximized.
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

function isPalindrome(s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

/**
 * @param {string} s
 * @return {number}
 */
function maxProduct(s) {
  const n = s.length;
  const palindromes = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; i - j >= 0 && i + j < n; j++) {
      if (
        s[i - j] === s[i + j] &&
        (j === 0 || isPalindrome(s.substring(i - j + 1, i + j)))
      ) {
        palindromes.push([i - j, i + j]);
      } else {
        break;
      }
    }
    for (let j = 0; i - j >= 0 && i + j + 1 < n; j++) {
      if (
        s[i - j] === s[i + j + 1] &&
        (j === 0 || isPalindrome(s.substring(i - j + 1, i + j + 2)))
      ) {
        palindromes.push([i - j, i + j + 1]);
      } else {
        break;
      }
    }
  }
  let maxProduct = 0;
  for (let i = 0; i < palindromes.length; i++) {
    for (let j = i + 1; j < palindromes.length; j++) {
      const [i1, j1] = palindromes[i];
      const [i2, j2] = palindromes[j];
      if (i2 > j1 || j2 < i1) {
        maxProduct = Math.max(maxProduct, (j1 - i1 + 1) * (j2 - i2 + 1));
      }
    }
  }
  return maxProduct;
}

console.log(maxProduct("ababbb")); // Output: 9 (palindromic substrings are "aba" and "bbb")
