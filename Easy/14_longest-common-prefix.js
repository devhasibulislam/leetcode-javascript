/**
 * Title: Longest Common Prefix
 * Description: Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ""
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
