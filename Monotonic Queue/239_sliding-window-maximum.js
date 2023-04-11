/**
 * Title: Sliding Window Maximum
 * Description: You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Author: Hasibul Islam
 * Date: 11/04/2023
 */

/**
 * @param {number[]} nums
 * @param {number} k
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

function TreeMap(g) {
  let ts = [],
    m = new Map(),
    bisect = new Bisect();
  initialize();
  return {
    set,
    get,
    firstKey,
    lastKey,
    keys,
    pollFirstEntry,
    pollLastEntry,
    ceilingKey,
    higherKey,
    lowerKey,
    floorKey,
    ceilingEntry,
    higherEntry,
    lowerEntry,
    floorEntry,
    remove,
    contains,
    size,
    findKth,
    clear,
    show,
  };
  function initialize() {
    if (g) {
      for (const [k, v] of g) {
        if (!m.has(k)) bisect.insort_right(ts, k);
        m.set(k, v);
      }
    }
  }
  function set(k, v) {
    if (!m.has(k)) bisect.insort_right(ts, k); // ts has no duplicates/unique key
    m.set(k, v); // update key with most recent value
  }
  function get(k) {
    return m.get(k);
  }
  function keys() {
    return ts;
  }
  function firstKey() {
    return ts[0];
  }
  function lastKey() {
    return ts[ts.length - 1];
  }
  function pollFirstEntry() {
    let k = ts[0],
      v = m.get(k);
    ts.splice(0, 1);
    m.delete(k);
    return [k, v];
  }
  function pollLastEntry() {
    let k = ts.pop(),
      v = m.get(k);
    m.delete(k);
    return [k, v];
  }
  function ceilingKey(e) {
    // >= lower_bound
    let idx = bisect.bisect_right(ts, e);
    let res = ts[idx - 1] == e ? e : ts[bisect.bisect_right(ts, e)];
    return res == undefined ? null : res;
  }
  function higherKey(e) {
    // > upper_bound
    let idx = bisect.bisect_right(ts, e);
    let res = ts[idx] > e ? ts[idx] : ts[bisect.bisect_right(ts, e) + 1];
    return res == undefined ? null : res;
  }
  function floorKey(e) {
    // <=
    let idx = bisect.bisect_left(ts, e);
    let res = ts[idx] == e ? e : ts[bisect.bisect_left(ts, e) - 1];
    return res == undefined ? null : res;
  }
  function lowerKey(e) {
    // <
    let idx = bisect.bisect_left(ts, e);
    let res = ts[idx] < e ? ts[idx] : ts[bisect.bisect_left(ts, e) - 1];
    return res == undefined ? null : res;
  }
  function data(k) {
    return k == null ? null : { key: k, value: m.get(k) };
  }
  function ceilingEntry(k) {
    return data(ceilingKey(k));
  }
  function higherEntry(k) {
    return data(higherKey(k));
  }
  function floorEntry(k) {
    return data(floorKey(k));
  }
  function lowerEntry(k) {
    return data(lowerKey(k));
  }
  function remove(e) {
    let idx = bisect.bisect_left(ts, e);
    if (ts[idx] == e) ts.splice(idx, 1);
    m.delete(e);
  }
  function contains(e) {
    return m.has(e);
  }
  function size() {
    return ts.length;
  }
  function findKth(k) {
    let cnt = 0;
    for (const x of ts) {
      let occ = m.get(x);
      if (cnt + occ < k) {
        cnt += occ;
      } else {
        return x;
      }
    }
  }
  function clear() {
    ts = [];
    m.clear();
  }
  function show() {
    let res = new Map();
    for (const x of ts) res.set(x, m.get(x));
    return res;
  }
}

const addOneOrManyMap = (m, x, cnt = 1) => m.set(x, m.get(x) + cnt || cnt);
const removeOneOrManyMap = (m, x, cnt = 1) => {
  let occ = m.get(x);
  occ > cnt ? m.set(x, occ - cnt) : m.remove(x);
};

const maxSlidingWindow = (a, k) => {
  let m = new TreeMap(),
    res = [],
    n = a.length;
  for (let i = 0; i < n; i++) {
    addOneOrManyMap(m, a[i]);
    let l = i - k + 1;
    if (l >= 0) {
      res.push(m.lastKey()); // modify, max is last key of treemap
      removeOneOrManyMap(m, a[l]);
    }
  }
  return res;
};
