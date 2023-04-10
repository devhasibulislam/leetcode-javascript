/**
 * Title: Number of Pairs Satisfying Inequality
 * Description: You are given two 0-indexed integer arrays nums1 and nums2, each of size n, and an integer diff.
 * Author: Hasibul Islam
 * Date: 10/04/2023
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} diff
 * @return {number}
 */
function Fenwick(n) {
  let a = Array(n).fill(0);
  return { query, update, rangeSum, tree };
  function query(i) {
    let sum = 0;
    for (i++; i > 0; i = parent(i)) sum += a[i];
    return sum;
  }
  function update(i, v) {
    for (i++; i < n; i = next(i)) a[i] += v;
  }
  function rangeSum(l, r) {
    return query(r) - query(l - 1);
  }
  function parent(x) {
    return x - lowestOneBit(x);
  }
  function next(x) {
    return x + lowestOneBit(x);
  }
  function lowestOneBit(x) {
    return x & -x;
  }
  function tree() {
    return a;
  }
}

const numberOfPairs = (a, b, diff) => {
  let n = a.length,
    res = 0,
    st = new Fenwick(1e5),
    offset = 1e5 / 2;
  for (let i = 0; i < n; i++) {
    let x = a[i] - b[i],
      y = x + diff;
    res += st.rangeSum(0, y + offset);
    st.update(x + offset, 1);
  }
  return res;
};
