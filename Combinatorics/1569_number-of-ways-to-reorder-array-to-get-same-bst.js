/**
 * Title: Number of Ways to Reach a Position After Exactly K Steps
 * Description: Given an array nums that represents a permutation of integers from 1 to n. We are going to construct a binary search tree (BST) by inserting the elements of nums in order into an initially empty BST. Find the number of different ways to reorder nums so that the constructed BST is identical to that formed from the original array nums.
 * Author: Hasibul Islam
 * Date: 03/05/2023
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const ll = BigInt;
const combination = (m, n) => {
  return factorial(m, n) / factorial(n, n);
};
const factorial = (m, n) => {
  let num = 1n;
  let cnt = 0;
  for (let i = ll(m); i > 0; i--) {
    if (cnt == n) break;
    num *= i;
    cnt++;
  }
  return num;
};

const mod = ll(1e9 + 7);
const numOfWays = (nums) => {
  return (dfs(nums) - 1n) % mod;
};

const dfs = (a) => {
  if (a.length <= 2) return 1n;
  let left = [],
    right = [];
  for (const x of a) if (x < a[0]) left.push(x);
  for (const x of a) if (x > a[0]) right.push(x);
  let ln = left.length,
    rn = right.length;
  return combination(ln + rn, rn) * dfs(left) * dfs(right);
};
