/**
 * Title: Finding MK Average
 * Description: You are given two integers, m and k, and a stream of integers. You are tasked to implement a data structure that calculates the MKAverage for the stream.
 * Author: Hasibul Islam
 * Date: 28/04/2023
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

function MultiSet(elements) {
  let a = [],
    m = new Map(),
    bi = new Bisect();
  initialize();
  return {
    insert,
    first,
    last,
    get,
    poll,
    pollLast,
    lower_bound,
    upper_bound,
    findKth,
    remove,
    removeAll,
    contains,
    size,
    clear,
    show,
  };
  function initialize() {
    if (elements) {
      for (const x of elements) {
        bi.insort_right(a, x);
        m.set(x, m.get(x) + 1 || 1);
      }
    }
  }
  function insert(x) {
    bi.insort_right(a, x);
    m.set(x, m.get(x) + 1 || 1);
  }
  function first() {
    return a[0];
  }
  function last() {
    return a[a.length - 1];
  }
  function get(i) {
    return a[i];
  }
  function poll() {
    let res = a[0];
    a.splice(0, 1);
    removeOneOrManyMap(m, res);
    return res;
  }
  function pollLast() {
    let res = a.pop();
    removeOneOrManyMap(m, res);
    return res;
  }
  function lower_bound(x) {
    return bi.bisect_left(a, x);
  }
  function upper_bound(x) {
    return bi.bisect_right(a, x);
  }
  function findKth(k) {
    return a[k - 1];
  }
  function remove(x) {
    let idx = lower_bound(x);
    if (a[idx] == x) a.splice(idx, 1);
    removeOneOrManyMap(m, x);
  }
  function removeAll(x) {
    if (contains(x)) {
      let idx = search(x),
        occ = m.get(x);
      while (occ--) a.splice(idx, 1);
      m.delete(x);
    }
  }
  function removeOneOrManyMap(m, x, cnt = 1) {
    let occ = m.get(x);
    occ > cnt ? m.set(x, occ - cnt) : m.delete(x);
  }
  function contains(x) {
    return m.has(x);
  }
  function size() {
    return a.length;
  }
  function clear() {
    a = [];
    m.clear();
  }
  function show() {
    return a;
  }
}
////////////////////////////////////////////////////////////////////////
function MKAverage(m, k) {
  let L = new MultiSet(),
    R = new MultiSet(),
    M = new MultiSet(),
    a = [],
    sum = 0,
    pos = 0,
    sz = m - 2 * k;
  return { addElement, calculateMKAverage };
  function addElement(x) {
    add(x);
    if (pos >= m) remove(a[pos % m]);
    a[pos++ % m] = x;
  }
  function calculateMKAverage() {
    if (pos < m) return -1;
    return (sum / sz) >> 0;
  }
  function add(x) {
    L.insert(x);
    if (L.size() > k) {
      let v = L.last();
      M.insert(v);
      sum += v;
      L.remove(v);
    }
    if (M.size() > sz) {
      let v = M.last();
      sum -= v;
      R.insert(v);
      M.remove(v);
    }
  }
  function remove(x) {
    if (x <= L.last()) {
      L.remove(x);
    } else if (x <= M.last()) {
      sum -= x;
      M.remove(x);
    } else {
      R.remove(x);
    }
    if (L.size() < k) {
      let v = M.first();
      L.insert(v);
      sum -= v;
      M.poll();
    }
    if (M.size() < sz) {
      let v = R.first();
      M.insert(v);
      sum += v;
      R.poll();
    }
  }
}

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
