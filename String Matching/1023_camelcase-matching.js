/**
 * Title: Camelcase Matching
 * Description: Given an array of strings queries and a string pattern, return a boolean array answer where answer[i] is true if queries[i] matches pattern, and false otherwise.
 * Author: Hasibul Islam
 * Date: 25/04/2023
 */

/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  const charLower = "([a-z]+)?";
  let restr = "";

  for (let i = 0; i < pattern.length; i++) {
    restr = restr + `${charLower}${pattern[i]}`;
  }

  const re = new RegExp("^" + restr + charLower + "$");

  const ans = queries.map((w) => re.test(w));

  return ans;
};
