/**
 * Title: Count All Valid Pickup and Delivery Options
 * Description: Given n orders, each order consist in pickup and delivery services.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {number} n
 * @return {number}
 */
const ll = BigInt;
const mod = ll(1e9 + 7);
const factorial = (m, n) => {
  let res = 1n,
    cnt = 0;
  for (let i = ll(m); i > 0; i--) {
    if (cnt == n) break;
    res *= i;
    cnt++;
  }
  return res;
};

const countOrders = (n) => (factorial(2 * n, 2 * n) / ll(2 ** n)) % mod;
