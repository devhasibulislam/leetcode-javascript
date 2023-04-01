/**
 * Title: Longest Common Subpath
 * Description: There is a country of n cities numbered from 0 to n - 1. In this country, there is a road connecting every pair of cities. There are m friends numbered from 0 to m - 1 who are traveling through the country. Each one of them will take a path consisting of some cities. Each path is represented by an integer array that contains the visited cities in order. The path may contain a city more than once, but the same city will not be listed consecutively. Given an integer n and a 2D integer array paths where paths[i] is an integer array representing the path of the ith friend, return the length of the longest common subpath that is shared by every friend's path, or 0 if there is no common subpath at all. A subpath of a path is a contiguous sequence of cities within that path.
 * Author: Hasibul Islam
 * Date: 01/04/2023
 */

/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number}
 */
const mod = 180143985094819841n;
const ll = BigInt;
const multi = (x, y, mod) => {
  return (ll(x) * ll(y)) % mod;
};

const longestCommonSubpath = (n, paths) => {
  let base = ll(n + 37);
  let [low, high] = [0, 1e5];
  for (const p of paths) high = Math.min(high, p.length);
  while (low < high) {
    let mid = (low + high + 1) >> 1;
    let se = new Set();
    let first = true;
    for (const path of paths) {
      let nset = new Set();
      let [h, p] = [0n, 1n];
      for (let i = 0; i < mid; i++) {
        h = (multi(h, base, mod) + ll(path[i])) % mod;
        if (i) p = multi(p, base, mod);
      }
      if (first || se.has(h)) nset.add(h);
      for (let i = mid; i < path.length; i++) {
        h =
          (multi((h + mod - multi(path[i - mid], p, mod)) % mod, base, mod) +
            ll(path[i])) %
          mod;
        if (first || se.has(h)) nset.add(h);
      }
      first = false;
      se = nset;
      if (se.size == 0) break;
    }
    se.size == 0 ? (high = mid - 1) : (low = mid);
  }
  return low;
};

console.log(
  longestCommonSubpath(3, [
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ])
);
