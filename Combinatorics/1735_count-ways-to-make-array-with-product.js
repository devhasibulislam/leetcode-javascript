/**
 * Title: Count Ways to Make Array With Product
 * Description: You are given a 2D integer array, queries. For each queries[i], where queries[i] = [ni, ki], find the number of different ways you can place positive integers into an array of size ni such that the product of the integers is ki. As the number of ways may be too large, the answer to the ith query is the number of ways modulo 109 + 7.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {number[][]} queries
 * @return {number[]}
 */
let waysToFillArray = function (queries) {
  const mod = 1000000007n;
  let primes = [2];
  let pascalTriangle = [[1], [1, 1]];

  let getPrimes = function () {
    for (let i = 3; i <= 100; ++i) {
      let isPrime = true;
      for (let j = 0; j < primes.length; ++j) {
        if (i % primes[j] == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
    }
  };

  let fillPascalTriangle = function () {
    for (let i = 2; i < 10014; ++i) {
      pascalTriangle.push([1]);
      for (let j = 1; j < i && j < 14; ++j) {
        pascalTriangle[i].push(
          BigInt(pascalTriangle[i - 1][j - 1]) +
            (BigInt(pascalTriangle[i - 1][j]) % mod)
        );
      }
      pascalTriangle[i].push(1);
    }
  };

  getPrimes();
  fillPascalTriangle();

  let ANS = new Array();
  for (let [n, product] of queries) {
    let queryResult = 1n;
    for (const prime of primes) {
      let t = 0;
      while (product % prime == 0) {
        ++t;
        product = Math.floor(product / prime);
      }
      queryResult =
        (BigInt(queryResult) % mod) *
        (BigInt(pascalTriangle[n - 1 + t][t]) % mod);
    }
    if (product != 1) queryResult = (queryResult % mod) * (BigInt(n) % mod);

    ANS.push(queryResult % mod);
  }

  return ANS;
};
