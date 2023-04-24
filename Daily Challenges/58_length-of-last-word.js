/**
 * Title: Length of Last Word
 * Description: Given a string s consisting of words and spaces, return the length of the last word in the string.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (count > 0) {
        return count;
      }
    } else {
      count++;
    }
  }
  return count;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
