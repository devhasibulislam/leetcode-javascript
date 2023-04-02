/**
 * Title: Sort Characters By Frequency
 * Description: Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string. Return the sorted string. If there are multiple answers, return any of them.
 * Author: Hasibul Islam
 * Date: 02/04/2023
 */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const mapChars = s.split("").reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
  }, {});

  const sortedChars = Object.entries(mapChars).sort((a, b) => b[1] - a[1]);
  return sortedChars.reduce((acc, [ch, count]) => {
    acc += ch.repeat(count);
    return acc;
  }, "");
};

console.log(frequencySort("tree"));
