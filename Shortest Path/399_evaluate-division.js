/**
 * Title: Evaluate Division
 * Description: You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.
 * Author: Hasibul Islam
 * Date: 04/05/2023
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const UF = new UnionFind();
  for (let i = 0; i < equations.length; i++) {
    const [dividend, divisor] = equations[i];
    const value = values[i];

    UF.union(dividend, divisor, value);
  }

  const results = [];

  for (let i = 0; i < queries.length; i++) {
    const [dividend, divisor] = queries[i];

    if (!UF.arr[dividend] || !UF.arr[divisor]) {
      results[i] = -1;
    } else {
      let [dividendGid, dividendWeight] = UF.find(dividend);
      let [divisorGid, divisorWeight] = UF.find(divisor);
      if (dividendGid !== divisorGid) {
        results[i] = -1;
      } else {
        results[i] = dividendWeight / divisorWeight;
      }
    }
  }

  return results;
};

class UnionFind {
  arr = {};

  find(key) {
    if (!this.arr[key]) this.arr[key] = [key, 1];
    const [entryKey, entryValue] = this.arr[key];

    if (entryKey !== key) {
      const [newEntryKey, newEntryValue] = this.find(entryKey);
      this.arr[key] = [newEntryKey, entryValue * newEntryValue];
    }
    return this.arr[key];
  }
  union(dividend, divisor, value) {
    let [dividendGid, dividendWeight] = this.find(dividend);
    let [divisorGid, divisorWeight] = this.find(divisor);

    if (dividendGid !== divisorGid) {
      this.arr[dividendGid] = [
        divisorGid,
        (divisorWeight * value) / dividendWeight,
      ];
    }
  }
}
