/**
 * Title: K-divisible elements subarrays
 * Description: Given an integer array nums and two integers k and p, return the number of distinct subarrays which have at most k elements divisible by p.
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
const countDistinct = (a, k, p) => {
  let n = a.length,
    se = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sub = a.slice(i, j + 1);
      if (ok(sub, k, p)) se.add(JSON.stringify(sub)); // transfer array to string to remove duplicates
    }
  }
  return se.size;
};

const ok = (a, k, p) => {
  let cnt = 0;
  for (const x of a) {
    if (x % p == 0) cnt++;
  }
  return cnt <= k;
};
