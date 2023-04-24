/**
 * Title: Maximum Deletions on a String
 * Description: Return the maximum number of operations needed to delete all of s.
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

/**
 * @param {string} s
 * @return {number}
 */
var deleteString = function (s) {
  const memo = {};
  dfs(0);
  return memo[0];

  function dfs(curIdx) {
    // base case
    if (memo[curIdx]) return memo[curIdx];
    if (curIdx === s.length) return (memo[curIdx] = 0);

    memo[curIdx] = 1;
    for (let i = curIdx + 1; i < s.length; i += 2) {
      const mid = Math.floor((curIdx + i) / 2) + 1;
      if (s.substring(curIdx, mid) === s.substring(mid, i + 1)) {
        memo[curIdx] = Math.max(memo[curIdx], dfs(mid) + 1);
      }
    }
    return memo[curIdx];
  }
};
