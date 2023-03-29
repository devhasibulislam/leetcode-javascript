/**
 * Title: Critical Connections in a Network
 * Description: There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
  const adjList = new Map();
  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }
  for (let i = 0; i < connections.length; i++) {
    const [a, b] = connections[i];
    adjList.get(a).push(b);
    adjList.get(b).push(a);
  }

  const visited = new Set();
  const low = new Array(n).fill(0);
  const disc = new Array(n).fill(0);
  const parent = new Array(n).fill(-1);
  const critical = [];

  let time = 0;

  function dfs(u) {
    visited.add(u);
    low[u] = time;
    disc[u] = time;
    time++;

    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      const v = neighbors[i];
      if (!visited.has(v)) {
        parent[v] = u;
        dfs(v);
        low[u] = Math.min(low[u], low[v]);
        if (low[v] > disc[u]) {
          critical.push([u, v]);
        }
      } else if (v !== parent[u]) {
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
    }
  }

  return critical;
};

console.log(
  criticalConnections(4, [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ])
);
