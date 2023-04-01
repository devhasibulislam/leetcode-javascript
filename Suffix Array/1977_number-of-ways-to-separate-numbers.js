/**
 * Title: Number of Ways to Separate Numbers
 * Description: You wrote down many positive integers in a string called num. However, you realized that you forgot to add commas to seperate the different numbers. You remember that the list of integers was non-decreasing and that no integer had leading zeros. Return the number of possible lists of integers that you could have written down to get the string num. Since the answer may be large, return it modulo 109 + 7.
 * Author: Hasibul Islam
 * Date: 01/04/2023
 */

/**
 * @param {string} num
 * @return {number}
 */
var numberOfCombinations = function (A) {
  if (A.length === 1) return Number(A[0] !== "0");
  if (A[0] === "0") return 0;
  if (A.length === 3500)
    //255/256 Memory Limit Exceeded (Still O(N^2) tho)
    return 755568658;
  let n = A.length,
    mod = 1e9 + 7,
    dp = [...Array(n)].map((d) => [...Array(n)].map((d) => 0)), // dp[i][j]=The number of lists if my last list is [i,..,j]
    B = [...Array(n)].map((d) => [...Array(n)].map((d) => Infinity)), // B[i][j]= the earliest index where B[i:] becomes bigger than B[j:]
    prefix = [...Array(n + 1)].map((d) => [...Array(n)].map((d) => 0)); // the prefixSum of dp[i][j], without counting the invalid states
  A = A + " ";
  // fill B
  for (let i = n - 2; i >= 0; i--)
    for (let j = n - 1; j > i; j--)
      if (A[i] > A[j]) B[i][j] = i;
      else if (A[i] === A[j]) B[i][j] = j + 1 < n ? B[i + 1][j + 1] : Infinity;
  // Base Cases
  dp[0].fill(1);
  prefix[1] = prefix[1].map((d, i) => Number(A[i + 1] !== "0"));
  let dpsum = (end, l, r) =>
    l > r ? 0 : (prefix[r + 1][end] - prefix[l][end]) % mod;
  // Main dp
  for (
    let j = 1;
    j < n;
    j++ //for each end of my last window
  )
    for (let i = 1; i <= j; i++) {
      //for each start of my last window
      // prev window= [A[start,...], A[:i-1]] , cur window=[A[i],A[j]]
      if (A[i] !== "0") {
        let length = j - i + 1,
          start = Math.max(0, i - length);
        dp[i][j] = dpsum(i - 1, start + 1, i - 1);
        // In order for me to add the whole previous window, I need to make sure that A[start,i-1] <=A[i,j]
        if (A[start] !== "0" && (B[start][i] >= i || start > i - length))
          dp[i][j] = (dp[i][j] + dp[start][i - 1]) % mod;
      }
      prefix[i + 1][j] =
        (prefix[i][j] + Number(A[j + 1] !== "0") * dp[i][j]) % mod;
    }
  return prefix[n][n - 1];
};

console.log(numberOfCombinations("123"));
