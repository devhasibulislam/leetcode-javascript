/**
 * Title: Minimum Number of Operations to Make String Sorted
 * Description: Return the number of operations needed to make the string sorted. Since the answer can be too large, return it modulo 109 + 7.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {string} s
 * @return {number}
 */

let factorial = [1n],
  invFactorial = [1n],
  mod = BigInt(1e9 + 7);

var findModularMultiplicativeInverse = (a) => {
  let product = 1n,
    m = mod - 2n;

  while (m) {
    if (m & 1n) product = (product * a) % mod;
    m >>= 1n;
    a = (a * a) % mod;
  }
  return product;
};

for (let i = 1; i <= 3000; i++) {
  factorial[i] = (BigInt(i) * factorial[i - 1]) % mod;
  invFactorial[i] = findModularMultiplicativeInverse(factorial[i]);
}

var makeStringSorted = function (s) {
  let freq = Array(26).fill(0),
    ans = 0n;

  for (let i = s.length - 1; i >= 0; i--) {
    freq[s.charCodeAt(i) - 97]++;

    let comb = freq.reduce(
        (acc, cur) => (acc * invFactorial[cur]) % mod,
        factorial[s.length - i - 1]
      ),
      acc = 0;

    for (let j = 0; j < s.charCodeAt(i) - 97; j++) acc += freq[j];

    ans = (ans + ((comb * BigInt(acc)) % mod)) % mod;
  }

  return ans;
};
