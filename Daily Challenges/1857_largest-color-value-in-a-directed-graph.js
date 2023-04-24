/**
 * Title: Largest Color Value in a Directed Graph
 * Description: There is a directed graph of n colored nodes and m edges. The nodes are numbered from 0 to n - 1.
 * Author: Hasibul Islam
 * Date: 10/04/2023
 */

/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
const initializeGraph = (n) => {
  let G = [];
  for (let i = 0; i < n; i++) {
    G.push([]);
  }
  return G;
};
const packDGDegree = (G, Edges, Deg) => {
  for (const [u, v] of Edges) {
    G[u].push(v);
    Deg[v]++;
  }
}; // generate direct graph with indegree

const largestPathValue = (colors, edges) => {
  let n = colors.length,
    m = edges.length,
    indegree = Array(n).fill(0);
  let g = initializeGraph(n);
  packDGDegree(g, edges, indegree);
  let order = topologicalSort(g, indegree);
  if (order.length == 0) return -1;
  let res = 0;
  for (let x = 97; x <= 122; x++) {
    let c = String.fromCharCode(x),
      dp = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      let cur = order[i];
      if (colors[cur] == c) dp[cur]++;
      res = Math.max(res, dp[cur]);
      for (const child of g[cur]) dp[child] = Math.max(dp[child], dp[cur]);
    }
  }
  return res;
};

const topologicalSort = (g, indegree) => {
  let res = [],
    q = [],
    n = g.length;
  for (let i = 0; i < n; i++) {
    // all nodes with no incoming edges
    if (indegree[i] == 0) q.push(i);
  }
  while (q.length) {
    let cur = q.shift();
    res.push(cur);
    for (const child of g[cur]) {
      indegree[child]--; // remove an edge from cur to child
      if (indegree[child] == 0) q.push(child); // child has no other incoming edges, add to q for next bfs
    }
  }
  for (let i = 0; i < n; i++) {
    if (indegree[i] > 0) return [];
  }
  return res;
};
