/**
 * Title: Find Substring with Given Hash Value
 * Description: A substring is a contiguous non-empty sequence of characters within a string.
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

/**
 * @param {string} s
 * @param {number} power
 * @param {number} modulo
 * @param {number} k
 * @param {number} hashValue
 * @return {string}
 */
const ll = BigInt;

const subStrHash = (s, p, mod, k, hashValue) => {
  (p = ll(p)), (mod = ll(mod));
  let n = s.length,
    idx = n,
    sum = 0n,
    powerTok = 1n;
  for (let i = 0; i < k - 1; i++) powerTok = (powerTok * p) % mod;
  for (let i = n - 1; i >= 0; i--) {
    let startVal = s[i].charCodeAt() - 96;
    sum = (sum * p + ll(startVal)) % mod;
    if (i + k <= n) {
      if (sum == hashValue) idx = i;
      let endVal = s[i + k - 1].charCodeAt() - 96;
      sum = (sum - powerTok * ll(endVal)) % mod;
      if (sum < 0) sum += mod;
    }
  }
  return s.slice(idx, idx + k);
};
