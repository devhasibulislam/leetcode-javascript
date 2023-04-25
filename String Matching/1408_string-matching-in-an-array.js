/**
 * Title: String Matching in an Array
 * Description: Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.
 * Author: Hasibul Islam
 * Date: 25/04/2023
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = (words) =>
  words.filter((n) => words.some((h) => h !== n && h.includes(n)));
