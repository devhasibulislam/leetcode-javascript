/**
 * Title: Cracking the Safe
 * Description: There is a safe protected by a password. The password is a sequence of n digits where each digit can be in the range [0, k - 1]. The safe has a peculiar way of checking the password. When you enter in a sequence, it checks the most recent n digits that were entered each time you type a digit.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

/*

it is important that we first traverese the last n-1th of string first before adding the char in the final combination. Because if we add it to the combination before traversing all of n-1th string combination then we will stop prematurely. It is also mentioned in the solution under the hierholzer approach. To prove it, try to add the char to the seq array and then run dfs on the n-1th string. You will see that it will stop prematurely.
*/

var crackSafe = function (n, k) {
  // If k and n equal 1 the only combination possible is 0.
  if (n === 1 && k === 1) return "0";

  // visited will keep track of all visited edges.
  const visited = new Set();

  // The De Bruijn Sequence that will be the output of the function.
  const seq = [];

  // To generate a De Bruijn sequence we must traverse every combination of size n
  // containing the number from 0 to k - 1. We will start with the prefix of the
  // combination with all 0s. If n equals 3 and k is greater than 1 our prefix would be
  // 00 and the first combination, our starting edge would be 000.
  const prefix = "0".repeat(n - 1);

  // We will perform a depth first traveral until we visit every edge (combination)
  // while adding the last element of a combination to the sequence.

  // this is bottom up backtracking
  // first visit all the edges completely before adding the node to the final solution
  dfs(prefix, seq, visited, k);

  // We append the original prefix to the sequence as the a De Bruijn sequence
  // ends with the first combination. If we reverse the sequence it would still be
  // valid and in that case would start with the first combination instead.
  seq.push(prefix);

  // Join the array to return the sequence as a string.
  return seq.join("");
};

const dfs = (prefix, seq, visited, k) => {
  for (let i = 0; i < k; i++) {
    // Generate a new combination using all the numbers from 0 to k - 1
    // this will give us all the edges that are adjacent to the previous
    // combination.
    const combination = prefix + i.toString();

    // Check if the current combination has been visited we skip it.
    if (visited.has(combination)) continue;

    // If the current combination hasn't been visited add it to the visited set
    // so we do no revisit it.
    visited.add(combination);

    // Create a new prefix using the current combination
    // and continue the depth first traversal.
    dfs(combination.slice(1), seq, visited, k);

    // Add the last element of the visited combination to the sequence.
    seq.push(i);
  }
};

console.log(crackSafe(1, 2));
