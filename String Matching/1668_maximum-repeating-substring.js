/**
 * Title: Maximum Repeating Substring
 * Description: For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.
 * Author: Hasibul Islam
 * Date: 25/04/2023
 */

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = (sequence, word, cnt = 0) =>
  !sequence.includes(word.repeat(cnt + 1))
    ? cnt
    : maxRepeating(sequence, word, cnt + 1);
