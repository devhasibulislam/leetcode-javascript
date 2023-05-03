/**
 * Title: Vowels of All Substrings
 * Description: Given a string word, return the sum of the number of vowels ('a', 'e', 'i', 'o', and 'u') in every substring of word.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function (word) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let total = 0;
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.has(word[i])) {
      count += i + 1;
    }
    total += count;
  }
  return total;
};
