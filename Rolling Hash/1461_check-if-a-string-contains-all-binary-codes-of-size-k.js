/**
 * Title: Check if a String Contains All Binary Codes of Size K
 * Description: Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  const allowedCombinations = new Set();
  let totalAllowedcombinations;
  const getTotalCombinations = () => {
    totalAllowedcombinations = Math.pow(2, k);
  };
  const compute = () => {
    for (let counter = 0; counter < s.length; counter++) {
      let curString = s.substring(counter, k + counter);
      if (curString.length === k) allowedCombinations.add(curString);
    }
  };
  getTotalCombinations();
  compute();
  return allowedCombinations.size == totalAllowedcombinations;
};
