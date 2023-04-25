/**
 * Title: Repeated String Match
 * Description: Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.
 * Author: Hasibul Islam
 * Date: 25/04/2023
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const repeatedStringMatch = (A, B) => {
  const count = Math.ceil(B.length / A.length);
  const str = A.repeat(count);
  return str.includes(B) ? count : (str + A).includes(B) ? count + 1 : -1;
};
