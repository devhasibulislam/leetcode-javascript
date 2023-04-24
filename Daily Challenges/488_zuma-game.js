/**
 * Title: Zuma Game
 * Description: In this variation of Zuma, there is a single row of colored balls on a board, where each ball can be colored red 'R', yellow 'Y', blue 'B', green 'G', or white 'W'. You also have several colored balls in your hand.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var balls = ["R", "Y", "B", "G", "W"];
var reg = new RegExp(
  balls.map((ball) => "(" + ball + "{2}" + ball + "+)").join("|")
);
var handle = function (board) {
  if (!board) return board;
  var tmp = "";
  while (((tmp = board.replace(reg, "")), tmp !== board)) board = tmp;
  return board;
};

var cache = {};

/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function (board, hand) {
  var key = board + "," + hand;
  if (cache[key]) return cache[key];
  var ans = hand.length + 1;
  board = handle(board);
  if (!board) {
    cache[key] = 0;
    return 0;
  }
  if (!hand) {
    cache[key] = -1;
    return cache[key];
  }
  var handled = {};
  for (var i = 0; i < hand.length; i++) {
    var ball = hand[i];
    if (handled[ball]) continue;
    if (i === hand.length - 1 && board.indexOf(ball.repeat(2)) === -1) continue;
    handled[ball] = true;
    for (var idx = 0; idx <= board.length; idx++) {
      if (
        board[idx] === ball ||
        (idx && board[idx] === board[idx - 1] && board[idx] !== ball)
      ) {
        var count = findMinStep(
          board.slice(0, idx) + ball + board.slice(idx),
          hand.slice(0, i) + hand.slice(i + 1)
        );
        if (count === -1) continue;
        count++;
        ans = Math.min(ans, count);
      }
    }
  }

  cache[key] = ans > hand.length ? -1 : ans;
  return cache[key];
};

console.log(findMinStep("WWRRBBWW", "WRBRW"));
