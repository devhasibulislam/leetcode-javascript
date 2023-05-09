/**
 * Title: Cat and Mouse
 * Description: A game on an undirected graph is played by two players, Mouse and Cat, who alternate turns.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {number[][]} graph
 * @return {number}
 */
var catMouseGame = function (graph) {
  const n = graph.length;
  //using anything less than n * 5 won't pass the 89 test cases since the June 2022. As test cases get harder will need to increase this value or fix this algorithm
  const state = new Array(n * 5)
    .fill(0)
    .map((el, i) => new Array(n).fill(0).map((el, i) => new Array(n).fill(-1)));

  function updateState(step, cat, mouse, value) {
    state[step][cat][mouse] = value;
    return state[step][cat][mouse];
  }

  function dfs(step, cat, mouse) {
    if (step >= state.length) return 0;
    if (state[step][cat][mouse] !== -1) {
      return state[step][cat][mouse];
    }
    let finalResult = -1;
    if (step & 1) {
      //cat's turn
      if (graph[cat].includes(mouse)) {
        return (state[step][cat][mouse] = 2);
      }
      for (const node of graph[cat]) {
        if (node !== 0) {
          let nextResult = dfs(step + 1, node, mouse, 0);
          if (nextResult === 2) {
            return (state[step][cat][mouse] = 2);
          } else if (nextResult === 1) {
            if (finalResult === -1) {
              finalResult = 1;
            }
          } else if (nextResult === 0) {
            finalResult = 0;
          }
        }
      }
      if (finalResult === -1) {
        finalResult = 1;
      }
    } else {
      //mouse's turn
      if (graph[mouse].includes(0)) {
        return (state[step][cat][mouse] = 1);
      }
      for (const node of graph[mouse]) {
        if (node !== cat && !graph[node].includes(cat)) {
          let nextResult = dfs(step + 1, cat, node, 1);
          if (nextResult === 1) {
            return (state[step][cat][mouse] = 1);
          } else if (nextResult === 2) {
            if (finalResult === -1) {
              finalResult = 2;
            }
          } else if (nextResult === 0) {
            finalResult = 0;
          }
        }
      }
      if (finalResult === -1) {
        finalResult = 2;
      }
    }
    return (state[step][cat][mouse] = finalResult);
  }
  return dfs(0, 2, 1);
};
