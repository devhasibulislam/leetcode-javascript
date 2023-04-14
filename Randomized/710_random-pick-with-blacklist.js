/**
 * Title: Random Pick with Blacklist
 * Description: You are given an integer n and an array of unique integers blacklist. Design an algorithm to pick a random integer in the range [0, n - 1] that is not in blacklist. Any integer that is in the mentioned range and not in blacklist should be equally likely to be returned.
 * Author: Hasibul Islam
 * Date: 14/04/2023
 */

/**
 * @param {number} n
 * @param {number[]} blacklist
 */
function Solution(N, blacklist) {
  let a = [],
    se = new Set(blacklist),
    n = N - se.size,
    m = new Map();
  for (let i = n; i < N; i++) {
    if (se.has(i)) continue;
    a.push(i);
  }
  let it = 0;
  for (const x of se) {
    if (x < n) {
      m.set(x, a[it]);
      it++;
    }
  }
  return { pick };
  function pick() {
    let i = randN(n) - 1;
    return m.has(i) ? m.get(i) : i;
  }
  function randN(n) {
    // get random value in range [1...n]
    return parseInt(Math.random() * n) + 1;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
