/**
 * Title: Optimal Partition of String
 * Description: Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.
 * Author: Hasibul Islam
 * Date: 04/04/2023
 */

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  if (s.length === 0) return 0;

  let map = {},
    cur = 1;
  map[cur] = new Set();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (map[cur].has(char)) {
      cur++;
      map[cur] = new Set();
    }
    map[cur].add(char);
  }

  return cur;
};

console.log(partitionString("aab"));
