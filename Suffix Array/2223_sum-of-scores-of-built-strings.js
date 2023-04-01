/**
 * Title: Sum of Scores of Built Strings
 * Description: You are building a string s of length n one character at a time, prepending each new character to the front of the string. The strings are labeled from 1 to n, where the string with length i is labeled si. For example, for s = "abaca", s1 == "a", s2 == "ca", s3 == "aca", etc. The score of si is the length of the longest common prefix between si and sn (Note that s == sn). Given the final string s, return the sum of the score of every si.
 * Author: Hasibul Islam
 * Date: 01/04/2023
 */

/**
 * @param {string} s
 * @return {number}
 */
const sumScores = (s) => {
  return s.length + zFunction(s).reduce((acc, x) => acc + x, 0);
};

const zFunction = (s) => {
  const n = s.length;
  const Z = Array(n).fill(0);
  let left = 0,
    right = 0;
  for (let i = 1; i < n; ++i) {
    if (i <= right) Z[i] = Math.min(right - i + 1, Z[i - left]);
    while (i + Z[i] < n && s[Z[i]] === s[i + Z[i]]) Z[i] += 1;
    if (i + Z[i] - 1 > right) {
      left = i;
      right = i + Z[i] - 1;
    }
  }
  return Z;
};

console.log(sumScores("abaca"));
