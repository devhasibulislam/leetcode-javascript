/**
 * Title: H-Index
 * Description: Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
 * Author: Hasibul Islam
 * Date: 31/03/2023
 */

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let hIndex = 0;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      hIndex++;
    } else {
      break;
    }
  }
  return hIndex;
};

console.log(hIndex([3, 0, 6, 1, 5]));
