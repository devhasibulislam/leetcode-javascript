/**
 * Title: Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree
 * Description: Given a weighted undirected connected graph with n vertices numbered from 0 to n - 1, and an array edges where edges[i] = [ai, bi, weighti] represents a bidirectional and weighted edge between nodes ai and bi. A minimum spanning tree (MST) is a subset of the graph's edges that connects all vertices without cycles and with the minimum possible total edge weight.
 * Author: Hasibul Islam
 * Date: 29/03/2023
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((element, index) => index);
    this.size = new Array(n).fill(1);
    // number of connected components
    this.setCount = n;
  }

  findset(x) {
    if (this.parent[x] == x) {
      return x;
    }
    this.parent[x] = this.findset(this.parent[x]);
    return this.parent[x];
  }

  unite(a, b) {
    let x = this.findset(a),
      y = this.findset(b);
    if (x == y) {
      return false;
    }
    if (this.size[x] < this.size[y]) {
      [x, y] = [y, x];
    }
    this.parent[y] = x;
    this.size[x] += this.size[y];
    this.setCount -= 1;
    return true;
  }

  connected(a, b) {
    let x = this.findset(a),
      y = this.findset(b);
    return x == y;
  }
}

var findCriticalAndPseudoCriticalEdges = function (n, edges) {
  const m = edges.length;
  for (let i = 0; i < m; i++) {
    edges[i].push(i);
  }
  edges.sort((a, b) => a[2] - b[2]);

  // calculate MST value
  const uf_std = new UnionFind(n);
  let value = 0;
  for (let i = 0; i < m; i++) {
    if (uf_std.unite(edges[i][0], edges[i][1])) {
      value += edges[i][2];
    }
  }

  const ans = [[], []];

  for (let i = 0; i < m; i++) {
    // if the edge is not in the MST, it must be a critical edge
    let uf = new UnionFind(n);
    let v = 0;
    for (let j = 0; j < m; j++) {
      if (i != j && uf.unite(edges[j][0], edges[j][1])) {
        v += edges[j][2];
      }
    }
    if (uf.setCount != 1 || (uf.setCount == 1 && v > value)) {
      ans[0].push(edges[i][3]);
      continue;
    }

    // if the edge is in the MST, it may be a pseudo-critical edge
    uf = new UnionFind(n);
    uf.unite(edges[i][0], edges[i][1]);
    v = edges[i][2];
    for (let j = 0; j < m; j++) {
      if (i != j && uf.unite(edges[j][0], edges[j][1])) {
        v += edges[j][2];
      }
    }
    if (v == value) {
      ans[1].push(edges[i][3]);
    }
  }

  return ans;
};

console.log(
  findCriticalAndPseudoCriticalEdges(5, [
    [0, 1, 1],
    [1, 2, 1],
    [2, 3, 2],
    [0, 3, 2],
    [0, 4, 3],
    [3, 4, 3],
    [1, 4, 6],
  ])
);
