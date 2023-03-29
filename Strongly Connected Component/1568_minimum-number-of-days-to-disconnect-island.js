/**
 * Title: Minimum Number of Days to Disconnect Island
 * Description: You are given an m x n binary grid grid where 1 represents land and 0 represents water. An island is a maximal 4-directionally (horizontal or vertical) connected group of 1's.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  let rc = grid.length;
  let cc = grid[0].length;
  let total1 = 0;
  // store two nodes with 1
  // in case we need to replace 1 of them with 0 and check connected components
  let r1 = null;
  let r2 = null;
  let c1 = null;
  let c2 = null;
  for (let i = 0; i < rc; i++) {
    for (let j = 0; j < cc; j++) {
      if (grid[i][j] === 1) {
        total1++;
        if (r1 === null) {
          r1 = i;
          c1 = j;
        } else if (r2 === null) {
          r2 = i;
          c2 = j;
        }
      }
    }
  }
  // check if the area containing r,c is the only connected component
  const check = (r, c) => {
    if (total1 === 0) {
      return false;
    }
    let visited = 0;
    let visit = {};
    const bfs = (r, c) => {
      if (visit[`${r}.${c}`]) {
        return;
      }
      visit[`${r}.${c}`] = true;
      if (grid[r] && grid[r][c] >= 0) {
        if (grid[r][c] === 1) {
          visited++;
          bfs(r - 1, c);
          bfs(r + 1, c);
          bfs(r, c - 1);
          bfs(r, c + 1);
        }
      }
    };
    bfs(r, c);
    if (visited < total1) {
      return false;
    }
    return true;
  };
  let connected = check(r1, c1);
  if (!connected) {
    // already satisfied
    return 0;
  }
  for (let i = 0; i < rc; i++) {
    for (let j = 0; j < cc; j++) {
      if (grid[i][j] === 1) {
        total1--;
        grid[i][j] = 0;
        let connected;
        if (i !== r1 || j !== c1) {
          connected = check(r1, c1);
        } else {
          // use the backup node to check in case we need to change the first node
          connected = check(r2, c2);
        }
        if (!connected) {
          // satisfied after making one change
          return 1;
        }
        grid[i][j] = 1;
        total1++;
      }
    }
  }

  // max change required is 2, can be easily shown via trial and error
  return 2;
};

console.log(
  minDays([
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
  ])
);
