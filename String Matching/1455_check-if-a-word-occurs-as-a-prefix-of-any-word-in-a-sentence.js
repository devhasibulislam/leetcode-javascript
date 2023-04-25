/**
 * Title: Check if a Word Occurs As a Prefix of Any Word in a Sentence
 * Description: Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
 * Author: Hasibul Islam
 * Date: 25/04/2023
 */

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = (sentence, searchWord) => {
  for (let i = 0, j = 0, cntWords = 1; i < sentence.length; i++, j++)
    if (" " === sentence[i]) cntWords++, (j = -1);
    else if (sentence[i] !== searchWord[j]) j = Infinity;
    else if (j === searchWord.length - 1) return cntWords;
  return -1;
};
