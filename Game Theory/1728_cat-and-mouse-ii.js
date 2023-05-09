/**
 * Title: Cat and Mouse II
 * Description: Given a rows x cols matrix grid and two integers catJump and mouseJump, return true if Mouse can win the game if both Cat and Mouse play optimally, otherwise return false.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {string[]} grid
 * @param {number} catJump
 * @param {number} mouseJump
 * @return {boolean}
 */
function canMouseWin(grid, catJump, mouseJump) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const m = grid.length;
  const n = grid[0].length;
  let mouse_pos = null;
  let cat_pos = null;
  let available = 0; // available steps for mouse and cat

  // Search the start pos of mouse and cat
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== "#") {
        available++;
      }
      if (grid[i][j] === "M") {
        mouse_pos = [i, j];
      } else if (grid[i][j] === "C") {
        cat_pos = [i, j];
      }
    }
  }

  const dp = function (turn, mouse_pos, cat_pos) {
    // if (turn === m * n * 2) {
    // We already search the whole grid (9372 ms 74.3 MB)
    if (turn === available * 2) {
      // We already search the whole touchable grid (5200 ms 57.5 MB)
      return false;
    }
    if (turn % 2 === 0) {
      // Mouse
      const [i, j] = mouse_pos;
      for (let [di, dj] of dirs) {
        for (let jump = 0; jump <= mouseJump; jump++) {
          // Note that we want to do range(mouseJump + 1) instead of range(1, mouseJump + 1)
          // considering the case that we can stay at the same position for next turn.
          const new_i = i + di * jump;
          const new_j = j + dj * jump;
          if (
            0 <= new_i &&
            new_i < m &&
            0 <= new_j &&
            new_j < n &&
            grid[new_i][new_j] !== "#"
          ) {
            // Valid pos
            if (
              dp(turn + 1, [new_i, new_j], cat_pos) ||
              grid[new_i][new_j] === "F"
            ) {
              return true;
            }
          } else {
            // Stop extending the jump since we cannot go further
            break;
          }
        }
      }
      return false;
    } else {
      // Cat
      const [i, j] = cat_pos;
      for (let [di, dj] of dirs) {
        for (let jump = 0; jump <= catJump; jump++) {
          const new_i = i + di * jump;
          const new_j = j + dj * jump;
          if (
            0 <= new_i &&
            new_i < m &&
            0 <= new_j &&
            new_j < n &&
            grid[new_i][new_j] !== "#"
          ) {
            if (
              !dp(turn + 1, mouse_pos, [new_i, new_j]) ||
              (new_i === mouse_pos[0] && new_j === mouse_pos[1]) ||
              grid[new_i][new_j] === "F"
            ) {
              // This condition will also handle the case that the cat cannot jump through the mouse
              return false;
            }
          } else {
            break;
          }
        }
      }
      return true;
    }
  };

  return dp(0, mouse_pos, cat_pos);
}
