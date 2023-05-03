/**
 * Title: Number of Ways to Reach a Position After Exactly K Steps
 * Description: You are given two positive integers startPos and endPos. Initially, you are standing at position startPos on an infinite number line. With one step, you can move either one position to the left, or one position to the right.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */

// dis is always positive, so we calculate dis and k

var mod = 1e9 + 7;
// dis index 0-999  k index 0-1000, according to conditions
const dp = new Array(1000).fill(0).map((_) => new Array(1001).fill(0));

var numberOfWays = function (startPos, endPos, k) {
  var dfs = (dis, k) => {
    if (dis > k) {
      return 0;
    }
    if (dis === k) {
      return 1;
    }

    // 0 means hasn't visited
    if (dp[dis][k] == 0) {
      // [dis, k] = [dis+1, k-1] + [dis-1, k-1] , but dis - 1 may be a negative value - 1, -1 is same 1
      dp[dis][k] =
        (1 + dfs(dis + 1, k - 1) + dfs(Math.abs(dis - 1), k - 1)) % mod;
    }

    // to distiguish visited and unvisited, we change default to 1, then before return should  -1
    return dp[dis][k] - 1;
  };
  return dfs(Math.abs(startPos - endPos), k);
};
