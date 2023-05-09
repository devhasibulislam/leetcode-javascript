/**
 * Title: Remove Colored Pieces if Both Neighbors are the Same Color
 * Description: There are n pieces arranged in a line, and each piece is colored either by 'A' or by 'B'. You are given a string colors of length n where colors[i] is the color of the ith piece.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {string} colors
 * @return {boolean}
 */
function winnerOfGame(colors) {
  let aCnt = 0; // length of the current A sequence
  let bCnt = 0; // length of the current B sequence

  let validA = 0; // total valid Alice moves
  let validB = 0; // total valid Bob moves

  for (let i = 0; i < colors.length; i++) {
    if (colors[i] == "A") {
      if (aCnt > 1) validA++;

      aCnt++;
      bCnt = 0;
    } else {
      if (bCnt > 1) validB++;

      aCnt = 0;
      bCnt++;
    }
  }

  return validA > validB;
}
