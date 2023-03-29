/**
 * Title: Valid Arrangement of Pairs
 * Description: You are given a 0-indexed 2D integer array pairs where pairs[i] = [starti, endi]. An arrangement of pairs is valid if for every index i where 1 <= i < pairs.length, we have endi-1 == starti.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function (pairs) {
  let graph = {};
  let degrees = {}; // outdegree: positive, indegree: negative
  for (var [x, y] of pairs) {
    if (!graph[x]) graph[x] = [];
    graph[x].push(y);
    if (degrees[x] === undefined) degrees[x] = 0;
    if (degrees[y] === undefined) degrees[y] = 0;
    degrees[x]++;
    degrees[y]--;
  }
  let start = pairs[0][0];
  for (var [x] of pairs) {
    if (degrees[x] === 1) start = x; // one extra outdegree
  }
  let ans = [];
  dfs(start);

  function dfs(node) {
    while ((graph[node] || []).length) {
      let neighbor = graph[node].pop();
      dfs(neighbor);
      ans.push([node, neighbor]);
    }
  }
  return ans.reverse();
};

console.log(
  validArrangement([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
    [9, 10],
    [10, 11],
    [11, 12],
    [12, 13],
    [13, 14],
    [14, 15],
    [15, 16],
    [16, 17],
    [17, 18],
    [18, 19],
    [19, 20],
  ])
);
