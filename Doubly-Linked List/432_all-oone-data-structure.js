/**
 * Title: All-Oone-Data-Structure
 * Description: Design a data structure to store the strings' count with the ability to return the strings with minimum and maximum counts.
 * Author: Hasibul Islam
 * Date: 06/04/2023
 */

const stmvalue_in = (m) => new Map([...m].sort((x, y) => x[1] - y[1]));
const stmvalue_de = (m) => new Map([...m].sort((x, y) => y[1] - x[1]));

function AllOne() {
  let m = new Map();
  let preOp = "start"; // record pre operation
  return { inc, dec, getMaxKey, getMinKey };
  function inc(k) {
    m.set(k, m.get(k) + 1 || 1);
    preOp = "inc";
  }
  function dec(k) {
    let occ = m.get(k);
    occ == 1 ? m.delete(k) : m.set(k, occ - 1);
    preOp = "dec";
  }
  function getMaxKey() {
    if (preOp != "max") m = stmvalue_de(m);
    preOp = "max";
    return m.keys().next().value || "";
  }
  function getMinKey() {
    if (preOp != "min") m = stmvalue_in(m);
    preOp = "min";
    return m.keys().next().value || "";
  }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
