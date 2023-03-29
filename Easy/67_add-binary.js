/**
 * Title: Add Binary
 * Description: Given two binary strings a and b, return their sum as a binary string.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0) {
    let sum = carry;
    if (i >= 0) {
      sum += a[i] - "0";
      i--;
    }
    if (j >= 0) {
      sum += b[j] - "0";
      j--;
    }
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  if (carry !== 0) {
    result = carry + result;
  }
  return result;
};

console.log(addBinary("11", "1"));
