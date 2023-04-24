/**
 * Title: Find the Index of the First Occurrence in a String
 * Description: Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }
        if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));
