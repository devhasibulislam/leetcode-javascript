/**
 * Title: Repeated DNA Sequences
 * Description: The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let visitedSequence = new Set([s.slice(0, 10)]);
  let lastSequence = s.slice(0, 10);
  let repeatedSet = new Set();

  for (let g = 10; g < s.length; g++) {
    let curSequence = lastSequence.slice(1) + s[g];
    if (visitedSequence.has(curSequence)) repeatedSet.add(curSequence);
    visitedSequence.add(curSequence);
    lastSequence = curSequence;
  }

  return Array.from(repeatedSet);
};
