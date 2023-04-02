/**
 * Title: Top K Frequent Elements
 * Description: Given an array of strings words and an integer k, return the k most frequent strings. Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
 * Author: Hasibul Islam
 * Date: 02/04/2023
 */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const mappings = {};
  for (let i = 0; i < words.length; i++) {
    mappings[words[i]] = mappings[words[i]] + 1 || 1;
  }
  const sorted = Object.keys(mappings).sort((a, b) => {
    if (mappings[b] === mappings[a]) {
      return a > b ? 1 : -1;
    }
    return mappings[b] - mappings[a];
  });
  return sorted.slice(0, k);
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
