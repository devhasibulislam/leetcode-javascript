/**
 * Title: Number of Ways to Reach a Position After Exactly K Steps
 * Description: There are n uniquely-sized sticks whose lengths are integers from 1 to n. You want to arrange the sticks such that exactly k sticks are visible from the left. A stick is visible from the left if there are no longer sticks to the left of it.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// WRITTEN VERBOSE BELOW WITH EXPLANATION
const rearrangeSticks = (N, K) => {
  const dp = Array.from({ length: N + 1 }, () => new Array(K + 1));
  const dfs = (n, k) => {
    if (k > n || k === 0) return 0;
    if (n === 1) return 1;
    if (dp[n][k] !== undefined) return dp[n][k];
    const numberOfSmallerSticks = n - 1;
    const pickTallestStick = dfs(numberOfSmallerSticks, k - 1);
    const pickOneOfNotTallestStick = dfs(numberOfSmallerSticks, k);
    return (dp[n][k] =
      (pickTallestStick + pickOneOfNotTallestStick * numberOfSmallerSticks) %
      1000000007);
  };
  return dfs(N, K);
};
