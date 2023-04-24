/**
 * Title: Successful Pairs of Spells and Potions
 * Description: You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.
 * Author: Hasibul Islam
 * Date: 02/04/2023
 */

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
function Bisect() {
  return { insort_right, insort_left, bisect_left, bisect_right };
  function insort_right(a, x, lo = 0, hi = null) {
    lo = bisect_right(a, x, lo, hi);
    a.splice(lo, 0, x);
  }
  function bisect_right(a, x, lo = 0, hi = null) {
    // > upper_bound
    if (lo < 0) throw new Error("lo must be non-negative");
    if (hi == null) hi = a.length;
    while (lo < hi) {
      let mid = parseInt((lo + hi) / 2);
      a[mid] > x ? (hi = mid) : (lo = mid + 1);
    }
    return lo;
  }
  function insort_left(a, x, lo = 0, hi = null) {
    lo = bisect_left(a, x, lo, hi);
    a.splice(lo, 0, x);
  }
  function bisect_left(a, x, lo = 0, hi = null) {
    // >= lower_bound
    if (lo < 0) throw new Error("lo must be non-negative");
    if (hi == null) hi = a.length;
    while (lo < hi) {
      let mid = parseInt((lo + hi) / 2);
      a[mid] < x ? (lo = mid + 1) : (hi = mid);
    }
    return lo;
  }
}

const successfulPairs = (a, b, p) => {
  a = a.map((x, i) => [x, i]);
  b.sort((x, y) => x - y);
  let bi = new Bisect(),
    res = Array(a.length).fill(0);
  for (const [x, i] of a) {
    let min = Math.ceil(p / x),
      idx = bi.bisect_left(b, min),
      cnt = b.length - idx;
    res[i] = cnt;
  }
  return res;
};

console.log(successfulPairs([3, 2, 2, 3], [3, 2, 3, 2], 3));
